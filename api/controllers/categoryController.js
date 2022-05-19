import genericController from './genericController.js';
const crud = genericController('category', 'categories');

export default {
  ...crud,
};
