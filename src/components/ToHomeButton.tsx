import React from 'react'
import { Link } from 'react-router-dom'


const ToHomeButton = () => {
    return (
        <Link to={`/`}>
            <button className="button">НАЗАД</button>
        </Link>
    )
}

export default ToHomeButton
