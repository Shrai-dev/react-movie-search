import React from "react";

export const SearchMovies = () => {
	return (
		<>
			<form className='form'>
				<input
					className='input'
					type='text'
					name='query'
					placeholder='Enter movie name...'
				/>
				<button className='button' type='submit'>
					Search
				</button>
			</form>
		</>
	);
};
