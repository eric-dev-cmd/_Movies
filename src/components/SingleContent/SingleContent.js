import React from 'react';
import { img_300 } from '../../config/config';
const SingleContent = ({ id, key, title, poster, date, type, vote }) => {
  console.log();
  return (
    <div>
      <img src={`${img_300}${poster}`} alt={title} />
    </div>
  );
};

export default SingleContent;
