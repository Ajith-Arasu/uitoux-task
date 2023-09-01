// File: orderItem.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    static associate(models) {
      OrderItem.belongsTo(models.Order, {
        foreignKey: 'orderId'
      });
      OrderItem.belongsTo(models.Part, {
        foreignKey: 'partId'
      });
    }
  }
  OrderItem.init(
    {
      quantity: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'orderItem'
    }
  );
  return OrderItem;
};
