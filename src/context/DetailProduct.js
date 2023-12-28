import { createContext, useContext, useState } from 'react';

const initialContext = {
  id: 1,
  name: '',
  description: '',
  image: '',
  price: 1,
  stock: 1,
};

const DetailProduct = createContext(initialContext);

const DetailProvider = ({ children }) => {
  const [detail, setDetail] = useState(null);

  return <DetailProduct.Provider value={{ detail, setDetail }}>{children}</DetailProduct.Provider>;
};

export const useDetail = () => {
  return useContext(DetailProduct);
};

export default DetailProvider;
