const express = require('express');
const mongoose = require('mongoose');
const reviewRoutes = require('./routes/review.routes');
require('dotenv').config({ path: '../.env' });

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/reviews', reviewRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

module.exports = app;
