import genericRoutes from './genericRoutes';
import clientController from '../controllers/clientController.js';

const routes = genericRoutes(clientController);

export default routes;
