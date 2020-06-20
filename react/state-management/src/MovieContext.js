import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    {
      name: 'Harry Potter',
      price: '30 €',
      id: 1
    },
    {
      name: 'GOT',
      price: '10 €',
      id: 2
    },
    {
      name: 'Zelda',
      price: '180 €',
      id: 3
    }
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
