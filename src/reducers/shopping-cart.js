import actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

const addToItem = (item, book, n = 1) => {
    return item
        ? { ...item, count: item.count + n, total: item.total + n*book.price }
        : { id: book.id, title: book.title, count: 1, total: book.price }
}

const addToCart = (cartItems, book, n = 1) => {
    const cartItem = cartItems.find(({id}) => id === book.id);
    const newItem = addToItem(cartItem, book, n);

    return cartItem
        ? cartItems
            .map(item => item.id === book.id ? newItem : item)
            .filter(item => item.count)
        : [...cartItems, newItem];
}

const updateShoppingCart = (state = initialState, action) => {
    const { bookList: { books }, shoppingCart} = state;

    switch (action.type) {
        case actionTypes.UPDATE_BOOKS_SUCCESS: {
            const { id, count } = action.payload;
            const book = books.find(book => book.id === id);

            return {
                cartItems: addToCart(shoppingCart.cartItems, book, count),
                orderTotal: shoppingCart.orderTotal + count * book.price
            }
        }
        default: return shoppingCart;
    }
}

export default updateShoppingCart;
