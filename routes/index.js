const carController = require('../controllers/carController');
const customerController = require('../controllers/customerController');
const orderController = require('../controllers/orderController');
const employeeController = require('../controllers/employeeController');
const authMiddleware = require('../middlewares/authMiddleware');

module.exports = (app) => {
  app.get('/cars', carController.getAllCars);
  app.get('/cars/:id', carController.getCarById);
  app.post('/cars', carController.createCar);
  app.put('/cars/:id', carController.updateCar);
  app.delete('/cars/:id', carController.deleteCar);

  app.get('/customers', customerController.getAllCustomers);
  app.get('/customers/:id', customerController.getCustomerById);
  app.post('/customers', customerController.createCustomer);
  app.post('/login', authMiddleware.authenticateUser, customerController.logIn);
  app.put('/customers/:id', customerController.updateCustomer);
  app.delete('/customers/:id',customerController.deleteCustomer);

  app.get('/orders', orderController.getAllOrders);
  app.get('/orders/:id', orderController.getOrderById);
  app.post('/orders', orderController.createOrder);
  app.put('/orders/:id', orderController.updateOrder);
  app.delete('/orders/:id', orderController.deleteOrder);

  app.get('/employees', employeeController.getAllEmployees);
  app.get('/employees/:id', employeeController.getEmployeeById);
  app.post('/employees', employeeController.createEmployee);
  app.put('/employees/:id', employeeController.updateEmployee);
  app.delete('/employees/:id', employeeController.deleteEmployee);
};
