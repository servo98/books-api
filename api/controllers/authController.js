import connection from '../utils/database.js';
import bcryp from 'bcrypt';
import jwt from 'jwt-simple';

const register = (req, res) => {
    const { user } = req.body;
    try {
        user.password = await bcryp.hash(user.password, 3);
        const newUser = await connection('usuarios')
            .insert(user)
            .returning('*');
        delete newUser.password;
        return res.json({
            msg: 'Usuario registrado correctamente 😂',
            user: newUser,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            msg: 'Error al registrar nuevo usuario',
        });
    }
};

const login = (req, res) => {

    const { email, password } = req.body;

    try {
        const user = await connection('usuarios').first('*').where({
            correo: email,
        });

        const match = await bcryp.compare(password, user.password);

        if (!match) {
            return res.status(401).json({
                msg: 'Bad credentials',
            });
        }

        delete user.password;

        const expDate = new Date();
        expDate.setMinutes(expDate.getMinutes() + 1);

        const token = jwt.encode(
        {
            user,
            expDate,
        },
        process.env.JWT_SECRET
        );

        return res.json({
            msg: 'Usuario encontrado',
            token,
        });
  } catch (err) {
    return res.status(404).json({
      msg: 'No existe un usuario registrado con ese correo',
    });
  }
};


export {
    register,
    login
}
