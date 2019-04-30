import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>

      {directors.map((dd, idx) => {
        return (
          <div>

            {dd.name}

            <ul>
              {dd.movies.map(mm => {
                return <li>{mm}</li>
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default Directors
