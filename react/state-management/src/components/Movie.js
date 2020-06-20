import React from 'react';

const Movie = ({ name, price }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: {price}</p>
    </div>
  );
};

export default Movie;
