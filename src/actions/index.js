import actionTypes from "./actionTypes";

const fetchBooksRequest = () => ({
    type: actionTypes.FETCH_BOOKS_REQUEST
});

const fetchBooksSuccess = newBooks => ({
    type: actionTypes.FETCH_BOOKS_SUCCESS,
    payload: newBooks
});

const fetchBooksFailure = error => ({
    type: actionTypes.FETCH_BOOKS_FAILURE,
    payload: error
});

const bookAddedToCart = bookId => ({
    type: actionTypes.ADD_BOOK_SUCCESS,
    payload: bookId
});

const bookDeletedFromCart = (bookId, deleteAll) => ({
    type: actionTypes.DELETE_BOOK_SUCCESS,
    payload: {bookId, deleteAll}
});

const fetchBooks = (bookstoreService, dispatch) => () => {
    dispatch(fetchBooksRequest());
    bookstoreService.getBooks()
        .then( books => dispatch(fetchBooksSuccess(books)) )
        .catch(error => dispatch(fetchBooksFailure(error)) );
}

export { fetchBooks, bookAddedToCart, bookDeletedFromCart };
