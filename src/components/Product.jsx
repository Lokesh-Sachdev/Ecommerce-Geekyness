import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link to={`/product/${slug}`}>
        <div className="product-card">
          <img
            src={image[0]}
            alt="headphones"
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
