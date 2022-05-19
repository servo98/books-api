import genericController from './genericController';
const crud = genericController('rental', 'rentals');

export default {
  ...crud,
};
