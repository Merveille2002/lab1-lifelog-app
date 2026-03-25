const axios = require('axios');

async function queryAIGenerator(query) {
  try {
    const prompt = `
Films: ${query.selectedMovies.join(', ')}
Humeur: ${query.mood}
Temps: ${query.watchTime}
Avec: ${query.watchWith}

Suggère un film adapté avec une explication.
`;

    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'openai/gpt-4o-mini',
        messages: [
          { role: 'user', content: prompt }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data.choices[0].message.content;

  } catch (error) {
    console.error('OMDb search error:', error.message);
    return [];
  }
}

async function queryAIGeneratorForRecipes(query) {
  try {
    const prompt = `
Recettes: ${query.selectedRecipes.join(', ')}
Régime: ${query.diet}
Temps: ${query.timeAvailable}
Budget: ${query.budget}
Niveau: ${query.skillLevel}
Pour: ${query.cookingFor}

Suggère une recette adaptée avec une explication.
`;

    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'openai/gpt-4o-mini',
        messages: [
          { role: 'user', content: prompt }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data.choices[0].message.content;

  } catch (error) {
    console.error('OMDb search error:', error.message);
    return [];
  }
}

module.exports = {
    queryAIGenerator,
    queryAIGeneratorForRecipes
};