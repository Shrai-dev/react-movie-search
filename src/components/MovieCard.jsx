import React from "react";

export const MovieCard = ({ movie }) => {
	return (
		<div className='movie'>
			<img
				className='movie__img'
				src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
				alt={movie.title}
			/>
			<div className='movie__info'>
				<h3 className='movie__title'>{movie.title}</h3>
				<p className='movie__release'>Release date: {movie.release_date}</p>
				<p className='movie__rating'>Rating: {movie.vote_average}</p>
				<p className='movie__overview'>{movie.overview}</p>
			</div>
		</div>
	);
};
