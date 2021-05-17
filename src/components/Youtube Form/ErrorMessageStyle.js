import React from 'react'

function ErrorMessageStyle(props) {
    return (
        <div className="error">
            {props.children}
        </div>
    )
}

export default ErrorMessageStyle;
