import React, { Component } from "react";
import ShelfRow from "./ShelfRow";
import { getAll } from "./BooksAPI";

class BookShelf extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedBook: "",
			selectedShelf: "",
			bookShelfCollection: [],
		};
	}
	componentDidMount() {
		//getting the state of allBooks when component is mounted
		getAll().then((res) => {
			const newRes = res.map((book) => {
				return {
					authors: book.authors,
					shelf: book.shelf,
					title: book.title,
					image: book.imageLinks,
				};
			});
			this.setState((prev) => ({
				bookShelfCollection: newRes,
			}));
			console.log(this.state);
		});
	}
	filterBooks = (shelfCat) => {
		return this.state.bookShelfCollection.filter(
			(book) => book.shelf === shelfCat
		);
	};

	render() {
		return (
			<div className='list-books-content'>
				<div>
					<div className='bookshelf'>
						<ShelfRow
							filterBooks={this.filterBooks("currentlyReading")}
							bookShelfTitle='Currently Reading'
						/>
					</div>
					<div className='bookshelf'>
						<ShelfRow
							filterBooks={this.filterBooks("wantToRead")}
							bookShelfTitle='Want to Read'
						/>
					</div>
					<div className='bookshelf'>
						<ShelfRow
							filterBooks={this.filterBooks("read")}
							bookShelfTitle='Read'
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default BookShelf;
