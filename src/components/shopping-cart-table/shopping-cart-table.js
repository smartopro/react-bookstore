import React from "react";
import "./shopping-cart-table.scss";
import {connect} from "react-redux";
import { updateBooksSuccess } from "../../actions"

const ShoppingCartTable = ({items, total, onUpdate}) => {
    const RenderRow = (item, index) => {
        const { id, title, count, total } = item;
        return (
            <tr key={id}>
                <td>{index + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>{total} $</td>
                <td className="shopping-cart-table__buttons">
                    <button className="btn btn-outline-danger shopping-cart-table__button" onClick={() => onUpdate(id, -count)}>
                        <i className="fa fa-trash-o" />
                    </button>
                    <button className="btn btn-outline-success shopping-cart-table__button" onClick={() => onUpdate(id, 1)}>
                        <i className="fa fa-plus-circle" />
                    </button>
                    <button className="btn btn-outline-warning shopping-cart-table__button" onClick={() => onUpdate(id, -1)}>
                        <i className="fa fa-minus-circle" />
                    </button>
                </td>
            </tr>
        )
    }

    return (
        <div className="shopping-cart-table">
            <h2>Your order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    items.map(RenderRow)
                }
                </tbody>
            </table>
            <div className="shopping-cart-table__total">
                Total: {total} $
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    items: state.shoppingCart.cartItems,
    total: state.shoppingCart.orderTotal
});

// const mapDispatchToProps = dispatch => ({
//     onIncrease: id => dispatch(bookAddedToCart(id)),
//     onDecrease: id => dispatch(bookDeletedFromCart(id)),
//     onDelete: (id, deleteAll) => dispatch(bookDeletedFromCart(id, deleteAll))
// });

const mapDispatchToProps = {
    onUpdate: updateBooksSuccess
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
