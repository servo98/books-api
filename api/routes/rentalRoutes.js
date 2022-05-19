import genericRoutes from './genericRoutes.js';
import rentalController from '../controllers/rentalController.js';

const routes = genericRoutes(rentalController);

export default routes;
