const { db } = require('../models');
const Car = db.Car;

module.exports = {
  getAllCars: async (req, res) => {
    try {
      console.log("calling car controller")
      const cars = await Car.findAll();
      console.log("carrrr",cars)
      res.json(cars);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' , Error:error });
    }
  },

  getCarById: async (req, res) => {
    const carId = req.params.id;
    try {
      const car = await Car.findByPk(carId);
      if (!car) {
        return res.status(404).json({ message: 'Car not found' });
      }
      res.json(car);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', Error:error });
    }
  },

  createCar: async (req, res) => {
    const { make, model, year, VIN } = req.body;
    try {
      const newCar = await Car.create({
        make,
        model,
        year,
        VIN
      });
      res.status(201).json(newCar);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', Error:error });
    }
  },

  updateCar: async (req, res) => {
    const carId = req.params.id;
    const { make, model, year, VIN } = req.body;
    try {
      const car = await Car.findByPk(carId);
      if (!car) {
        return res.status(404).json({ message: 'Car not found' });
      }
      await car.update({
        make,
        model,
        year,
        VIN
      });
      res.json(car);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', Error:error });
    }
  },

  deleteCar: async (req, res) => {
    const carId = req.params.id;
    try {
      const car = await Car.findByPk(carId);
      if (!car) {
        return res.status(404).json({ message: 'Car not found' });
      }
      await car.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', Error:error });
    }
  }
};
