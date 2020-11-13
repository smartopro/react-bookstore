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

const updateBooksSuccess = (id, count = 1) => ({
    type: actionTypes.UPDATE_BOOKS_SUCCESS,
    payload: {id, count}
});

// without THUNK:
const fetchBooksOld = (bookstoreService, dispatch) => () => {
    dispatch(fetchBooksRequest());
    bookstoreService.getBooks()
        .then(books => dispatch(fetchBooksSuccess(books)))
        .catch(error => dispatch(fetchBooksFailure(error)) );
}

// with THUNK:
const fetchBooks = bookstoreService => () => dispatch => {
    dispatch(fetchBooksRequest());
    bookstoreService.getBooks()
        .then(books => dispatch(fetchBooksSuccess(books)))
        .catch(error => dispatch(fetchBooksFailure(error)) );
}

export { fetchBooks, updateBooksSuccess };
