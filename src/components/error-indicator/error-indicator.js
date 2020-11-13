import React from "react";
import "./error-indicator.scss";

const ErrorIndicator = ({error}) => {
    return (
        <div className="error">
            Error: { error?.message }
        </div>
    )
}

export default ErrorIndicator;
