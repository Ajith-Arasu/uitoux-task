// File: employee.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    static associate(models) {
      // Define associations here
    }
  }
  Employee.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      role: DataTypes.STRING,
      hireDate: DataTypes.DATE
    },
    {
      sequelize,
      modelName: 'employee'
    }
  );
  return Employee;
};
