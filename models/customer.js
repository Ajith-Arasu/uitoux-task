// File: customer.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    static associate(models) {
      Customer.hasMany(models.Car, {
        foreignKey: 'ownerId'
      });
      // Define other associations here
    }
  }
  Customer.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNumber: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'customer'
    }
  );
  return Customer;
};
