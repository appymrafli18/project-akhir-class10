import React, { useState } from 'react';
import Card from './Card';

import { A11y, Scrollbar, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import { useShow } from '../../context/ShowProduct';

const MainContent = () => {
  const { data } = useShow();
  const [product, setProduct] = useState(data);
  const filterCategory = product.filter((item) => item.category === 'Laptop');
  const filterLoved = product.filter((item) => item.loved);

  const handleLoved = (id) => {
    // console.log(id);
    setProduct((prev) => {
      const arrNew = [...prev];
      arrNew.forEach((item) => {
        if (item.id === id) {
          item.loved = !item.loved;
        }
      });
      return arrNew;
    });
  };

  return (
    <>
      <div id="content" className="w-full min-h-screen py-10">
        <div className="container mx-auto">
          <div className="mb-24">
            <h1 className="font-bold lg:text-3xl text-2xl my-4">Laptop For You!</h1>
            <div className="flex flex-col flex-wrap md:flex-row items-center gap-4">
              {filterCategory.map((value, index) => (
                <div key={index + 1}>
                  <Card name={value.name} stock={value.stock} description={value.description} image={value.image} handleLoved={handleLoved} productId={value.id} price={value.price} boolLoved={value.loved} />
                </div>
              ))}
            </div>
          </div>
          <div className="mb-24">
            <h1 className="font-bold lg:text-3xl text-2xl my-4">Recently Viewed</h1>
            <Swiper
              className="min-w-full mySwiper"
              modules={[A11y, FreeMode, Scrollbar]}
              freeMode={true}
              spaceBetween={20}
              slidesPerView={1.5}
              centeredSlides={true}
              // autoHeight={true}
              breakpoints={{
                640: {
                  spaceBetween: 20,
                  slidesPerView: 2,
                },
                768: {
                  spaceBetween: 20,
                  slidesPerView: 3,
                },
                1024: {
                  centeredSlides: false,
                  spaceBetween: 20,
                  slidesPerView: 4,
                },
                1280: {
                  centeredSlides: false,
                  spaceBetween: 20,
                  slidesPerView: 5.5,
                },
                1536: {
                  centeredSlides: false,
                  spaceBetween: 20,
                  slidesPerView: 6,
                },
              }}
              scrollbar={{ draggable: true, hide: true }}
            >
              {product.map((value, index) => (
                <SwiperSlide key={index + 1}>
                  <Card name={value.name} stock={value.stock} description={value.description} image={value.image} handleLoved={handleLoved} productId={value.id} price={value.price} boolLoved={value.loved} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="">
            <h1 className="font-bold lg:text-3xl text-2xl my-4">Products You Love</h1>
            <Swiper
              className="min-w-full mySwiper"
              modules={[A11y, FreeMode, Scrollbar]}
              freeMode={true}
              spaceBetween={20}
              slidesPerView={1.5}
              centeredSlides={true}
              // autoHeight={true}
              breakpoints={{
                640: {
                  spaceBetween: 20,
                  slidesPerView: 2,
                },
                768: {
                  spaceBetween: 20,
                  slidesPerView: 3,
                },
                1024: {
                  centeredSlides: false,
                  spaceBetween: 20,
                  slidesPerView: 4,
                },
                1280: {
                  centeredSlides: false,
                  spaceBetween: 20,
                  slidesPerView: 5.5,
                },
                1536: {
                  centeredSlides: false,
                  spaceBetween: 20,
                  slidesPerView: 6,
                },
              }}
              scrollbar={{ draggable: true, hide: true }}
            >
              {filterLoved.map((value, index) => (
                <SwiperSlide key={index + 1}>
                  <Card name={value.name} stock={value.stock} description={value.description} image={value.image} handleLoved={handleLoved} productId={value.id} price={value.price} boolLoved={value.loved} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
