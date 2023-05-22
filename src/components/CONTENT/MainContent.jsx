import React, { useEffect, useState } from 'react';
import Card from './Card';
import { getProductCategory } from '../../API';

import { A11y, Scrollbar, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';

const MainContent = (props) => {
  const [category, setCategory] = useState([]);
  const [handphone, setHandphone] = useState([]);
  useEffect(() => {
    getProductCategory('laptop').then((res) => {
      setCategory(res);
    });

    getProductCategory('handphone').then((res) => {
      setHandphone(res);
    });
  }, []);

  const { product } = props;
  return (
    <>
      <div id="content" className="w-full min-h-screen py-10">
        <div className="container mx-auto">
          <div className="mb-24">
            <h1 className="font-bold lg:text-3xl text-2xl my-4">Laptop For You!</h1>
            <div className="flex flex-col flex-wrap md:flex-row items-center gap-4">
              {category.data?.map((result, index) => (
                <div key={index + 1}>
                  <Card name={result.name} productId={result.id} description={result.description} price={result.price} images={result.url_images} />
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
              {product.data?.map((result, index) => (
                <SwiperSlide key={index + 1}>
                  <Card productId={result.id} name={result.name} description={result.description} price={result.price} images={result.url_images} />
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
              {handphone.data?.map((result, index) => (
                <SwiperSlide key={index + 1}>
                  <Card productId={result.id} name={result.name} description={result.description} price={result.price} images={result.url_images} />
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
