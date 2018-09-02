import React from 'react';

const SingleEbook = (props) => {

  const { image, name, price, description } = props.ebook;
  if(!image) return null;

  return (
      <div className="ebookInfo">
          <div className="image">
              <img src={`/img/${image}.png`} alt={name} />
          </div>

          <div className="info">
              <h2>{name}</h2>
          </div>
      </div>
  )
}

export default SingleEbook;