import React, { Component } from "react";
import BookShelf from "./Bookshelf";
import AddBooks from "./AddBooks";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className='list-books'>
				<div className='list-books-title'>
					<h1>MyReads</h1>
				</div>
				<BookShelf />
				<AddBooks />
			</div>
		);
	}
}

export default Home;
