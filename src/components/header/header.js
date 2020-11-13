import React from "react";
import "./header.scss";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchBooks, updateBooksSuccess} from "../../actions";

const Header = ({items, total}) => {
    const booksNumber = items.reduce((acc, item) => acc + item.count, 0);
    return (
        <div className="header row">
            <Link className="header__link header__logo" to="/">Book store</Link>
            <Link className="header__link header__cart" to="/cart">
                <i className="header__cart-icon fa fa-shopping-cart" />
                {items.length} items: {booksNumber} books ({total} $)
            </Link>
        </div>
    )
}

const mapStateToProps = ({shoppingCart: {cartItems: items, orderTotal: total}}) => ({
    items,
    total
})

export default connect(mapStateToProps)(Header);
