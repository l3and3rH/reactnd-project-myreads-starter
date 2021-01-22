import React, { Component } from "react";
import ShelfRow from "./ShelfRow";
import { getAll, update } from "./BooksAPI";

class BookShelf extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bookShelfCollection: [],
		};
	}

	updateCollection = () => {
		getAll().then((res) => {
			const newRes = res.map((book) => {
				return {
					authors: book.authors,
					shelf: book.shelf,
					title: book.title,
					image: book.imageLinks,
					id: book.id,
				};
			});
			this.setState((prev) => ({
				bookShelfCollection: newRes,
			}));
		});
	};
	componentDidMount() {
		//getting the state of allBooks when component is mounted
		this.updateCollection();
	}
	filterBooks = (shelfCat) => {
		return this.state.bookShelfCollection.filter(
			(book) => book.shelf === shelfCat
		);
	};
	moveBook = (event) => {
		const idObj = event.target.name;
		update({ id: idObj }, event.target.value).then((res) => {
			this.updateCollection();
		});
	};

	render() {
		return (
			<div className='list-books-content'>
				<div>
					<div className='bookshelf'>
						<ShelfRow
							filterBooks={this.filterBooks("currentlyReading")}
							bookShelfTitle='Currently Reading'
							moveBook={this.moveBook}
						/>
					</div>
					<div className='bookshelf'>
						<ShelfRow
							filterBooks={this.filterBooks("wantToRead")}
							bookShelfTitle='Want to Read'
							moveBook={this.moveBook}
						/>
					</div>
					<div className='bookshelf'>
						<ShelfRow
							filterBooks={this.filterBooks("read")}
							bookShelfTitle='Read'
							moveBook={this.moveBook}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default BookShelf;
