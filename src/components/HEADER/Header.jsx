import React from 'react';

const Header = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center max-h-[500px] min-h-[500px] bg-no-repeat bg-cover" style={{ backgroundImage: `url("assets/HeaderImage.jpg")` }}>
        <div className="lg:max-w-[750px] max-w-sm md:max-w-md min-h-fit flex flex-col items-center gap-y-[30px] p-4 md:p-2.5">
          <h1 className="font-bold text-lg md:text-2xl lg:text-3xl text-white text-center">Don't miss the 50% Promo Opportunity with very high quality products and affordable prices!</h1>
          <div className="flex items-center gap-x-[40px] gap-y-4 flex-col md:flex-row">
            <button className="flex justify-center items-center text-white gap-x-2.5 py-3 px-6 bg-primary-color rounded-lg w-[200px] max-w-[200px] h-[50px] max-h-[50px] transition-all ease-in duration-[250] hover:bg-[#592D97]">
              Buy Now
              <img src="./assets/arrow-header.svg" alt="" />
            </button>
            <button className="flex justify-center items-center text-white gap-x-2.5 py-3 px-6 border-2 border-primary-color hover:bg-primary-color rounded-lg w-[200px] max-w-[200px] h-[50px] max-h-[50px] transition-all ease-in duration-[250]">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
