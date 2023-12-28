import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Navbar = () => {
  const [fix, setFix] = useState(false);
  const [nav, setNav] = useState(false);
  const { id } = useParams();
  let defineLogo, defineAccount, defineKeranjang, defineSearch;

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 250) {
      setFix(true);
    } else {
      setFix(false);
    }
  });

  if (id) {
    defineLogo = `../assets/Logo.svg`;
    defineSearch = `../assets/Vector-Search.svg`;
    defineAccount = `../assets/Vector-Person.svg`;
    defineKeranjang = `../assets/Vector-Keranjang.svg`;
  } else {
    defineLogo = `./assets/Logo.svg`;
    defineSearch = `./assets/Vector-Search.svg`;
    defineAccount = `./assets/Vector-Person.svg`;
    defineKeranjang = `./assets/Vector-Keranjang.svg`;
  }

  return (
    <>
      <nav className="w-full z-[10000000000000000]">
        {/* Nav 1 */}
        <div className="bg-primary-color">
          <div className="container mx-auto">
            <h1 className="text-center text-[12px] sm:text-sm font-medium py-4 mx-4 text-secondary-color">
              Enjoy our best deals! Get your dream item at a much <span className="text-green-500 cursor-pointer underline underline-offset-4 decoration-solid">cheaper price.</span>
            </h1>
          </div>
        </div>
        {/* Nav 1 */}

        {/* Nav 2 */}
        <div className={fix ? 'z-[100] shadow-md w-full fixed top-0 transition-all duration-1000 ease-out bg-secondary-color' : 'shadow-md w-full transition-all duration-1000 relative ease-out bg-secondary-color'}>
          <div className="container mx-auto">
            {/* NAV MOBILE */}
            <div className={nav ? 'absolute inset-y-full inset-x-0 block lg:hidden origin-top transition-all duration-[400] ease-in' : 'absolute inset-y-full inset-x-0 hidden lg:hidden'}>
              <ul className="text-center shadow-md">
                <li className="border-y border-opacity-10 border-black cursor-pointer bg-secondary-color py-4 hover:text-white hover:bg-primary-color transition-all duration-[400] ease-in">
                  <Link to="/">Home</Link>
                </li>
                <li className="border-y border-opacity-10 border-black cursor-pointer bg-secondary-color py-4 hover:text-white hover:bg-primary-color transition-all duration-[400] ease-in">
                  <Link to="/about">About</Link>
                </li>
                <li className="border-y border-opacity-10 border-black cursor-pointer bg-secondary-color py-4 hover:text-white hover:bg-primary-color transition-all duration-[400] ease-in">What's New</li>
                <li className="border-y border-opacity-10 border-black flex fillhop justify-center items-center gap-x-2 cursor-pointer bg-secondary-color py-4 hover:text-white hover:bg-primary-color transition-all duration-[400] ease-in">
                  Category{' '}
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-black transition-all duration-[400] ease-in">
                    <path d="M2.5625 0L0.5 2.18182L6 8L11.5 2.18182L9.4375 0L6 3.63636L2.5625 0Z" />
                  </svg>
                </li>
                <li className="border-y border-opacity-10 border-black cursor-pointer bg-secondary-color py-4 hover:text-white hover:bg-primary-color transition-all duration-[400] ease-in">Help</li>
              </ul>
            </div>
            {/* NAV MOBILE */}

            <div className="flex items-center justify-between p-4">
              {/* Logo */}
              <div className="hidden lg:block">
                <img src={defineLogo} alt="Logo GoShop" />
              </div>
              {/* Logo */}

              {/* List */}
              <div className="hidden lg:block">
                <ul className="flex items-center lg:text-base gap-x-8">
                  <li className="cursor-pointer hover:text-primary-color transition-all duration-[400] ease-in">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="cursor-pointer hover:text-primary-color transition-all duration-[400] ease-in">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="cursor-pointer hover:text-primary-color transition-all duration-[400] ease-in">What's New</li>
                  <li className="flex items-center gap-x-2 cursor-pointer hover:text-primary-color transition-all duration-[400] ease-in">
                    Category
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.5625 0L0.5 2.18182L6 8L11.5 2.18182L9.4375 0L6 3.63636L2.5625 0Z" fill="black" />
                    </svg>
                  </li>
                  <li className="cursor-pointer hover:text-primary-color transition-all duration-[400] ease-in">
                    <a href="#help">Help</a>
                  </li>
                </ul>
              </div>
              {/* List */}

              {/* Search Bar */}
              <div className="sm:w-[70%] w-[60%] lg:w-[25%] flex items-center justify-center bg-color-gray rounded-full">
                <input type="text" className="bg-color-gray rounded-full outline-none w-full px-8 py-2" placeholder="Cari product yang anda inginkan" />
                <img src={defineSearch} alt="search" className="mr-4 w-[20px]" />
              </div>
              {/* Search Bar */}

              {/* Account & Shop */}
              <div className="flex items-center gap-x-4 md:gap-x-8">
                <Link to="/login">
                  <div className="gap-x-2 flex cursor-pointer">
                    <img src={defineAccount} alt="Person Account" className="w-5 h-5" />
                    <span className="hidden lg:block">Account</span>
                  </div>
                </Link>
                <div className="block cursor-pointer">
                  <img src={defineKeranjang} alt="Keranjang" />
                </div>
                <div onClick={() => setNav(!nav)}>
                  <i className="fa-solid fa-bars fa-xl block lg:hidden cursor-pointer"></i>
                </div>
              </div>
              {/* Account & Shop */}
            </div>
          </div>
        </div>
        {/* Nav 2 */}
      </nav>
    </>
  );
};

export default Navbar;
