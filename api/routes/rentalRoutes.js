import genericRoutes from './genericRoutes';
import rentalController from '../controllers/rentalController.js';

const routes = genericRoutes(rentalController);

export default routes;
