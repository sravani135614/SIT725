const mongoose = require('mongoose');
const Habit = require('./models/Habit'); // Make sure this path matches your model

async function seed() {
  try {
    await mongoose.connect('mongodb://localhost:27017/yourdbname', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    await Habit.deleteMany({});

    await Habit.insertMany([
      { name: 'Morning Walk', description: '30 minutes walk', frequency: 'daily', target: 30 },
      { name: 'Drink Water', description: '2 liters daily', frequency: 'daily', target: 2000 }
    ]);

    console.log('Database seeded successfully');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
