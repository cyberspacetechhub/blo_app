import { useState, useEffect } from 'react';
import useAuth from './useAuth';
import axios from 'axios';

const useFetch = (url, token) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchData = async () => {

      setIsLoading(true);
      setError(null);
      try {
        const res = await axios.get(url, {
          headers: {
            'Authorization': `Bearer ${token}` // Ensure auth is not null/undefined
          }
        })
       console.log(res.data);
          setIsLoading(false);
          
          setData(res.data);
       
      } catch (error) {
        setError(error.message); // Set error state
      }


    }

    fetchData()
      
  }, [url, token]); // Add auth?.accessToken to the dependency array

  return { data, isLoading, error };
};

export default useFetch;
