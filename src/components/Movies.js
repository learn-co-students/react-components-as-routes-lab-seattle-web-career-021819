import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        <ul>
          {movies.map((movie, index) => {
            return (
              <div key={index}>
                <h3>Name: {movie.title}</h3>
                Time: {movie.time}<br /><br />
                Genres:
                  <ul>
                    {movie.genres.map((genre, index) => {
                      return (
                        <li key={index}>{genre}</li>
                      )
                    })}
                  </ul>
              </div>
            )
          })}
        </ul>
    </div>
  );
};

export default Movies;
