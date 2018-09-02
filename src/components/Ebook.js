import React from 'react';

const Ebook = (props) => {

  const { name, price, image, id } = props.info;

  return (
    <li>
        <img src={`img/${image}.png`} alt={name} />
        <p>{name} <span> $ {price} </span></p>
        <a href="#">MORE INFO</a>
    </li>
  )
}

export default Ebook;