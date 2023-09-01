'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('orders', [
      {
        orderDate: new Date(),
        customerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderDate: new Date(),
        customerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('orders', null, {});
  }
};
