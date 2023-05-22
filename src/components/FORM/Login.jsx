import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div style={{ backgroundImage: `url("assets/backgroundform.svg")` }} className="w-full h-screen flex justify-center items-center bg-no-repeat bg-cover">
        <div className="mx-auto">
          <div className="sm:min-w-[450px] sm:min-h-[500px] mx-4 sm:max-w-[300px] md:max-w-[450px] bg-white shadow-lg rounded-xl px-8 py-12">
            <h1 className="text-base sm:text-2xl font-semibold mb-2">Log In</h1>
            <p className="text-xs sm:text-sm md:text-base">Selamat Datang! Mohon Lakukan Login untuk melihat detail lebih lanjut</p>
            <form action="" className="flex flex-col gap-2 mt-4">
              <label htmlFor="">
                Email <span className="text-red-600">*</span>
              </label>
              <input type="email" placeholder="Masukkan Email" className=" rounded-md outline-none focus:border-primary-color border required:ring-red-600 px-4 py-2 focus:ring-primary-color focus:ring-1" required />
              <label htmlFor="">
                Password <span className="text-red-600">*</span>
              </label>
              <input type="password" placeholder="Masukkan Password" className=" rounded-md outline-none focus:border-primary-color border required:ring-red-600 px-4 py-2 focus:ring-primary-color focus:ring-1" required />

              <Link to="/" className="text-center py-2.5 px-4 bg-primary-color text-white rounded-md font-base font-medium hover:bg-purple-800 mt-4" type="submit">
                Login
              </Link>
            </form>

            {/* Login With */}
            <div className="flex justify-between items-center text-[#1A1A8D] mb-4">
              <h1 className="cursor-pointer hover:underline transition-all ease-out duration-500 sm:text-base text-sm">Lupa Password</h1>
              <h1 className="cursor-pointer hover:underline transition-all ease-out duration-500 sm:text-base text-sm">Login With QR</h1>
            </div>
            {/* Login With */}

            <h1 className="text-center block w-full border-t pt-1 text-sm">Another Login</h1>
            <div className="sm:mt-[1rem] w-full flex justify-between items-center flex-wrap gap-y-8">
              <Link to="/" className="flex cursor-pointer hover:scale-[1.05] border items-center rounded-full sm:rounded-md gap-2.5 p-4 sm:py-4 sm:px-5 sm:min-w-[150px]">
                <img src="./assets/Vector-Facebook.svg" alt="facebook" className="w-[20px] sm:w-[25px]" />
              <span className="hidden sm:block">Facebook</span>
              </Link>
              <Link to="/" className="flex cursor-pointer hover:scale-[1.05] border items-center rounded-full sm:rounded-md gap-2.5 p-4 sm:py-4 sm:px-5 sm:min-w-[150px]">
                <img src="./assets/Vector-Google.svg" alt="google" className="w-[20px] sm:w-[25px]" />
                <span className="hidden sm:block">Google</span>
              </Link>
              <div className="text-center w-full">
                <h1>
                  Belum Memiliki Account?{' '}
                  <Link to="/register">
                    <span className="text-[#1A1A8D] cursor-pointer hover:underline">Register</span>
                  </Link>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
