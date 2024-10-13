import { useState, useEffect } from 'react';
import apiClient from '../api/apiClient';

const useMovies = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
   (async () => {
      try {
        // const data = await getTopMovies();
        const data= await apiClient.get('/');
        setData(data.data);
        console.log(movieData.data[0]);
        
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })()
  }, []);

  return { movies, loading, error };
};

export default useMovies;
