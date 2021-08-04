import axios from 'axios';
import { useState, useEffect } from 'react';

const Trending = () => {
  const [contents, setContents] = useState([]);
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    );
    // console.log(data);
    setContents(data.results);
    console.log(data);
  };
  useEffect(() => {
    fetchTrending();
  }, []);
  const elmContent = contents.map((content) => {
    console.log(content);
  });
  return (
    <div>
      <span>Trending</span>
      <div className='trending'>{contents && elmContent}</div>
    </div>
  );
};

export default Trending;
