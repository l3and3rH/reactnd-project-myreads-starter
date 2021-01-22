import React from "react";
import BookshelfSelect from "./BookShelfSelect";

const ShelfRow = (props) => {
	return (
		<div>
			{props.filterBooks !== undefined && (
				<div>
					<h2 className='bookshelf-title'>{props.bookShelfTitle}</h2>
					<div className='bookshelf-books'>
						<ol className='books-grid'>
							{props.filterBooks.map((book) => {
								if (typeof book.imageLinks === "undefined") {
									book.imageLinks = {
										thumbnail:
											"https://via.placeholder.com/128x193.png?text=No+Cover+Found",
									};
								}
								return (
									<li key={book.id}>
										<div className='book'>
											<div className='book-top'>
												<div
													className='book-cover'
													style={{
														width: 128,
														height: 193,
														backgroundImage: `url("${
															book.imageLinks.thumbnail
														}")`,
													}}
												/>
												<BookshelfSelect
													sShelf={book.shelf}
													moveBook={props.moveBook}
													id={book.id}
												/>
											</div>
											<div className='book-title'>{book.title}</div>
											<div className='book-authors'>{book.authors}</div>
										</div>
									</li>
								);
							})}
						</ol>
					</div>
				</div>
			)}
		</div>
	);
};

export default ShelfRow;
