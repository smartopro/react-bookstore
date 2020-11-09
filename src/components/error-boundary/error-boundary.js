import React from "react";
import ErrorIndicator from "../error-indicator";

export default class ErrorBoundary extends React.Component {
    state = {
        hasError: false
    }

    componentDidCatch(error, errorInfo) {
        console.log(error);
        this.setState({
            hasError: true
        })
    }

    render() {
        const {hasError} = this.state;
        console.log(hasError);
        if (hasError) {
            return <ErrorIndicator />
        } else {
            return this.props.children;
        }
    }
}
