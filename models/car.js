'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    static associate(models) {
      Car.belongsTo(models.Customer, {
        foreignKey: 'ownerId'
      });
    }
  }
  Car.init(
    {
      make: DataTypes.STRING,
      model: DataTypes.STRING,
      year: DataTypes.INTEGER,
      VIN: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'cars'
    }
  );
  return Car;
};
