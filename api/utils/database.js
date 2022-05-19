import knex from 'knex';
import dotenv from 'dotenv';

dotenv.config({
  path: '../../.env',
});

const connection = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
};

console.log(connection);

export default knex({
  client: 'pg',
  connection,
  migrations: {
    directory: './migrations',
    tableName: 'migrations',
  },
  seeds: {
    directory: './seeds',
  },
});
