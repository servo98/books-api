import genericController from './genericController.js';
const crud = genericController('book', 'books');

export default {
  ...crud,
};
