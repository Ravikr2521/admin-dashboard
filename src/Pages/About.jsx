import React from "react";
import GridCards from "../Components/Homepage/GridCards";
import { Box } from "@mui/material";

const About = () => {
  return (
    <Box className="flex justify-center items-center">
      <Box className="flex flex-col gap-6 mt-10 w-[90%]">
        <GridCards />
        <Box className="w-full flex items-center">
          <div className="">
            <img
              src="https://imgs.search.brave.com/L8QhRnaRV33I7NLu_nwLR5PZ4-kSre_e1q6MKhPsIFQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNC8w/OS8xMS8xOC8yMy90/b3dlci1icmlkZ2Ut/NDQxODUzXzY0MC5q/cGc"
              className="img-fluid rounded-xl h-60"
            />
          </div>
          <div className="w-full">
            <div className="border-grey rounded-r-lg border flex flex-col gap-16 p-5 w-full">
              <div className="flex w-full justify-between items-center">
                <p>Heyy 1</p>
                <p>Heyy 2</p>
                <p>Heyy 3</p>
              </div>
              <div className="flex  justify-between w-full">
                <p>heyy</p>
                <button className="border rounded-xl px-4 p-1  hover:bg-red-100 hover:border-red-300">
                  View more --
                </button>
              </div>
            </div>
          </div>
        </Box>

        <div class="flex flex-col rounded-2xl bg-gray-900 shadow-inner shadow-white/10 overflow-hidden max-w-sm mx-auto my-10">
          <div class="relative flex-none px-6 pb-6">
            <h3 class="text-sm font-medium">Social Sign-On</h3>
            <p class="mt-2 text-sm text-gray-400">
              Add high-conversion Social Sign-on (SSO) to your application in
              minutes. 20+ options and growing.
            </p>
          </div>
          <div class="relative flex-auto" style={{minHeight:"10.25rem"}}>
            <div class="absolute inset-0 overflow-hidden">
              <div class="relative mx-auto w-24 h-48">
                <svg
                  viewBox="0 0 98 192"
                  fill="none"
                  class="absolute inset-0 h-full w-full"
                >
                  <path
                    stroke="#fff"
                    stroke-opacity=".06"
                    d="M49 192V96.266a8 8 0 0 0-2.285-5.599L3.285 46.333A8 8 0 0 1 1 40.734V-28M49 93l45.715-46.667A8 8 0 0 0 97 40.734V-23"
                  ></path>
                </svg>
              </div>
              <div class="absolute right-1/2 top-6 mr-24">
                <div class="relative h-64 w-64">
                  <div class="absolute right-4 top-4 h-56 w-28">
                    <svg
                      viewBox="0 0 109 216"
                      fill="none"
                      class="absolute inset-0 h-full w-full"
                    >
                      <path
                        stroke="#fff"
                        stroke-opacity=".06"
                        d="M108 216V111.734a8 8 0 0 0-2.285-5.599L62.285 61.401A8 8 0 0 1 60 55.803V-13"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="relative px-6 pt-6">
            <div class="relative h-24 w-24">
              <svg
                class="absolute inset-0 h-full w-full"
                viewBox="0 0 70 60"
                fill="none"
              >
                <path
                  d="M35 59V29.56a4 4 0 0 1 1.14-2.8L58.83 7.07A4 4 0 0 0 60 4.24V-19"
                  stroke="#fff"
                  stroke-opacity=".06"
                ></path>
              </svg>
            </div>
          
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default About;
