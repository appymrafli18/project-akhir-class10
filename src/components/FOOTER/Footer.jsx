import React from 'react';

const Footer = () => {
  const imagePayment = [
    {
      title: 'BNI',
      images: 'assets/payment/bni.svg',
    },
    {
      title: 'BCA',
      images: 'assets/payment/bca.svg',
    },
    {
      title: 'JAGO',
      images: 'assets/payment/jago.svg',
    },
    {
      title: 'MASTERCARD',
      images: 'assets/payment/mastercard.svg',
    },
    {
      title: 'PAYPAL',
      images: 'assets/payment/paypal.svg',
    },
    {
      title: 'OVO',
      images: 'assets/payment/ovo.svg',
    },
    {
      title: 'GOPAY',
      images: 'assets/payment/gopay.svg',
    },
    {
      title: 'INDOMARET',
      images: 'assets/payment/indomaret.svg',
    },
    {
      title: 'KREDIVO',
      images: 'assets/payment/kredivo.svg',
    },
    {
      title: 'LINKAJA',
      images: 'assets/payment/linkaja.svg',
    },
    {
      title: 'BSI',
      images: 'assets/payment/bsi.svg',
    },
    {
      title: 'QRIS',
      images: 'assets/payment/qris.svg',
    },
  ];

  const imagePengiriman = [
    {
      title: 'GOSEND',
      images: 'assets/pengiriman/gosend.svg',
    },
    {
      title: 'GRAB EXPRESS',
      images: 'assets/pengiriman/grabexpress.svg',
    },
    {
      title: 'JNE',
      images: 'assets/pengiriman/jne.svg',
    },
    {
      title: 'SI CEPAT',
      images: 'assets/pengiriman/sicepat.svg',
    },
    {
      title: 'JNT EXPRESS',
      images: 'assets/pengiriman/jntexpress.svg',
    },
    {
      title: 'LALA MOVE',
      images: 'assets/pengiriman/lalamove.svg',
    },
  ];

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
                <div className="justify-center flex flex-wrap md:items-center gap-x-12 mt-4 gap-y-8">
                  {imagePayment.map((value, index) => (
                    <img src={value.images} key={index + 1} alt={value.title} className="lg:max-w-[250px] w-[100px] md:max-w-[150px] sm:w-[120px]" />
                  ))}
                </div>
              </div>
              <div className="my-4 text-center md:text-left">
                <h1 className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl">Jasa Pengiriman</h1>
                <div className="grid grid-cols-1 justify-items-center md:flex md:flex-wrap md:items-center gap-4 md:gap-x-12 mt-4">
                  {imagePengiriman.map((value, index) => (
                    <img src={value.images} alt={value.title} key={index + 1} className="lg:max-w-[250px] w-[100px] md:max-w-[150px] sm:w-[120px]" />
                  ))}
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
