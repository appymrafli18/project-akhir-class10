import React from 'react';
import Navbar from '../NAV/Navbar';
import Pembayaran from '../PEMBAYARAN/Pembayaran';
import { QuantityProvider } from '../../context/Quantity';

const PaymentsPage = () => {
  return (
    <>
      <Navbar />
      <QuantityProvider>
        <Pembayaran />
      </QuantityProvider>
    </>
  );
};

export default PaymentsPage;
