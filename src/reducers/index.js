import actionTypes from "../actions/actionTypes";

const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 0
}

const addToItem = (item, book) => {
    return item
        ? { ...item, count: item.count + 1, total: item.total + book.price }
        : { id: book.id, title: book.title, count: 1, total: book.price }
}

const deleteFromItem = (item, book) => {
    return item.count > 1
        ? { ...item, count: item.count - 1, total: item.total - book.price }
        : null
}

const addToCart = (cartItems, book) => {
    const cartItem = cartItems.find(item => item.id === book.id);
    const newItem = addToItem(cartItem, book);

    return cartItem
        ? cartItems.map(item => item.id === book.id ? newItem : item)
        : [...cartItems, newItem];
}

const deleteFromCart = (cartItems, book, deleteAll) => {
    if (deleteAll) return cartItems.filter(item => item.id !== book.id)
    else return cartItems
                    .filter(item => !(item.id === book.id && item.count <= 1))
                    .map(item => item.id === book.id ? deleteFromItem(item, book) : item);
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_BOOKS_REQUEST:
            return {
                ...initialState,
            };
        case actionTypes.FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            }
        case actionTypes.FETCH_BOOKS_FAILURE:
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            }
        case actionTypes.ADD_BOOK_SUCCESS: {
            const bookId = action.payload;
            const book = state.books.find(book => book.id === bookId);

            return {
                ...state,
                cartItems: addToCart(state.cartItems, book),
                orderTotal: state.orderTotal + book.price
            }
        }
        case actionTypes.DELETE_BOOK_SUCCESS: {
            const { bookId, deleteAll } = action.payload;
            const book = state.books.find(book => book.id === bookId);
            const item = state.cartItems.find(item => item.id === bookId);

            return {
                ...state,
                cartItems: deleteFromCart(state.cartItems, book, deleteAll),
                orderTotal: state.orderTotal - book.price * (deleteAll ? item.count : 1)
            }
        }
        default: return state;
    }
}

export default reducer;
