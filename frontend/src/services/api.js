import axios from 'axios';


export const searchMovie = async (title) => {
  try {
    const res = await axios.get('http://localhost:5000/search/movie', {
      params: { q: title }
    });
    return res.data;
  } catch (error) {
    return { results: [] };
  }
};


export const searchRecipe = async (name) => {
  try {
    const res = await axios.get('http://localhost:5000/search/recipe', {
      params: { q: name }
    });
    return res.data;
  } catch (error) {
    return { results: [] };
  }
};


export const generateAIResponse = async (query) => {
  try {
    const res = await axios.get('http://localhost:5000/generate', {
      params: {
        ...query,
        selectedMovies: JSON.stringify(query.selectedMovies)
      }
    });
    return res.data;
  } catch (error) {
    return { response: '' };
  }
};


export const generateAIResponseForRecipes = async (query) => {
  try {
    const res = await axios.get('http://localhost:5000/generate/recipes', {
      params: {
        ...query,
        selectedRecipes: JSON.stringify(query.selectedRecipes)
      }
    });
    return res.data;
  } catch (error) {
    return { response: '' };
  }
};