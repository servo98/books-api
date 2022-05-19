import express from 'express';

export default (controller) => {
  const router = express.Router();

  router.route('/').get(controller.index).post(controller.create);

  router
    .route('/:id')
    .get(controller.show)
    .put(controller.update)
    .delete(controller.destroy);
  return router;
};
