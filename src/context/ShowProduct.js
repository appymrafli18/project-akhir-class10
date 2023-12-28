import { createContext, useContext, useState } from 'react';
import { dataProduct } from '../API';

const showProduct = createContext();

const ShowProvider = ({ children }) => {
  const [data, setData] = useState(dataProduct);

  return <showProduct.Provider value={{ data, setData }}>{children}</showProduct.Provider>;
};

export const useShow = () => {
  return useContext(showProduct);
};

export default ShowProvider;
