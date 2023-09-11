import React from 'react';
import { Link } from 'react-router-dom';

const HeroBanner = ({
  heroBanner: {
    smallText,
    midText,
    largeText1,
    image,
    buttonText,
    description,
    product,
  },
}) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{smallText}</p>
        <h3>{midText}</h3>
        <h1>{largeText1}</h1>
        <img src={image} alt="headphones" className="hero-banner-image" />

        <div>
          <Link to={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
          <div className="desc">
            <h5>DESCRIBTION</h5>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
