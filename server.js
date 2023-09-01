// server.js

const authMiddleware = require('../middlewares/authMiddleware');
const express = require('express');
const app = express();

// Import the routes middleware
const routes = require('./routes'); // Path to your routes middleware

// Pass the app instance to the routes middleware to define routes
routes(app);

// Start the server
const port = 4450;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
