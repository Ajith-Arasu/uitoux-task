const { db } = require('../models');
const Employee = db.Employee;

module.exports = {
  getAllEmployees: async (req, res) => {
    try {
      const employees = await Employee.findAll();
      res.json(employees);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', Error:error });
    }
  },

  getEmployeeById: async (req, res) => {
    const employeeId = req.params.id;
    try {
      const employee = await Employee.findByPk(employeeId);
      if (!employee) {
        return res.status(404).json({ message: 'Employee not found' });
      }
      res.json(employee);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', Error:error });
    }
  },

  createEmployee: async (req, res) => {
    const { firstName, lastName, role, hireDate } = req.body;
    try {
      const newEmployee = await Employee.create({
        firstName,
        lastName,
        role,
        hireDate
      });
      res.status(201).json(newEmployee);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', Error:error });
    }
  },

  updateEmployee: async (req, res) => {
    const employeeId = req.params.id;
    const { firstName, lastName, role, hireDate } = req.body;
    try {
      const employee = await Employee.findByPk(employeeId);
      if (!employee) {
        return res.status(404).json({ message: 'Employee not found' });
      }
      await employee.update({
        firstName,
        lastName,
        role,
        hireDate
      });
      res.json(employee);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', Error:error });
    }
  },

  deleteEmployee: async (req, res) => {
    const employeeId = req.params.id;
    try {
      const employee = await Employee.findByPk(employeeId);
      if (!employee) {
        return res.status(404).json({ message: 'Employee not found' });
      }
      await employee.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', Error:error });
    }
  }
};
