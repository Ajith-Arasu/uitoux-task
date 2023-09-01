'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('employees', [
      {
        firstName: 'Michael',
        lastName: 'Scott',
        role: 'Regional Manager',
        hireDate: '2021-01-15',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Jim',
        lastName: 'Halpert',
        role: 'Sales Representative',
        hireDate: '2021-02-10',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('employees', null, {});
  }
};
