import React from 'react'

import './Button.css'

function Button(props) {
    let buttonClasses = ['button']
    buttonClasses = props.animation ? buttonClasses.concat('animation') : buttonClasses 
    return (
        <button disabled={props.isActive} className={buttonClasses.join(' ')} onClick={props.clicked}>{props.text}</button>
    )
}

export default Button
