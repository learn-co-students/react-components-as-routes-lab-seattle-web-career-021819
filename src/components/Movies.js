import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map(movie => {
          return (
            <div>
              <h1>Name: {movie.title}</h1>
              <h3>Time: {movie.time} minutes</h3>
              <h3>Genres:</h3>
              <ul>
                {movie.genres.map(genre => {
                  return <li>{genre}</li>
                  })
                }
              </ul>
            </div>
          )

        })}
    </div>
  );
};

export default Movies;
