import genericController from './genericController.js';
const crud = genericController('rental', 'rentals');

export default {
  ...crud,
};
