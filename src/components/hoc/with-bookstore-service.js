import React from "react";
import {BookstoreServiceConsumer} from "../bookstore-service-context";

const withBookstoreService = (Component) => {
    return props => (
        <BookstoreServiceConsumer>
            {
                value => {
                    return <Component {...props} bookstore={value.getBooks()} />
                }
            }
        </BookstoreServiceConsumer>
    )
}

export default withBookstoreService;
