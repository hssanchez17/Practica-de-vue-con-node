'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Nota', [{
        nombre:'Nota1',
        descripcion: 'Esta es la nota 1',
        usuarioId: '1',
        activo: 'true',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Nota', null, {});
  }
};
