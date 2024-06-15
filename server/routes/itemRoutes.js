const express = require('express');
const Item = require('../models/item');

const router = express.Router();

router.get("/items", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/items", async (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    description: req.body.description,
  });
  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;