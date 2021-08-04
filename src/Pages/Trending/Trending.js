import axios from 'axios';
import { useState, useEffect } from 'react';
import SingleContent from '../../components/SingleContent/SingleContent';

const Trending = () => {
  const [contents, setContents] = useState([]);
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    );
    // console.log(data);
    setContents(data.results);
  };
  useEffect(() => {
    fetchTrending();
  }, []);
  console.log(contents);
  let elmContent = 'Not found';

  if (contents) {
    elmContent = contents.map((content) => {
      const {
        id,
        original_title,
        poster_path,
        release_date,
        media_type,
        vote_average,
      } = content;
      return (
        <SingleContent
          id={id}
          key={id}
          title={original_title}
          poster={poster_path}
          date={release_date}
          type={media_type}
          vote={vote_average}
        />
      );
    });
  }
  return (
    <div>
      <span>Trending</span>
      <div className='trending'>{elmContent}</div>
    </div>
  );
};

export default Trending;
