import React from 'react';
import MainContent from '../CONTENT/MainContent';
import Navbar from '../NAV/Navbar';
import Header from '../HEADER/Header';
import Footer from '../FOOTER/Footer';
import ShowProvider from '../../context/ShowProduct';

const Homepages = () => {
  return (
    <>
      <Navbar />
      <Header />
      <ShowProvider>
        <MainContent />
      </ShowProvider>
      <Footer />
    </>
  );
};

export default Homepages;
