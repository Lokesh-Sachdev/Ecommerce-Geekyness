import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import { ProductDetail } from '../components';

const MyRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
      </Routes>
    </Layout>
  );
};

export default MyRoutes;
