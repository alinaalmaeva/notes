import React from 'react';
const Search = ({ handleSearchNote }) => {
	return (
		<div className='search'>
			<input
				onChange={(e) =>
					handleSearchNote(e.target.value)
				}
				type='text' placeholder='Поиск...'
			/>
		</div>
	);
};
export default Search;