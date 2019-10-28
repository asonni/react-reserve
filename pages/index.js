// import React from 'react';
import axios from 'axios';
import ProductList from '../components/Index/ProductList';

const Home = ({ products }) => {
  return <ProductList products={products} />;
};

Home.getInitialProps = async () => {
  // fetch data on server
  // return response data as an object
  const url = 'http://localhost:3000/api/products';
  try {
    const res = await axios.get(url);
    return { products: res.data };
  } catch (error) {
    console.log(error);
  }
  // note: this object will be merged with existing props
};

export default Home;
