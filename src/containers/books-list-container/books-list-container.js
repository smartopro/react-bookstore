import React from "react";
import {connect} from "react-redux";

import { fetchBooks, bookAddedToCart } from "../../actions";
import compose from "../../utils";
import Spinner from "../../components/spinner";
import ErrorIndicator from "../../components/error-indicator";
import withBookstoreService from "../../components/hoc/with-bookstore-service";
import BooksList from "../../components/books-list";

class BooksListContainer extends React.Component {
    componentDidMount() {
        this.props.fetchBooks();
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
    return state;
}

const mapDispatchToProps = (dispatch, {bookstoreService}) => ({
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddedToCart: id => dispatch(bookAddedToCart(id))
})

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BooksListContainer);
