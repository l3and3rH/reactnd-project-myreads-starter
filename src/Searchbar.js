import React from "react";
import { Link } from "react-router-dom";

const SearchBar = (props) => {
	return (
		<div className='search-books-bar'>
			<Link to='/'>
				<div className='close-search'>Close</div>
			</Link>
			<div className='search-books-input-wrapper'>
				<input
					type='text'
					placeholder='Search by title or author'
					value={props.query}
					onChange={props.requestBooks}
				/>
			</div>
		</div>
	);
};

export default SearchBar;
