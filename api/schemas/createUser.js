import Joi from 'joi';

const createUser = Joi.object().keys({
  nombre: Joi.string().required(),
  nacimiento: Joi.date(),
  correo: Joi.string().required(),
  app: Joi.string().required(),
  password: Joi.string().required(),
});

export default createUser;
