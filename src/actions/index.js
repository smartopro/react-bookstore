import actionTypes from "./actionTypes";

const booksLoaded = newBooks => {
    return ({
        type: actionTypes.BOOKS_LOADED,
        payload: newBooks
    })
}


export { booksLoaded };
