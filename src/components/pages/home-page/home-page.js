import React from "react";
import "./home-page.scss";
import BooksListContainer from "../../../containers/books-list-container";
import ShoppingCartTable from "../../shopping-cart-table";

const HomePage = () => {
    return (
        <div className="home-page">
            <BooksListContainer />
            <ShoppingCartTable />
        </div>
    )
}

export {HomePage};
