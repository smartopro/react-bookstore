import actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

const updateBookList = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_BOOKS_REQUEST:
            return initialState.bookList;
        case actionTypes.FETCH_BOOKS_SUCCESS:
            return {
                books: action.payload,
                loading: false,
                error: null
            }
        case actionTypes.FETCH_BOOKS_FAILURE:
            return {
                books: [],
                loading: false,
                error: action.payload
            }
        default: return state.bookList;
    }
}

export default updateBookList;
