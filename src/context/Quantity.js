import React, { useEffect, useState } from 'react';
import { getProductById } from '../API';
import { useParams } from 'react-router-dom';

// create context
export const QuantityContext = React.createContext();

// create provider
export const QuantityProvider = ({ children }) => {
  const [value, setValue] = useState(1);
  const [item, setItem] = useState([]);
  const { id } = useParams();

  const valueQuan = React.useMemo(() => {
    return value;
  }, [value])

  useEffect(() => {
    getProductById(id).then((results) => {
      setItem(results);
    });
  }, [id]);

  const increQuantity = () => {
    if (value === item.data?.quantity) {
      setValue(item.data?.quantity);
    } else if (value >= 0) {
      setValue(value + 1);
    }
  };

  const currencyRupiah = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(item.data?.price);

  const decreQuantity = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  return <QuantityContext.Provider value={{valueQuan, currencyRupiah, item, id, value, increQuantity, decreQuantity }}>{children}</QuantityContext.Provider>;
};
