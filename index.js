const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json()); // For parsing application/json

// Connect to MongoDB
connectDB();

// Use Routes
app.use('/api', userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
