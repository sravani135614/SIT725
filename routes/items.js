const express = require('express');
const router = express.Router();
const Habit = require('../models/habit');

// GET all habits
router.get('/', async (req, res) => {
  try {
    const habits = await Habit.find();
    res.json(habits);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new habit
router.post('/', async (req, res) => {
  try {
    const newHabit = new Habit(req.body);
    const savedHabit = await newHabit.save();
    res.status(201).json(savedHabit);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
