import React from "react";

const BookstoreServiceContext = React.createContext([]);

const {
    Provider: BookstoreServiceProvider,
    Consumer: BookstoreServiceConsumer
} = BookstoreServiceContext;

export {
    BookstoreServiceProvider,
    BookstoreServiceConsumer
};
