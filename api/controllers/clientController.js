import database from '../utils/database.js';
import genericController from './genericController.js';

const crud = genericController('client', 'clients');

const history = async (req, res) => {
  try {
    const result = database('clients').select();
  } catch (error) {}
};

export default {
  ...crud,
  history,
};
