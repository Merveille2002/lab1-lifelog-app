const express = require('express');
const router = express.Router();
const { searchMovies, searchRecipes } = require('../services/apiSearcher');

router.get('/movie', async (req, res) => {
  try {
    const results = await searchMovies(req.query.q);
        res.json({ results });

  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({
      error: 'Search failed',
      message: error.message
    });
  }
});

router.get('/recipe', async (req, res) => {
  try {
    const results = await searchRecipes(req.query.q);
        res.json({ results });

  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({
      error: 'Search failed',
      message: error.message
    });
  }
});

module.exports = router;