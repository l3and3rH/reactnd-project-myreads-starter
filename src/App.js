import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import Home from "./Home.js";

class BooksApp extends React.Component {
	state = {
		showSearchPage: false,
	};

	render() {
		return (
			<div className='app'>
				{this.state.showSearchPage ? (
					<div className='search-books'>
						<div className='search-books-bar'>
							<button
								className='close-search'
								onClick={() => this.setState({ showSearchPage: false })}>
								Close
							</button>
							<div className='search-books-input-wrapper'>
								<input type='text' placeholder='Search by title or author' />
							</div>
						</div>
						<div className='search-books-results'>
							<ol className='books-grid' />
						</div>
					</div>
				) : (
					<Home />
				)}
			</div>
		);
	}
}

export default BooksApp;
