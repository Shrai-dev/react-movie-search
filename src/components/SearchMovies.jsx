import React, { useState } from "react";

export const SearchMovies = () => {
	const [query, setQuery] = useState("");
	const [movies, setMovies] = useState([]);

	const searchMovies = async (e) => {
		e.preventDefault();
		const url = `https://api.themoviedb.org/3/search/movie?api_key=1522de262832f8a37e8d96e7ed928ba5&language=en-US&query=${query}&page=1&include_adult=false`;

		try {
			const res = await fetch(url);
			const data = await res.json();
			setMovies(data.results);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<form className='form'>
				<input
					className='input'
					type='text'
					name='query'
					placeholder='Enter movie name...'
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button className='button' type='submit' onClick={searchMovies}>
					Search
				</button>
			</form>
		</>
	);
};
