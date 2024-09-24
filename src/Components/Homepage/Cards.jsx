import { Box } from "@mui/material";
import React from "react";

const   Cards = () => {
  const cardData = [
    {
      title: "Feature 1",
      description:
        "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.",
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      ),
      learnMoreLink: "#",
      emoji: "👋",
    },
    {
      title: "Feature 2",
      description:
        "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.",
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      ),
      learnMoreLink: "#",
    },
    {
      title: "Feature 3",
      description:
        "Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet 33 nihil molestias. Rem perspiciatis iure ut laborum inventore et maxime amet.",
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      ),
      learnMoreLink: "#",
    },
   
  ];
  return (
    <Box className="mt-10 max-w-7xl sm:px-4 md:w-full mx-auto">
      <div className="">
     
      <h1 className="text-2xl font-bold   px-[6%]">Features</h1>
        </div>

    
    <div className="flex flex-wrap justify-center">
     
      {cardData.map((card, index) => (
        <div key={index} className="p-4 sm:w-1/2 md:w-1/2 lg:w-1/3 max-w-sm">
          <div className="flex rounded-lg h-full relative  transition-transform dark:bg-gray-800  p-8 flex-col bg-black  hover:cursor-pointer  hover:shadow-lg hover:scale-105 duration-300 ease-in-out" >
            {card.emoji && (
              <div className="absolute right-[10px] top-[10px] ">
                {card.emoji}
              </div>
            )}
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 cursor-pointer text-white flex-shrink-0 transition-transform duration-300 hover:scale-110">
                {card.icon}
              </div>

              <h2 className="text-white dark:text-white text-lg font-medium">
                {card.title}
              </h2>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <p className="leading-relaxed text-base text-white dark:text-gray-300">
                {card.description}
              </p>
              <a
                href={card.learnMoreLink}
                className="mt-3 text-yellow-200 dark:text-white hover:text-yellow-400 inline-flex items-center"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
    </Box>
  );
};

export default Cards;
