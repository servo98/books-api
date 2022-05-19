import genericController from './genericController.js';
const crud = genericController('client', 'clients');

export default {
  ...crud,
};
