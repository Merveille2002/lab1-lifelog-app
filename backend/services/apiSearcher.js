const axios = require('axios');

async function searchMovies(query) {
  try {
    const res = await axios.get('http://www.omdbapi.com/', {
            params: {
                s: query,
                apikey: process.env.OMDB_API_KEY,
                type: 'movie'
            }
        });

        if (res.data.Response === 'True') {
            return res.data.Search.map(movie => ({ title: movie.Title }));
        }
         return [];
  } catch (error) {
    console.error('OMDb search error:', error.message);
    return [];
  }
}

async function searchRecipes(query) {

  try {
    const res = await axios.get(
            'https://api.spoonacular.com/food/ingredients/autocomplete',
            {
                params: {
                    query,
                    apiKey: process.env.SPOON_API_KEY
                }
            }
        );
        return res.data;
  } catch (error) {
    console.error('Spoonacular search error:', error.message);
    return [];
  }
}

module.exports = {
    searchMovies,
    searchRecipes
}