import React from 'react';
// import Swiper core and required modules
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const NavigationSwipe = () => {
  const slideStyle = ['bg-color-gray rounded-xl min-w-[80px] min-h-[80px] lg:min-w-[150px] lg:min-h-[150px]'];

  return (
    <>
      <div className="w-full relative">
        <Swiper
          // install Swiper modules
          modules={[Navigation, A11y]}
          spaceBetween={10}
          slidesPerView={4}
          navigation={{
            prevEl: "#navigationPrev",
            nextEl: "#navigationNext",
          }}
          onSwiper={(swiper) => {
              // console.log(swiper.params?.navigation);
          }}
          // onSlideChange={() => console.log('slide change')}
          className="flex w-full gap-4"
        >
          <SwiperSlide className={slideStyle}>1</SwiperSlide>
          <SwiperSlide className={slideStyle}>2</SwiperSlide>
          <SwiperSlide className={slideStyle}>3</SwiperSlide>
          <SwiperSlide className={slideStyle}>4</SwiperSlide>
          <SwiperSlide className={slideStyle}>5</SwiperSlide>
          <SwiperSlide className={slideStyle}>6</SwiperSlide>
          <SwiperSlide className={slideStyle}>7</SwiperSlide>
          <SwiperSlide className={slideStyle}>8</SwiperSlide>
          <SwiperSlide className={slideStyle}>9</SwiperSlide>
          <SwiperSlide className={slideStyle}>10</SwiperSlide>
          <div id="navigationPrev" className="flex items-center w-fit absolute left-0 z-[2] inset-y-0">
            <i className="fa-solid fa-arrow-right fa-flip-horizontal fa-md bg-white cursor-pointer text-center p-2 rounded-full opacity-[0.15] hover:opacity-100 transition-all duration-500 ease"></i>
          </div>
          <div id="navigationNext" className="flex items-center absolute right-0 z-[2] inset-y-0">
            <i className="fa-solid fa-arrow-right fa-md bg-white cursor-pointer text-center p-2 rounded-full opacity-[0.15] hover:opacity-100 transition-all duration-500 ease"></i>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default NavigationSwipe;
