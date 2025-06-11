const express = require('express');
const router = express.Router();
const Review = require('../models/review.model');

// POST /api/reviews
router.post('/', async (req, res) => {
  const { title, content, rating } = req.body;
  try {
    const review = new Review({ title, content, rating });
    await review.save();
    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
