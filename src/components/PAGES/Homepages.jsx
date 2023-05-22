import React from 'react';
import Navbar from '../NAV/Navbar';
import Header from '../HEADER/Header';
import MainContent from '../CONTENT/MainContent';
import Footer from '../FOOTER/Footer';

const Homepages = (props) => {
  const {product} = props;
  // console.log(product);
  return (
    <>
      <Navbar />
      <Header />
      <MainContent product={product}/>
      <Footer />
    </>
  );
};

export default Homepages;
