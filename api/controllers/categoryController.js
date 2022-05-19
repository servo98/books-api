import genericController from './genericController';
const crud = genericController('category', 'categories');

export default {
  ...crud,
};
