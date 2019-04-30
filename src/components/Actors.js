import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((aa, idx) => {
        return (
          <div>

            {aa.name}

            <ul>
              {aa.movies.map(mm => {
                return <li>{mm}</li>
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default Actors;
