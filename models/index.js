const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.json'); // Adjust the path if needed

// Create a Sequelize instance and provide the necessary connection configuration
const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
  host: config.development.host,
  dialect: config.development.dialect, // Specify the correct dialect (e.g., 'postgres', 'mysql', 'sqlite')
  // Other options...
});

const Car = require('./car')(sequelize, DataTypes);
const Part = require('./parts')(sequelize, DataTypes);
const Customer = require('./customer')(sequelize, DataTypes);
const Order = require('./order')(sequelize, DataTypes);
const OrderItem = require('./orderItem')(sequelize, DataTypes);
const Employee = require('./employee')(sequelize, DataTypes);

const db = {
  Car,
  Part,
  Customer,
  Order,
  OrderItem,
  Employee
};

// Define associations here (if needed)
// e.g., Car.belongsTo(Customer, { foreignKey: 'ownerId' });

// Export the models and Sequelize instance
module.exports = {
  db,
  sequelize, // Export the Sequelize instance for use in other parts of your app
};
