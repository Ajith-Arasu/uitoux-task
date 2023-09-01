// File: part.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Part extends Model {
    static associate(models) {
      // Define associations here
    }
  }
  Part.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      price: DataTypes.DECIMAL(10, 2),
      stockQuantity: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'part'
    }
  );
  return Part;
};
