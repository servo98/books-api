import database from '../utils/database';

export default (singular, plural) => ({
  index: async (_, res) => {
    try {
      const rows = await database.select('*').from(plural);
      return res.json({
        msg: `${plural} obtendos satisfactoriamente`,
        data: rows,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        msg: `Error al obtener ${plural}`,
      });
    }
  },
  create: async (req, res) => {
    const { data } = req.body;
    try {
      const newRegister = await database(plural).insert(data).returning('*');
      return res.json({
        msg: `Nuevo ${singular} creado`,
        data: newRegister,
      });
    } catch (err) {
      console.error(err);
      return res.tatus(500).json({
        msg: `Error al crear nuevo ${plural}`,
      });
    }
  },
  show: async (req, res) => {
    const { id } = req.params;
    try {
      const item = database
        .first('*')
        .from(plural)
        .where({
          [`${singular}_id`]: id,
        });
      return res.json({
        msg: `Objeto ${singular} encontrado`,
        data: item,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        msg: `Error al obtener ${singular}`,
      });
    }
  },
  update: async (req, res) => {},
  destroy: async (req, res) => {},
});
