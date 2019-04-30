import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((mm, idx) => {
        return (
          <div>
            {mm.title}
            {mm.time}
            <ul>
              {mm.genres.map(gg => {
                return <li>{gg}</li>
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default Movies;
