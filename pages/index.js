import { useEffect } from 'react';
import axios from 'axios';

const Home = ({ products }) => {
  console.log(products);
  // useEffect(() => {
  //   getProducts();
  // }, []);

  // const getProducts = async () => {
  //   const url = 'http://localhost:3000/api/products';
  //   try {
  //     const res = await axios.get(url);
  //     console.log(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return <>home</>;
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
