import React from 'react';

const ButtonBuy = (props) => {
  const { redirectTo, handlePayment, id } = props;
  return (
    <>
      <div className="flex items-center gap-x-8" onClick={redirectTo}>
        <button
          className="py-2 md:py-4 lg:px-8 md:px-6 px-4 max-w-[250px] text-center bg-primary-color text-secondary-color rounded-full font-mediu
      text-sm md:text-base hover:bg-[#592D97]"
          onClick={() => handlePayment(id)}
        >
          Beli Sekarang
        </button>
        <button
          className="py-2 md:py-4 lg:px-8 md:px-6 px-4 max-w-[250px] text-center hover:text-secondary-color hover:bg-primary-color border-primary-color border text-black rounded-full font-mediu
      text-sm md:text-base"
        >
          Add To Cart
        </button>
      </div>
    </>
  );
};

export default ButtonBuy;
