const express = require('express');
const router = express.Router();
const { queryAIGenerator, queryAIGeneratorForRecipes } = require('../services/aiGenerator');

router.get('/', async (req, res) => {
  try {
    const { selectedMovies, mood, watchTime, watchWith } = req.query;

    const data = {
      selectedMovies: JSON.parse(selectedMovies),
      mood,
      watchTime,
      watchWith
    };

    const result = await queryAIGenerator(data);

    res.json({ response: result });
  } catch (error) {
    res.status(500).json({
      error: 'Search failed',
      message: error.message
    });
  }
});

router.get('/recipes', async (req, res) => {
  try {
    const { selectedRecipes, diet, timeAvailable, budget, skillLevel, cookingFor } = req.query;

    const data = {
      selectedRecipes: JSON.parse(selectedRecipes),
      diet,
      timeAvailable,
      budget,
      skillLevel,
      cookingFor
    };

    const result = await queryAIGeneratorForRecipes(data);

    res.json({ response: result });


  } catch (error) {
    console.error('AI Generation error:', error);
    res.status(500).json({
      error: 'Search failed',
      message: error.message
    });
  }
});

module.exports = router;