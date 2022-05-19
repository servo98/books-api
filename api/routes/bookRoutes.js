import genericRoutes from './genericRoutes.js';
import bookController from '../controllers/bookController.js';

const routes = genericRoutes(bookController);

export default routes;
