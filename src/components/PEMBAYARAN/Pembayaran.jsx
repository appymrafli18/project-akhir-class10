import React from 'react';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { usePayment } from '../../context/PaymentProduct';
import currency from '../../currency';

const Pembayaran = () => {
  const navigate = useNavigate();
  const { payment } = usePayment();
  const currencyRupiah = currency(payment.price);

  const successfully = (e) => {
    e.preventDefault();
    swal('Pembelian Berhasil !', 'Thanks For Buying on GoShop', 'success');
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <>
      <div className="w-full h-screen">
        <div className="container mx-auto">
          <div className="flex mt-4 flex-col md:flex-row gap-x-4 bg-red-50 mb-40 md:mb-20 px-4">
            <div className="w-full md:w-2/4 min-h-full">
              {/* Item Buy */}
              <div className="border-color-gray border-solid border-2 rounded-xl mb-4 px-4 py-8">
                <h1 className="text-xl md:text-2xl font-semibold my-4">Product Yang Di Beli</h1>
                <div className="flex items-center gap-4 flex-col lg:flex-row">
                  <div className="min-w-[200px] min-h-[200px] rounded-xl bg-color-gray max-w-[200px] max-h-[200px] flex items-center justify-center">
                    <img src={payment.image} alt={payment.name} className="max-w-[180px]" />
                  </div>
                  <div className="flex items-center justify-between w-full flex-wrap gap-y-4">
                    <div className="gap-y-2">
                      <h1 className="text-xl font-semibold max-w-[200px] max-h-[50px]">{payment.name}</h1>
                      <p className="font-medium text-base">Color : White</p>
                    </div>
                    <div className="gap-y-2">
                      <h1 className="text-xl font-semibold text-right">{currencyRupiah}</h1>
                      <p className="font-medium text-base text-right">Total : {payment.total}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Item Buy */}

              {/* Information */}
              <div className="border-color-gray border-solid border-2 rounded-xl px-4 py-8">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h1 className="text-2xl font-semibold">Information</h1>
                  <div className="text-sm py-2 px-4 md:text-base font-medium bg-color-gray rounded-full cursor-pointer hover:bg-[#C2C2C2]">Edit Information</div>
                </div>
                <div className="flex flex-col gap-y-6">
                  <p>
                    Name : <span>Example Name</span>
                  </p>
                  <p>
                    Address : <span>example No.44 RT.11/22 Kota.Example Daerah. Example Ibukota Example 12345</span>
                  </p>
                  <p>
                    Kota : <span>Example Kota</span>
                  </p>
                  <p>
                    Kode Pos : <span>12345</span>
                  </p>
                  <p>
                    No Handphone : <span>(+62) 123-456-789</span>
                  </p>
                  <p>
                    Email : <span>exampleEmail@gmail.com</span>
                  </p>
                </div>
              </div>
              {/* Information */}
            </div>
            <div className="w-full md:w-2/4 min-h-full mt-4 mb-20 md:mt-0 md:mb-0 border-color-gray border-solid border-2 rounded-xl px-4 py-8">
              <div className="flex flex-col gap-y-5 ">
                <h1 className="text-xl md:text-2xl font-semibold">Metode Pembayaran</h1>
                <div className="rounded-full">
                  <div className="w-full flex items-center flex-wrap gap-x-4 gap-y-2">
                    <input type="text" placeholder="Masukkan Kode Coupon" className="bg-color-gray rounded-full py-4 px-4 outline-none" />
                    <button className="bg-primary-color text-white px-8 py-4 rounded-full hover:bg-[#592D97]">Enter</button>
                  </div>
                </div>
              </div>
              {/* Payment Detail */}
              <div className="my-6">
                <h1 className="text-xl md:text-2xl font-semibold mb-2">Payment Details</h1>
                <div className="flex flex-col gap-y-3">
                  <div className="flex items-center gap-2">
                    <input type="radio" id="radio-1" className="h-5 w-5 border-red-300 focus:ring-2 focus:ring-blue-300 rounded-full" />
                    <label htmlFor="radio-1" className="text-lg font-medium block">
                      Kartu Kredit
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="radio" id="radio-2" className="h-5 w-5 border-red-300 focus:ring-2 focus:ring-blue-300 rounded-full" />
                    <label htmlFor="radio-2" className="text-lg font-medium block">
                      Kartu Debit
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="radio" id="radio-3" className="h-5 w-5 border-red-300 focus:ring-2 focus:ring-blue-300 rounded-full" />
                    <label htmlFor="radio-3" className="text-lg font-medium block">
                      Cash On Delivery (COD)
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="radio" id="radio-4" className="h-5 w-5 border-red-300 focus:ring-2 focus:ring-blue-300 rounded-full" />
                    <label htmlFor="radio-4" className="text-lg font-medium block">
                      Paypal
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="radio" id="radio-5" className="h-5 w-5 border-red-300 focus:ring-2 focus:ring-blue-300 rounded-full" />
                    <label htmlFor="radio-5" className="text-lg font-medium block">
                      Goshop Pay
                    </label>
                  </div>
                </div>

                <button onClick={successfully} className="bg-primary-color text-white px-12 py-4 rounded-full hover:bg-[#592D97] mt-5">
                  Bayar Sekarang
                </button>
              </div>
              {/* Payment Detail */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pembayaran;
