import { Box } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box>
      <footer className="">
        <div className=" px-6 py-12 mx-auto bg-slate-100">
          <div className=" grid grid-cols-1 gap-6 gap-y-5 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4 ">
            <div className="sm:col-span-2 ">
              <h1 className="md:text-center text-xl font-bold text-gray-800 xl:text-1xl ">
                Subscribe our Newsletter to get upadte.
              </h1>
              <div className=" flex justify-center  flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row ">
                <input
                  id="email"
                  type="text"
                  className="px-4 py-2 text-gray-700 bg-white border rounded-md  focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                  placeholder="Email Address"
                />

                <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="ml-5">
              <p className="font-semibold text-gray-900"> Quick Link</p>
              <div className=" flex flex-col item-start mt-5 space-y-2">
                <a href="#" className="text-gray-600 hover:text-gray-90 hover:text-blue-700" >
                  Home
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-700 ">
                  About Us
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-700">
                  Contact Us
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-700">
                  Service
                </a>
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-900"> Documentation </p>
              <div className=" flex flex-col item-start mt-5 space-y-2">
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-90 hover:text-blue-700"
                >
                  Term & Condition
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-700 ">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-700">
                  Return Policy
                </a>
              </div>
            </div>
          </div>
          <hr className="mt-5 justify-center" />
          <div className="m-5">
            <p className="text-center text-gray-600">
              {" "}
               Copyright 2022 All Right Reserved by <span className="text-red-500 hover:text-blue-600 cursor-pointer">Ravi</span>
            </p>
          </div>
        </div>
      </footer>
    </Box>
  );
};

export default Footer;
