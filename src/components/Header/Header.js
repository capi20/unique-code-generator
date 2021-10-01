import React from 'react'
import { useHistory } from 'react-router-dom'
import './Header.css'

function Header() {
    const history = useHistory()
    return (
        <div className="header">
            <div className="logo" onClick={() => history.push('/')}>SP <span>Tool</span></div>
        </div>
    )
}

export default Header
