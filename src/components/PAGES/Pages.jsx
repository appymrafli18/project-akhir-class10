import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../FORM/Login';
import Register from '../FORM/Register';
import Homepages from './Homepages';
import DetailProduct from './DetailProduct';
import PaymentsPage from './PaymentsPage';
import AboutPage from './AboutPage';
import { getProduct } from '../../API';

const Pages = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getProduct().then((result) => {
      setProduct(result);
      // console.log(result.data[0].name);
    });
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepages product={product} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<AboutPage />} />
            <Route path="/payment/:id" element={<PaymentsPage />} />
            <Route path="/detail/:id" element={<DetailProduct />} />
        </Routes>
      </Router>
    </>
  );
};

export default Pages;
