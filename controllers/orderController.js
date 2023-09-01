const { db } = require('../models');
const Order = db.Order;

module.exports = {
  getAllOrders: async (req, res) => {
    try {
      const orders = await Order.findAll();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', Error:error });
    }
  },

  getOrderById: async (req, res) => {
    const orderId = req.params.id;
    try {
      const order = await Order.findByPk(orderId);
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
      res.json(order);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', Error:error });
    }
  },

  createOrder: async (req, res) => {
    const { orderDate, customerId } = req.body;
    try {
      const newOrder = await Order.create({
        orderDate,
        customerId
      });
      res.status(201).json(newOrder);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', Error:error });
    }
  },

  updateOrder: async (req, res) => {
    const orderId = req.params.id;
    const { orderDate, customerId } = req.body;
    try {
      const order = await Order.findByPk(orderId);
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
      await order.update({
        orderDate,
        customerId
      });
      res.json(order);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', Error:error });
    }
  },

  deleteOrder: async (req, res) => {
    const orderId = req.params.id;
    try {
      const order = await Order.findByPk(orderId);
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
      await order.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', Error:error });
    }
  }
};
