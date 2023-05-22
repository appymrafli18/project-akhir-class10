import React from 'react';
import Detail from '../DETAIL/Detail';
import Navbar from '../NAV/Navbar';
import { QuantityProvider } from '../../context/Quantity';

const DetailProduct = () => {
  return (
    <>
      <Navbar />
      <QuantityProvider>
        <Detail />
      </QuantityProvider>
    </>
  );
};

export default DetailProduct;
