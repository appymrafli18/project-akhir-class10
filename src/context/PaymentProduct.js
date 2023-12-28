import { createContext, useContext, useState } from 'react';

const initialContext = {
  id: 1,
  name: '',
  description: '',
  image: '',
  price: 1,
  stock: 1,
};

const createPayment = createContext(initialContext);

export const usePayment = () => {
  return useContext(createPayment);
};

export default function PaymentProvider({ children }) {
  const [payment, setPayment] = useState(null);
  return <createPayment.Provider value={{ payment, setPayment }}>{children}</createPayment.Provider>;
}
