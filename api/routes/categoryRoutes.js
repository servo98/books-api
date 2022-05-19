import genericRoutes from './genericRoutes';
import categoryController from '../controllers/categoryController.js';

const routes = genericRoutes(categoryController);

export default routes;
