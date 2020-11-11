import React from "react";

import "./books-list.scss";
import BooksListItem from "../books-list-item";

const BooksList = ({books, onAddedToCart}) => (
    <ul className="books-list">
        { books.map(book => <BooksListItem book={book} key={book.id} onAddedToCart={() => onAddedToCart(book.id)} />) }
    </ul>
)

export default BooksList;
