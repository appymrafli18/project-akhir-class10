import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
      <div style={{ backgroundImage: `url("assets/backgroundform.svg")` }} className="w-full h-screen flex justify-center items-center bg-no-repeat bg-cover">
        <div className="mx-auto">
          <div className="sm:min-w-[450px] sm:min-h-[500px] mx-4 sm:max-w-[300px] md:max-w-[450px] bg-white shadow-lg rounded-xl px-8 py-12">
            <h1 className="text-base sm:text-2xl font-semibold mb-2 text-center">Register</h1>
            <form action="" className="flex flex-col gap-2 mt-4">
              <label htmlFor="">
                Email <span className="text-red-600">*</span>
              </label>
              <input type="email" placeholder="Enter your Email" className=" rounded-md outline-none focus:border-primary-color border required:ring-red-600 px-4 py-2 focus:ring-primary-color focus:ring-1" required />
              <label htmlFor="">
                No Handphone <span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                pattern="^(\+62|62|0)8[1-9][0-9]{6,9}$"
                placeholder="Enter Your No Handphone"
                className=" rounded-md outline-none focus:border-primary-color border required:ring-red-600 px-4 py-2  focus:ring-primary-color focus:ring-1"
                required
              />
              <label htmlFor="">
                Password <span className="text-red-600">*</span>
              </label>
              <input type="password" placeholder="Enter Your Password" className=" rounded-md outline-none focus:border-primary-color border required:ring-red-600 px-4 py-2 focus:ring-primary-color focus:ring-1" required />
              <Link to="/" className="py-2.5 px-4 text-center bg-primary-color text-white rounded-md font-base font-medium hover:bg-purple-800 mt-4" type="submit">
                Register
              </Link>
            </form>
            <div className="mt-[1.5rem] w-full flex sm:justify-between justify-center items-center flex-wrap gap-y-8">
              <div className="text-center w-full">
                <h1>
                  Already have an account?{' '}
                  <Link to="/login">
                    <span className="text-[#1A1A8D] cursor-pointer hover:underline">Login</span>
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

export default Register;
