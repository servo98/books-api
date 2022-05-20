import genericRoutes from './genericRoutes.js';
import clientController from '../controllers/clientController.js';

const routes = genericRoutes(clientController);

routes.get('/history', clientController.history);

export default routes;
