import express from 'express';
import { booksController } from '../controllers/index.js';

const router = express.Router();

router.route('/').get(userController.index).post(userController.create);

router
  .route('/:id')
  .get(userController.show)
  .put(userController.update)
  .delete(userController.destroy);

export default router;
