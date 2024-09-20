import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import Carousel from "../Components/Homepage/Carousel";
import Cards from "../Components/Homepage/Cards";
import AboutContent from "../Components/Homepage/AboutContent";
import Test from "../Components/Homepage/Test";
import GridCards from "../Components/Homepage/GridCards";

const HomePage = () => {
  return (
    <div>
      <Box>
        <div className="relative px-6 pt-1 lg:px-8">
          <div
            className="absolute inset-0 -z-20 overflow-hidden"
            aria-hidden="true"
          >
            <div
              className="absolute inset-0 bg-cover bg-center "
              style={{ backgroundImage: "url('src/assets/images/home.jpg')" }}
            ></div>
          </div>

          <div className="mx-auto max-w-2xl py-20 sm:py-48 ">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative flex rounded-full px-3 py-2 text-sm leading-6 text-slate-200 ring-1 ring-slate-400 hover:ring-slate-200">
                Announcing our next round of funding.{" "}
                <Link href="#">
                  <p className="font-semibold text-indigo-600 mx-2">
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </Link>
              </div>
            </div>

            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-6xl">
                Data to enrich your online business
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-200">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="#">
                  <p className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Get started
                  </p>
                </Link>
                <Link href="#">
                  <p className="text-sm font-semibold leading-6 text-slate-200">
                    Learn more <span aria-hidden="true">→</span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Box>

      <AboutContent />

      <Box>
        <Cards />
      </Box>

      <Box className="px-10 mt-10 py-10 bg-black">
        <Carousel />
      </Box>

      <Test />

      <Box className="flex justify-center items-center">
      <Box className="w-[90%]">
        <GridCards />
      </Box>
      </Box>
    </div>
  );
};

export default HomePage;
