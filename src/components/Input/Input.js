import React from 'react'

import './Input.css'

function Input(props) {
    return (
        <div className="input">
            <span>{props.heading}</span>
            <input type={props.type} value={props.val} onChange={props.changed}/>
        </div>
    )
}

export default Input
