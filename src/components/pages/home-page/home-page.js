import React from "react";
import "./home-page.scss";
import BooksList from "../../books-list";

const HomePage = () => {
    return (
        <div className="home-page">
            <BooksList />
        </div>
    )
}

export {HomePage};
