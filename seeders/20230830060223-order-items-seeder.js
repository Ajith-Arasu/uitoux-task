'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('orderItems', [
      {
        orderId: 1,
        partId: 1, 
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 1, 
        partId: 2,
        quantity: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('orderItems', null, {});
  }
};
