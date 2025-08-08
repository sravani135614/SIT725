const express = require('express');
const router = express.Router();

// Dummy in-memory items array
let items = [
  { id: 1, name: 'Sample item 1' },
  { id: 2, name: 'Sample item 2' }
];

// GET all items
router.get('/', (req, res) => {
  res.json(items);
});

// POST new item
router.post('/', (req, res) => {
  const newItem = req.body;
  newItem.id = items.length + 1;
  items.push(newItem);
  res.status(201).json(newItem);
});

module.exports = router;
