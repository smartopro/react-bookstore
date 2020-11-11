import React from "react";
import "./header.scss";
import {Link} from "react-router-dom";

const Header = ({numItems, total}) => {
    return (
        <div className="header row">
            <Link className="header__link header__logo" to="/">Book store</Link>
            <Link className="header__link header__cart" to="/cart">
                <i className="header__cart-icon fa fa-shopping-cart" />
                {numItems} items ({total} $)
            </Link>
        </div>
    )
}

export default Header;
