'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('cars', [
      {
        make: 'Toyota',
        model: 'Camry',
        year: 2020,
        VIN: 'XYZ123456789',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        make: 'Honda',
        model: 'Civic',
        year: 2021,
        VIN: 'ABC987654321',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        make: 'Ford',
        model: 'Mustang',
        year: 2019,
        VIN: 'DEF456789012',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        make: 'Chevrolet',
        model: 'Impala',
        year: 2022,
        VIN: 'GHI345678901',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        make: 'Nissan',
        model: 'Altima',
        year: 2021,
        VIN: 'JKL234567890',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('cars', null, {});
  }
};
