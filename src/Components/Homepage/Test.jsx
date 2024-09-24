import { Box } from "@mui/material";
import React from "react";

const Test = () => {
  return (
    <Box>
     <Box className="flex flex-col lg:flex-row md:flex-col max-w-7xl sm:px-4 md:w-full md:px-8 gap-4  p-5 mx-auto sm:mt-10">
     <Box className="w-full lg:w-1/2">
          <img
            src="src/assets/images/climate.jpg"
            alt="About Us"
            className="w-full h-auto rounded-lg object-cover"
          />
        </Box>
        <Box className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <h1 className="text-2xl font-bold mb-4">Climate Changes</h1>
          <p className="text-lg">
            Welcome to our website. We are excited to share our content with
            you. Here you will find various resources and information that can
            help you learn more about our offerings.
            <br />
            Some centennial enterprises have pages of content that can fit in
            this section, while startups can tell the story of how the company
            was born, its challenges, and its vision for the future.
            <br />
            Whatever it is, your story matters to your prospective buyers and
            team members. Make it entertaining and as immersive as you can.
          </p>
        </Box>

        
      </Box>
      <Box className="flex flex-col lg:flex-row md:flex-col max-w-7xl sm:px-4 md:w-full md:px-8 gap-4  p-5 mx-auto sm:mt-10">
        <Box className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <h1 className="text-2xl font-bold mb-4">About Us</h1>
          <p className="text-lg">
            Welcome to our website. We are excited to share our content with
            you. Here you will find various resources and information that can
            help you learn more about our offerings.
            <br />
            Some centennial enterprises have pages of content that can fit in
            this section, while startups can tell the story of how the company
            was born, its challenges, and its vision for the future.
            <br />
            Whatever it is, your story matters to your prospective buyers and
            team members. Make it entertaining and as immersive as you can.
          </p>
        </Box>

        <Box className="w-full lg:w-1/2">
          <img
            src="src/assets/images/climate.jpg"
            alt="About Us"
            className="w-full h-auto rounded-lg object-cover"
          />
        </Box>
      </Box>

      <Box
        className=" p-4  rounded-lg  md:p-8 dark:bg-gray-800"
        id="statistics"
        role="tabpanel"
        aria-labelledby="statistics-tab"
      >
        <Box className="grid  bg-black  rounded-xl p-3 max-w-screen-xl md:grid-cols-5 grid-cols-2 mx-auto text-white sm:grid-cols-2 xl:grid-cols-5 dark:text-white sm:p-8">
          <div className="flex flex-col mx-auto text-center">
            <p className="mb-2 text-3xl font-extrabold">73M+</p>
            <p className="text-gray-200 dark:text-gray-200">Developers</p>
          </div>
          <div className="flex flex-col mx-auto text-center">
            <p className="mb-2 text-3xl font-extrabold">100M+</p>
            <p className="text-gray-200 dark:text-gray-400">
              Public repositories
            </p>
          </div>
          <div className="flex flex-col mx-auto text-center">
            <p className="mb-2 text-3xl font-extrabold">1000s</p>
            <p className="text-gray-200 dark:text-gray-400">
              Open source projects
            </p>
          </div>
          <div className="flex flex-col mx-auto text-center ">
            <p className="mb-2 text-3xl font-extrabold">1000s</p>
            <p className="text-gray-200 dark:text-gray-400">
              Open source projects
            </p>
          </div>
          <div className="flex flex-col mx-auto text-center">
            <p className="mb-2 text-3xl font-extrabold">100M+</p>
            <p className="text-gray-200 dark:text-gray-400">
              Public repositories
            </p>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default Test;
