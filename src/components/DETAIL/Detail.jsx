import React, { useState } from 'react';
import NavigationSwipe from './NavigationSwipe';
import ButtonBuy from './ButtonBuy';
import { useNavigate } from 'react-router-dom';
import { useDetail } from '../../context/DetailProduct';
import currency from '../../currency';
import { usePayment } from '../../context/PaymentProduct';

const Detail = () => {
  const { detail } = useDetail();
  const { setPayment } = usePayment();
  const currencyRupiah = currency(detail.price);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const redirectPayment = () => {
    navigate(`/payment/${detail.id}`);
  };

  const decreQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
    return;
  };

  const increQuantity = () => {
    if (quantity < detail.stock) {
      setQuantity(quantity + 1);
    }
    return;
  };

  const handlePayment = (id) => {
    if (id) {
      const { id, name, description, image, price, stock } = detail;

      const datas = {
        id,
        name,
        description,
        image,
        price,
        stock: stock - quantity,
        total: quantity,
      };

      setPayment(datas);
    } else {
      return;
    }
  };

  return (
    <>
      <div className="w-full h-screen sm:py-2 lg:flex lg:items-center md:mt-4 lg:mt-20 mb-40">
        <div className="container mx-auto">
          <h1 className="hidden md:block">
            Electronics {'>'} Laptop {'>'} Type {'>'} asus
          </h1>
          {/* start */}
          <div className="flex flex-col md:flex-row md:py-4">
            <div className="w-full md:w-3/6 lg:mx-2 mb-4 md:mb-0 flex flex-col gap-y-4">
              {/* <div> */}
              <img src={detail.image} alt={detail.name} className="bg-color-gray min-w-full h-[300px] lg:w-[400px] lg:h-[500px] rounded-xl flex items-center justify-center" />
              {/* </div> */}
              <NavigationSwipe />
            </div>
            <div className="w-full md:w-3/6 md:px-4 lg:mx-2">
              <div className="px-2 md:px-0">
                {/* Title, Subtitle, Stars */}
                <div className="border-b border-black pb-4 border-opacity-30">
                  <h1 className="w-full font-bold text-2xl lg:text-3xl overflow-hidden max-h-[100px]">{detail.name}</h1>
                  <p className="my-2 w-full max-h-[150px] overflow-hidden">{detail.description}</p>
                  <div className="flex items-center gap-x-2">
                    <div>
                      <i className="fa-solid fa-star text-color-stars"></i>
                      <i className="fa-solid fa-star text-color-stars"></i>
                      <i className="fa-solid fa-star text-color-stars"></i>
                      <i className="fa-solid fa-star text-color-stars"></i>
                      <i className="fa-solid fa-star-half-stroke text-color-stars"></i>
                    </div>
                    <div className="text-[#393A3F] text-base">(120)</div>
                  </div>
                </div>
                {/* Title, Subtitle, Stars */}

                {/* Price */}
                <div className="w-full overflow-hidden border-b border-black py-4 border-opacity-30 text-xl md:text-2xl font-medium">{currencyRupiah}</div>
                {/* Price */}

                {/* Choose Color */}
                <div className="w-full overflow-hidden border-b border-black py-4 border-opacity-30 text-xl md:text-2xl font-medium flex flex-col gap-y-2">
                  <div className="font-medium">Choose a Color</div>
                  <div className="flex gap-2">
                    <div className="w-[20px] h-[20px] rounded-full bg-black cursor-pointer"></div>
                    <div className="w-[20px] h-[20px] rounded-full bg-white border border-opacity-70 border-solid border-black cursor-pointer"></div>
                    <div className="w-[20px] h-[20px] rounded-full bg-[#C0C0C0] border border-opacity-70 border-solid border-black cursor-pointer"></div>
                    <div className="w-[20px] h-[20px] rounded-full bg-[#D0B317] border border-opacity-70 border-solid border-black cursor-pointer"></div>
                  </div>
                </div>
                {/* Choose Color */}

                {/* Quantity */}
                <div className="flex gap-2 gap-x-5 items-center my-8">
                  <div className="flex min-w-[115px] items-center min-h-[32px] justify-between rounded border border-black border-opacity-20">
                    <button onClick={decreQuantity} className="min-w-[32px] min-h-[32px] border border-black border-opacity-20">
                      <i className="fa-solid fa-minus"></i>
                    </button>
                    <div>{quantity}</div>
                    <button onClick={increQuantity} className="min-w-[32px] min-h-[32px] border border-black border-opacity-20">
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                  <div>Hanya tersisa {detail.stock} Items!</div>
                </div>
                {/* Quantity */}

                {/* Buy Now or Keranjang */}
                <ButtonBuy redirectTo={redirectPayment} handlePayment={handlePayment} id={detail.id} />
                {/* Buy Now or Keranjang */}

                <div className="mt-8 mb-20">
                  <img src="../assets/promotion.svg" alt="Promotion" />
                </div>
              </div>
            </div>
          </div>
          {/* end */}
        </div>
      </div>
    </>
  );
};

export default Detail;
