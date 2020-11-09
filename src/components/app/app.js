import React, {useState} from "react";
import ErrorIndicator from "../error-indicator";
import ErrorBoundary from "../error-boundary";
import BookstoreService from "../../services";
import {BookstoreServiceProvider} from "../bookstore-service-context";
import BooksList from "../books-list";

const App = () => {
    const [error, setError] = useState(null);
    const [bookstoreService, SetBookstoreService] = useState(new BookstoreService());

    if (error) return <ErrorIndicator error={error} />

    return (
        <ErrorBoundary>
            <BookstoreServiceProvider value={bookstoreService}>
                <div>
                    <div>Bookstore App</div>
                    <BooksList />
                </div>
            </BookstoreServiceProvider>
        </ErrorBoundary>
    )
}

export default App;
