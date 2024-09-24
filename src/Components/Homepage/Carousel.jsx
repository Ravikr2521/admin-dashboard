import React, { useRef } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Box } from "@mui/material"

const Carousel = () => {
  const ref = useRef()
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: { origin: "center", perView: 3, spacing: 10 },
    range: {
      min: -5,
      max: 5,
    },
    breakpoints: {
      '(max-width: 640px)': {
        slides: {
          origin: 'auto',
          perView: 1,
          spacing: 10,
        },
      },
      '(min-width: 641px) and (max-width: 1024px)': { 
        slides: {
          origin: 'center',
          perView: 2,
          spacing: 10,
        },
      },
      '(min-width: 1025px)': { 
        slides: {
          origin: 'center',
          perView: 3,
          spacing: 10,
        },
      },
    },
    
  })
  const cardData = [
    {
      title: "Service 1",
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
      title: "Service 2",
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
      title: "Service 3",
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
    {
      title: "Service 4",
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
      title: "Service 5",
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
    <Box >
<div className="realtive ">

     <h1 className="text-2xl font-bold text-white  px-[3%]">Services</h1>
       </div>
   
    <div ref={sliderRef} className="keen-slider mb-10">

       {cardData.map((card, index) => (
        <div key={index} className="p-4 max-w-sm keen-slider__slide">
          <div className="flex rounded-lg h-full relative transition-transform dark:bg-gray-800  p-8 flex-col bg-white" >
            {card.emoji && (
              <div className="absolute right-[10px] top-[10px]">
                {card.emoji}
              </div>
            )}
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 cursor-pointer text-white flex-shrink-0 transition-transform duration-300 hover:scale-110" >
                {card.icon}
              </div>

              <h2 className="text-black dark:text-white text-lg font-medium">
                {card.title}
              </h2>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <p className="leading-relaxed text-base text-black dark:text-gray-300">
                {card.description}
              </p>
              <a
                href={card.learnMoreLink}
                className="mt-3 text-black dark:text-white hover:text-yellow-400 inline-flex items-center"
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
  )
}

export default Carousel

