import faker, { Faker } from '@faker-js/faker';

import database from './database.js';

const seedDB = async () => {
  const items = 30;

  const dataToInsert = [];

  for (let i = 1; i <= items; i++) {
    // dataToInsert.push({
    //   nombre: faker.name.findName(),
    //   nacimiento: faker.date.past().toISOString(),
    //   correo: faker.internet.email(),
    //   telefono: faker.phone.phoneNumber('501-###-###'),
    // });
    // dataToInsert.push({
    //   nombre: faker.word.adjective(),
    // });
    // dataToInsert.push({
    //   direccion: faker.address.streetAddress(true),
    //   cliente_id: i,
    // });
    // dataToInsert.push({
    //   titulo: faker.lorem.words(),
    //   editorial: faker.company.companyName(),
    //   categoria_id: faker.datatype.number({ min: 1, max: 30 }),
    //   fecha_impresion: faker.date.past(),
    //   no_paginas: faker.datatype.number(500),
    //   adultos: faker.datatype.boolean(),
    //   portada: faker.image.imageUrl(),
    //   cantidad: faker.datatype.number({ min: 1, max: 5 }),
    // });
    // dataToInsert.push({
    //   nombre: faker.name.findName(),
    //   telefono: faker.phone.phoneNumber('501-###-###'),
    //   client_id: faker.datatype.number({ min: 1, max: 31 }),
    // });
    // dataToInsert.push({
    //   nombre: faker.name.findName(),
    //   nacimiento: faker.date.past().toISOString(),
    //   correo: faker.internet.email(),
    //   app: faker.internet.domainName(),
    //   password: faker.internet.password(),
    // });
  }

  try {
    await database('usuarios').insert(dataToInsert);
    console.log('Registros creados satisfactoriamente');
  } catch (error) {
    console.error(error);
  }
};

seedDB();
