require('dotenv').config();
console.log('MONGO_URI:', process.env.MONGO_URI);

const MONGO_URI = process.env.MONGO_URI;

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware and routes
app.use(cors());
app.use(express.json());

const itemsRoute = require('./routes/items');
app.use('/api/items', itemsRoute);

app.use(express.static(path.join(__dirname, '../public')));

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('DB connection error', err);
    process.exit(1);
  });
