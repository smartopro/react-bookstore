import React from "react";
import withBookstoreService from "../hoc/with-bookstore-service";

import "./books-list.scss";

const BooksList = ({bookstore}) => (
    <div className="books-list">
        <table>
            <thead>
                <tr>
                    <td>Book id</td>
                    <td>Caption</td>
                    <td>Author</td>
                    <td>Image</td>
                </tr>
            </thead>
            <tbody>
            {
                bookstore.map(book => (
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.caption}</td>
                        <td>{book.author}</td>
                        <td><img className="books-list__image" src={book.imageURL} alt={book.caption} /></td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    </div>
)

export default withBookstoreService(BooksList);
