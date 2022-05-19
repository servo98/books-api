import genericRoutes from './genericRoutes';
import bookController from '../controllers/bookController.js';

const routes = genericRoutes(bookController);

export default routes;
