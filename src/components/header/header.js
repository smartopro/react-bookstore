import React from "react";
import "./header.scss";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Link className="header__link" to="/">Home</Link>
            <Link className="header__link" to="/cart-page">Cart page</Link>
        </div>
    )
}

export default Header;
