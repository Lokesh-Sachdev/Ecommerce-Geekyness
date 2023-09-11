import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productData } from '../utils/data';
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from 'react-icons/ai';
import Product from './Product';

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const foundProduct = productData.find((p) => p.slug === slug);

    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [slug]);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img
              src={product.image && product.image[index]}
              alt="Product"
              className="product-detail-image"
            />
          </div>
          <div className="small-images-container">
            {product.image?.map((item, i) => (
              <img
                src={item}
                alt="product"
                className={
                  i === index ? 'small-image selected-image' : 'small-image'
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{product.name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details: </h4>
          <p>{product.details}</p>
          <p className="price">${product.price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus">
                <AiOutlineMinus />
              </span>
              <span className="num">0</span>
              <span className="plus">
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart">
              Add to Cart
            </button>
            <button type="button" className="buy-now">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {productData.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
