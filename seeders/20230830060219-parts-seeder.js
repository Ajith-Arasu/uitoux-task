'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('parts', [
      {
        name: 'Spark Plug',
        description: 'Standard spark plug for gasoline engines.',
        price: 5.99,
        stockQuantity: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Oil Filter',
        description: 'High-quality oil filter for regular engine maintenance.',
        price: 9.99,
        stockQuantity: 150,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('parts', null, {});
  }
};
