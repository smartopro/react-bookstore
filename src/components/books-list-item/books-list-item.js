import React from "react";

import "./books-list-item.scss";

const BooksListItem = ({book}) => (
    <tr>
        <td>{book.id}</td>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td><img className="books-list-item__image" src={book.imageURL} alt={book.title} title={book.title} /></td>
    </tr>
)

export default BooksListItem;
