import genericRoutes from './genericRoutes.js';
import clientController from '../controllers/clientController.js';

const routes = genericRoutes(clientController);

export default routes;
