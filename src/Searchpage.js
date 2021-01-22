import React, { Component } from "react";
import SearchBar from "./Searchbar";
import ShelfRow from "./ShelfRow";
import { search, update } from "./BooksAPI";

class SearchPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: "",
			booksCollection: [],
			isLoading: false,
		};
	}

	updateCollection = () => {
		if (this.state.query.length < 1) {
			this.setState((prev) => ({ booksCollection: [], isLoading: false }));
		} else {
			search(this.state.query.trim())
				.then((res) => {
					if (typeof res.error === "undefined") {
						this.setState((prev) => ({
							booksCollection: res,
						}));
					} else {
						this.setState((prev) => ({ booksCollection: [] }));
					}
				})
				.catch((err) => {
					console.log(err);
				})
				.finally((res) => this.setState((prev) => ({ isLoading: false })));
		}
	};

	requestBooks = (event) => {
		const searchQuery = event.target.value;

		this.setState(
			(prev) => {
				return { query: searchQuery, isLoading: true };
			},
			() =>
				setTimeout(() => {
					this.updateCollection();
				}, 500)
		);
	};

	moveBook = (event) => {
		const idObj = event.target.name;
		update({ id: idObj }, event.target.value).catch((err) => console.log(err));
	};

	render() {
		return (
			<div className='search-books'>
				<SearchBar query={this.state.query} requestBooks={this.requestBooks} />
				<div className='search-books-results'>
					{this.state.booksCollection.length > 0 && (
						<ShelfRow
							filterBooks={this.state.booksCollection}
							bookShelfTitle='Search Results'
							moveBook={this.moveBook}
						/>
					)}
					{this.state.booksCollection.length === 0 &&
						this.state.query.length > 0 &&
						this.state.isLoading === false && (
							<p>
								No results found, try it with "web development" its always a
								good time to start coding
							</p>
						)}
					{this.state.isLoading === true && <p>Loading...</p>}
				</div>
			</div>
		);
	}
}

export default SearchPage;
