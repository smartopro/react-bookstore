import React, {useState} from "react";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import ErrorIndicator from "../error-indicator";
import ErrorBoundary from "../error-boundary";
import BookstoreService from "../../services";
import {BookstoreServiceProvider} from "../bookstore-service-context";
import store from "../../store";
import Header from "../header";
import "./app.scss";
import {HomePage, CartPage} from "../pages";

const App = () => {
    const [error, setError] = useState(null);
    const [bookstoreService, SetBookstoreService] = useState(new BookstoreService());

    if (error) return <ErrorIndicator error={error} />

    return (
        <Provider store={store}>
            <ErrorBoundary>
                <BookstoreServiceProvider value={bookstoreService}>
                    <Router>
                        <div className="app container">
                            <Header numItems={3} total={90} />
                            <Switch>
                                <Route path="/" exact component={HomePage} />
                                <Route path="/cart" exact component={CartPage} />
                                <Redirect to="/" />
                            </Switch>
                        </div>
                    </Router>
                </BookstoreServiceProvider>
            </ErrorBoundary>
        </Provider>
    )
}

export default App;
