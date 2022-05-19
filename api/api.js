import express from 'express';

import routes from './routes/index.js';

const api = express();

//Configurar middlewares generales
api.use(express.json());

//REGIStar routes

api.get('/status', (_, res) => {
  res.send('API en linea y funcionando');
});

routes.forEach((route) =>
  api.use(route.path, route.middlewares, route.resolver)
);

api.use((err, _, res, __) => {
  if (err instanceof SyntaxError) {
    return res.status(400).json({
      msg: 'Json inválido 😉',
    });
  }
  console.error(err);
  return res.status(500).json({
    msg: 'Ha ocurrido un error ups 😢',
  });
});

export default api;
