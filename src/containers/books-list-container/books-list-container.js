import React from "react";
import {connect} from "react-redux";

import { fetchBooks, updateBooksSuccess } from "../../actions";
import compose from "../../utils";
import Spinner from "../../components/spinner";
import ErrorIndicator from "../../components/error-indicator";
import withBookstoreService from "../../components/hoc/with-bookstore-service";
import BooksList from "../../components/books-list";
import {bindActionCreators} from "redux";

class BooksListContainer extends React.Component {
    componentDidMount() {
        this.props.fetchBooks();
    }

    componentDidUpdate(prevProps, prevState) {
        const {length} = this.props.books;
        if (length === 0 && length !== prevProps.books.length) this.props.fetchBooks();
    }

    render() {
        const { loading, books, error, onAddedToCart } = this.props;
        if (loading) return <Spinner />
        if (error) return <ErrorIndicator error={error} />
        else return <BooksList books={books} onAddedToCart={onAddedToCart} />
    }
}

// const mapStateToProps = ({ books, loading, error }) => ({ books, loading, error })
const mapStateToProps = state => {
    return state.bookList;
}

// without THUNK:
// const mapDispatchToProps = (dispatch, {bookstoreService}) => ({
//     fetchBooks: fetchBooks(bookstoreService, dispatch),
//     onAddedToCart: id => dispatch(updateBooksSuccess(id, 1))
// })

// with THUNK:
const mapDispatchToProps = (dispatch, {bookstoreService}) => bindActionCreators({
    fetchBooks: fetchBooks(bookstoreService),
    onAddedToCart: updateBooksSuccess
}, dispatch);

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BooksListContainer);
