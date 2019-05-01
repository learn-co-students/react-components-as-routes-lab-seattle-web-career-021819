import React from 'react'
import { movies } from '../data'

const Movies = () => {
	return (
		<div>
			<h1>Director's Page</h1>
			{data.map(movies, (movie) => {
				return (
					<div>
						<p>{movie.title}</p>
						<p>{movie.time}</p>
						<p>{movie.genres}</p>
						<p>{movie.rating}</p>
					</div>
				)
			})}
		</div>
	)
}

export default Movies
