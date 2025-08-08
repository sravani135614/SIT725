const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  frequency: { type: String, enum: ['daily', 'weekly', 'monthly'] },
  target: Number,
  progress: { type: Number, default: 0 }
});

module.exports = mongoose.model('Habit', habitSchema);
