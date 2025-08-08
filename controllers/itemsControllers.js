const Item = require('../models/Item');

// GET /api/items
exports.getAll = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// POST /api/items
exports.create = async (req, res) => {
  try {
    const data = req.body;
    // business logic moved from client -> e.g. compute additional fields
    // For example: data.score = computeScore(data);  // move compute into server
    const newItem = new Item(data);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT /api/items/:id
exports.update = async (req, res) => {
  try {
    const updated = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE /api/items/:id
exports.remove = async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
