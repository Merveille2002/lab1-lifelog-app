import axios from 'axios';



export const showAllRecommendations = async (category) => {
  try {
    const res = await axios.get('http://localhost:5000/crud/recommendations', {
      params: { category }
    });
    return res.data;
  } catch (error) {
    return { results: [] };
  }
};


export const insertRecommendation = async (recommendation) => {
  try {
    const res = await axios.post(
      'http://localhost:5000/crud/recommendations',
      recommendation
    );
    return res.data;
  } catch (error) {
    return { results: [] };
  }
};


export const deleteRecommendation = async (id) => {
  try {
    const res = await axios.delete(
      'http://localhost:5000/crud/recommendations',
      {
        params: { id }
      }
    );
    return res.data;
  } catch (error) {
    return { results: [] };
  }
};


export const updateMovie = async (id, movie) => {
  try {
    const res = await axios.put(
      'http://localhost:5000/crud/recommendations',
      {
        id,
        ...movie
      }
    );
    return res.data;
  } catch (error) {
    return { results: [] };
  }
};