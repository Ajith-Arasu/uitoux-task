// File: order.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.Customer, {
        foreignKey: 'customerId'
      });
      Order.hasMany(models.OrderItem, {
        foreignKey: 'orderId'
      });
    }
  }
  Order.init(
    {
      orderDate: DataTypes.DATE
    },
    {
      sequelize,
      modelName: 'order'
    }
  );
  return Order;
};
