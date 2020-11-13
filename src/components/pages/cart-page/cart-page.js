import React from "react";
import "./cart-page.scss";
import ShoppingCartTable from "../../shopping-cart-table/shopping-cart-table";

const CartPage = () => {
    return (
        <div className="cart-page">
            <ShoppingCartTable />
        </div>
    )
}

export {CartPage};
