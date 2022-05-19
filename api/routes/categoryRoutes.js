import genericRoutes from './genericRoutes.js';
import categoryController from '../controllers/categoryController.js';

const routes = genericRoutes(categoryController);

export default routes;
