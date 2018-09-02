import React from 'react';
import { Link } from 'react-router-dom';

const Ebook = (props) => {

  const { name, price, image, id } = props.info;

  return (
    <li>
        <img src={`img/${image}.png`} alt={name} />
        <p>{name} <span> $ {price} </span></p>
        <Link to={`/ebook/${id}`}>MORE INFO</Link>
    </li>
  )
}

export default Ebook;