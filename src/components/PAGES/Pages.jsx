import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../FORM/Login';
import Register from '../FORM/Register';
import Homepages from './Homepages';
import DetailProduct from './DetailProduct';
import PaymentsPage from './PaymentsPage';
import AboutPage from './AboutPage';

const Pages = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<Homepages />} />
          <Route path="/payment/:id" element={<PaymentsPage />} />
          <Route path="/detail/:id" element={<DetailProduct />} />
        </Routes>
      </Router>
    </>
  );
};

export default Pages;
