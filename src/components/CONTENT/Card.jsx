import React, { useState } from 'react';
import ButtonTambahKeranjang from './ButtonTambahKeranjang';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const { name, description, images, productId, price } = props;

  const currencyRupiah = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);

  const [love, setLove] = useState(false);

  const redLove = () => {
    setLove(!love);
  };

  return (
    <>
      <div className="w-[200px] cursor-pointer min-h-full max-h-[350px] flex flex-col items-start rounded-xl">
        <div className="w-full relative">
          <img src={images} alt="200x200" className="w-full h-[200px] object-cover bg-color-gray rounded-xl" />
          <button
            onClick={redLove}
            className={
              love
                ? `w-7 h-7 hover:text-[#F01D1D] text-[#F01D1D] rounded-full bg-secondary-color absolute top-2 right-2 transition-all duration-500 ease-in`
                : `w-7 h-7 hover:text-[#F01D1D] text-[#black] rounded-full bg-secondary-color absolute top-2 right-2 transition-all duration-500 ease-in`
            }
          >
            <i className="fa-solid fa-heart"></i>
          </button>
        </div>
        <div className="w-full h-full flex flex-col items-start justify-between gap-y-2">
          <div className="w-full">
            <h1 className="max-w-full font-semibold text-sm whitespace-nowrap overflow-hidden text-ellipsis">{name}</h1>
            <h1 className="max-w-full font-semibold text-sm whitespace-nowrap overflow-hidden text-ellipsis">{currencyRupiah}</h1>
          </div>
          <div className="max-w-full max-h-[60px] min-w-[60px] text-sm whitespace-nowrap overflow-x-hidden text-ellipsis">{description}</div>
          <div>
            <i className="fa-solid fa-star text-color-stars"></i>
            <i className="fa-solid fa-star text-color-stars"></i>
            <i className="fa-solid fa-star text-color-stars"></i>
            <i className="fa-solid fa-star text-color-stars"></i>
            <i className="fa-solid fa-star-half-stroke text-color-stars"></i>
          </div>
          <Link to={`/detail/${productId}`}>
            <ButtonTambahKeranjang />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
