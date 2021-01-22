import React from "react";

const BookshelfSelect = (props) => {
	return (
		<div className='book-shelf-changer'>
			<select onChange={props.moveBook} value={props.sShelf} name={props.id}>
				<option value='move' disabled>
					Move to...
				</option>
				<option value='currentlyReading'>Currently Reading</option>
				<option value='wantToRead'>Want to Read</option>
				<option value='read'>Read</option>
				<option value='none'>None</option>
			</select>
		</div>
	);
};

export default BookshelfSelect;
