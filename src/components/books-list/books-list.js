import React from "react";
import {connect} from "react-redux";

import withBookstoreService from "../hoc/with-bookstore-service";
import "./books-list.scss";
import BooksListItem from "../books-list-item";
import * as actions from "../../actions";
import compose from "../../utils";

class BooksList extends React.Component {
    componentDidMount() {
        const { bookstoreService } = this.props;
        const books = bookstoreService.getBooks();

        this.props.booksLoaded(books);
    }

    render() {
        return (
            <div className="books-list">
                <table className="books-list__table">
                    <thead className="books-list__thead">
                    <tr>
                        <td>Book id</td>
                        <td>Title</td>
                        <td>Author</td>
                        <td>Image</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.books
                            .map(book => <BooksListItem book={book} key={book.id} />)
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = ({ books }) => ({ books })

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, actions)
)(BooksList);
