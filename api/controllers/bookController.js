import genericController from './genericController';
const crud = genericController('book', 'books');

export default {
  ...crud,
};
