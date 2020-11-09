import React from "react";

const ErrorIndicator = ({error}) => {
    return (
        <div className="error">
            Error: { error.message }
        </div>
    )
}

export default ErrorIndicator;
