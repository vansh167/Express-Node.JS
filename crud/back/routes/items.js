const express = require('express');
const router = express.Router();
const Item = require('../models/Item');


// Create
router.post('/', async (req, res) => {
try {
const item = new Item(req.body);
await item.save();
res.status(201).json(item);
} catch (err) {
res.status(400).json({ error: err.message });
}
});


// Read all
router.get('/', async (req, res) => {
try {
const items = await Item.find().sort({ createdAt: -1 });
res.json(items);
} catch (err) {
res.status(500).json({ error: err.message });
}
});


// Read one
router.get('/:id', async (req, res) => {
try {
const item = await Item.findById(req.params.id);
if (!item) return res.status(404).json({ error: 'Not found' });
res.json(item);
} catch (err) {
res.status(500).json({ error: err.message });
}
});


// Update
router.put('/:id', async (req, res) => {
try {
const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
if (!item) return res.status(404).json({ error: 'Not found' });
res.json(item);
} catch (err) {
res.status(400).json({ error: err.message });
}
});


// Delete
router.delete('/:id', async (req, res) => {
try {
await Item.findByIdAndDelete(req.params.id);
res.json({ message: 'Deleted' });
} catch (err) {
res.status(500).json({ error: err.message });
}
});


module.exports = router;