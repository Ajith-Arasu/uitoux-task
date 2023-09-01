const bcrypt = require('bcrypt');
const Customer = require('../models').Customer; // Adjust the path accordingly
const encryptionHelper = require('../helpers/encryptionHelper'); // Adjust the path accordingly

async function authenticateUser(req, res, next) {
  const { email, password } = req.body;

  try {
    const user = await Customer.findOne({
      where: { email }
    });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isValidPassword = await encryptionHelper.validatePassword(password, user.password)

    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Store user object in request for later use
    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', Error: error });
  }
}

module.exports = {
  authenticateUser
};
