import genericController from './genericController';
const crud = genericController('client', 'clients');

export default {
  ...crud,
};
