import React from "react";

import "./books-list-item.scss";

const BooksListItem = ({ book: {title, author, price, imageURL}, onAddedToCart }) => (
    <li className="books-list-item">
        <div className="books-list-item__cover">
            <img className="books-list-item__image" src={imageURL} alt={title} title={title} />
        </div>
        <div className="books-list-item__details">
            <span className="books-list-item__title">{title}</span>
            <div className="books-list-item__author">{author}</div>
            <div className="books-list-item__price">{price} $</div>
            <button className="btn btn-info books-list-item__add" onClick={onAddedToCart}>Add to cart</button>
        </div>
    </li>
)

export default BooksListItem;
