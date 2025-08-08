require('dotenv').config();
const mongoose = require('mongoose');
const Habit = require('./models/habit'); // Import your model

const MONGO_URI = process.env.MONGO_URI;

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);

    // Clear existing data (optional)
    await Habit.deleteMany({});

    // Insert seed data
await Habit.insertMany([
  { name: 'Exercise', frequency: 'daily' },
  { name: 'Read', frequency: 'daily' },
  { name: 'Meditate', frequency: 'weekly' }
]);

    console.log('Seeding complete');
    await mongoose.disconnect();
  } catch (err) {
    console.error(err);
  }
}

seed();
