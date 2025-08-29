import React, { useEffect, useState } from 'react';

function Home() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=Sydney`
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      // setError(error);
    } finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='h-full'>
      <h1 className='text-2xl font-bold p-10'>Home</h1>
    </div>
  );
}

export default Home;
