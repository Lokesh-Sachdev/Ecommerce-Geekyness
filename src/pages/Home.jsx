import { HeroBanner, FooterBanner, Product } from '../components';
import { bannerData, productData } from '../utils/data';

const Home = ({ searchResults = [] }) => {
  const isSearching = searchResults.length > 0;
  console.log(isSearching, searchResults);

  return (
    <>
      <HeroBanner heroBanner={bannerData && bannerData[0]} />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className="products-container">
        {isSearching
          ? searchResults.map((product) => (
              <Product key={product.id} product={product} />
            ))
          : productData.map((product) => (
              <Product key={product.id} product={product} />
            ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

export default Home;
