import React from 'react';
import './SingleEbooks.css';

const SingleEbook = (props) => {

  if(!props) return null;

  const { image, name, price, description } = props.ebook;
  
  return (
    <div className="ebookInfo">
    <div className="image">
        <img src={`/img/${image}.png`} alt={name} />
    </div>

    <div className="info">
        <h2>{name}</h2>
        <p className="price">$ {price}</p>
        <p>{description}</p>
    </div>
    </div>
  )
}

export default SingleEbook;