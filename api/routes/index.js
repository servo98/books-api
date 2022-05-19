//Routes
import bookRoutes from './bookRoutes.js';
import authRoutes from './authRoutes.js';
import clientRoutes from './clientRoutes.js';
import rentalRoutes from './rentalRoutes.js';
import categoryRoutes from './categoryRoutes.js';

//Middlewares
import auth from '../middlewares/auth.js';

export default [
  {
    path: '/auth',
    resolver: authRoutes,
    middlewares: [],
  },
  {
    path: '/books',
    resolver: bookRoutes,
    middlewares: [auth],
  },
  {
    path: '/clients',
    resolver: clientRoutes,
    middlewares: [auth],
  },
  {
    path: '/rentals',
    resolver: rentalRoutes,
    middlewares: [auth],
  },
  {
    path: '/categories',
    resolver: categoryRoutes,
    middlewares: [auth],
  },
];
