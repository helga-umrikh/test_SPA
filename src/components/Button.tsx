import React from 'react'
import { Link } from 'react-router-dom';

interface ButtonProps {
  id: number;
}

const Button = ({ id }: ButtonProps) => {
    return (
        <Link to={`/page/${id}`}>
            <button className="button">Подробнее</button>
        </Link>
    )
}

export default Button
