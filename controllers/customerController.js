const jwt = require('jsonwebtoken');
const { db } = require('../models');
const Customer = db.Customer;
const encryptionHelper = require('../helpers/encryptionHelper'); 

module.exports = {
  getAllCustomers: async (req, res) => {
    try {
      const customers = await Customer.findAll();
      res.json(customers);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', Error:error });
    }
  },

  getCustomerById: async (req, res) => {
    const customerId = req.params.id;
    try {
      const customer = await Customer.findByPk(customerId);
      if (!customer) {
        return res.status(404).json({ message: 'Customer not found' });
      }
      res.json(customer);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', Error:error });
    }
  },


  createCustomer: async (req, res) => {
    const { firstName, lastName, email, phoneNumber, password } = req.body;
    try {
      // Hash the password using the helper function
      const hashedPassword = await encryptionHelper.hashPassword(password);
  
      const newCustomer = await Customer.create({
        firstName,
        lastName,
        email,
        phoneNumber,
        password: hashedPassword // Store the hashed password
      });
  
      res.status(201).json(newCustomer);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', Error: error });
    }
  },
  
  
  logIn: async (req, res) => {
    const { email} = req.body;
    try {
   
      // User is authenticated, generate JWT token
      const accessToken = jwt.sign({email}, 'your_secret_key', { expiresIn: '1h' });
  
      // Send the access token as part of the response
      res.status(200).json({ message: 'Login successful', accessToken });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', Error: error });
    }
  },
  
  

  updateCustomer: async (req, res) => {
    const customerId = req.params.id;
    const { firstName, lastName, email, phoneNumber } = req.body;
    try {
      const customer = await Customer.findByPk(customerId);
      if (!customer) {
        return res.status(404).json({ message: 'Customer not found' });
      }
      await customer.update({
        firstName,
        lastName,
        email,
        phoneNumber
      });
      res.json(customer);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', Error:error });
    }
  },

  deleteCustomer: async (req, res) => {
    const customerId = req.params.id;
    try {
      const customer = await Customer.findByPk(customerId);
      if (!customer) {
        return res.status(404).json({ message: 'Customer not found' });
      }
      await customer.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', Error:error });
    }
  }
};
