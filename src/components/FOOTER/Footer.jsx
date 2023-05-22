import React from 'react';

const Footer = () => {
  return (
    <>
      <div id="help" className="w-full mt-56">
        <div className="bg-color-gray">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:justify-items-center gap-4 py-4">
              {/* care */}
              <div className="flex flex-col p-2 gap-y-4 border-b-2 border-black sm:border-none border-solid mx-2">
                <h1 className="font-semibold">Customer Care</h1>
                <div className="max-h-[50px] min-h-[50px]">
                  <p>Telepon</p>
                  <p className="cursor-pointer hover:border-b-2 transition-all duration-75 ease-linear border-black w-fit">(+62) 123-456-789</p>
                </div>
                <div className="max-h-[50px] min-h-[50px]">
                  <p>Email</p>
                  <p className="cursor-pointer hover:border-b-2 transition-all duration-75 ease-linear border-black w-fit">example@gmail.com</p>
                </div>
                <div>
                  <p>Layanan Pengaduan Konsumen Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga Kementerian Perdagangan RI</p>
                </div>
                <div className="max-h-[50px] min-h-[50px]">
                  <p>Whatsapp</p>
                  <p className="cursor-pointer hover:border-b-2 transition-all duration-75 ease-linear border-black w-fit">(+62) 123-456-789</p>
                </div>
              </div>
              {/* care */}

              {/* Info */}
              <div className="flex flex-col p-2 gap-y-4 border-b-2 border-black sm:border-none border-solid mx-2 sm:mx-0">
                <h1 className="font-semibold">Info GoShop</h1>
                <div className="max-w-fit min-h-[25px] max-h-[25px]">
                  <p className="cursor-pointer hover:border-b-2 transition-all duration-75 ease-linear border-black w-fit">Tentang GoShop</p>
                </div>
                <div>
                  <p>Blog GoShop</p>
                </div>
                <div className="max-w-fit min-h-[25px] max-h-[25px]">
                  <p className="cursor-pointer hover:border-b-2 transition-all duration-75 ease-linear border-black w-fit">Kabar Terbaru</p>
                </div>
                <div>
                  <p>Karir</p>
                </div>
                <div>
                  <p>Ketentuan & Kebijakan Privasi</p>
                </div>
              </div>
              {/* Info */}

              {/* Kerja Sama */}
              <div className="flex flex-col p-2 gap-y-4 border-b-2 border-black sm:border-none border-solid mx-2 sm:mx-0">
                <h1 className="font-semibold">Kerja Sama</h1>
                <div>
                  <p>Affiliate Program</p>
                </div>
                <div>
                  <p>Travel for Business</p>
                </div>
                <div>
                  <p>Jual Beli di GoShop</p>
                </div>
              </div>
              {/* Kerja Sama */}

              {/* Download */}
              <div className="flex flex-col p-2 gap-y-4 mx-2 sm:mx-0">
                <h1 className="font-semibold">Download Aplikasi</h1>
                <div className="flex cursor-pointer hover:opacity-70 transition-opacity ease-in duration-200 items-center gap-x-4 lg:gap-x-2 text-sm md:text-base bg-black text-secondary-color px-8 py-2 rounded-lg max-w-[210px]">
                  <img src="assets/Vector-Playstore.svg" alt="vector playstore" className="w-[30px] md:w-[35px] block" />
                  <p>
                    GET IT ON
                    <br />
                    Google Play
                  </p>
                </div>
                <div className="flex cursor-pointer hover:opacity-70 transition-opacity ease-in duration-200 items-center gap-x-4 lg:gap-x-2 text-sm md:text-base bg-black text-secondary-color px-8 py-2 rounded-lg max-w-[210px]">
                  <img src="assets/Vector-Appstore.svg" alt="vector appstore" className="w-[30px] md:w-[35px] block" />
                  <p>
                    GET IT ON
                    <br />
                    App Store
                  </p>
                </div>
              </div>
              {/* Download */}
            </div>
          </div>
          {/* Sponsorship */}
          <div className="w-full border-t border-black border-solid">
            <div className="container mx-auto p-4">
              <div className="my-4 text-center md:text-left">
                <h1 className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl">Metode Pembayaran</h1>
                <div className="grid grid-cols-1 justify-items-center md:flex md:flex-wrap md:items-center gap-4 md:gap-x-12 mt-4">
                  <img src="assets/payment/bni.svg" alt="bni" className="lg:max-w-[250px] max-w-[150px]" />
                  <img src="assets/payment/bca.svg" alt="bca" className="lg:max-w-[250px] max-w-[150px]" />
                  <img src="assets/payment/jago.svg" alt="jago" className="lg:max-w-[250px] max-w-[150px]" />
                  <img src="assets/payment/mastercard.svg" alt="master card" className="lg:max-w-[250px] max-w-[150px]" />
                  <img src="assets/payment/paypal.svg" alt="paypal" className="lg:max-w-[250px] max-w-[150px]" />
                  <img src="assets/payment/ovo.svg" alt="ovo" className="lg:max-w-[250px] max-w-[150px]" />
                  <img src="assets/payment/gopay.svg" alt="gopay" className="lg:max-w-[250px] max-w-[150px]" />
                  <img src="assets/payment/indomaret.svg" alt="indomaret" className="lg:max-w-[250px] max-w-[150px]" />
                  <img src="assets/payment/kredivo.svg" alt="kredivo" className="lg:max-w-[250px] max-w-[150px]" />
                  <img src="assets/payment/linkaja.svg" alt="linkaja" className="lg:max-w-[250px] max-w-[150px]" />
                  <img src="assets/payment/bsi.svg" alt="bsi" className="lg:max-w-[250px] max-w-[150px]" />
                  <img src="assets/payment/qris.svg" alt="qris" className="lg:max-w-[250px] max-w-[150px]" />
                </div>
              </div>
              <div className="my-4 text-center md:text-left">
                <h1 className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl">Jasa Pengiriman</h1>
                <div className="grid grid-cols-1 justify-items-center md:flex md:flex-wrap md:items-center gap-4 md:gap-x-12 mt-4">
                  <img src="assets/pengiriman/gosend.svg" alt="gosend" className="lg:max-w-[250px] max-w-[150px]" />
                  <img src="assets/pengiriman/grabexpress.svg" alt="grabexpress" className="lg:max-w-[250px] max-w-[150px]" />
                  <img src="assets/pengiriman/jne.svg" alt="jne" className="lg:max-w-[250px] max-w-[150px]" />
                  <img src="assets/pengiriman/sicepat.svg" alt="sicepat" className="lg:max-w-[250px] max-w-[150px]" />
                  <img src="assets/pengiriman/jntexpress.svg" alt="jntexpress" className="lg:max-w-[250px] max-w-[150px]" />
                  <img src="assets/pengiriman/lalamove.svg" alt="lalamove" className="lg:max-w-[250px] max-w-[150px]" />
                </div>
              </div>
            </div>
          </div>
          {/* Sponsorship */}
        </div>

        <div className="text-center text-secondary-color bg-black font-medium text-xs p-2">COPYRIGHT BY RAFLI STRD</div>
      </div>
    </>
  );
};

export default Footer;
