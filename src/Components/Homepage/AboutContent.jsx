import React from "react";
import { Box } from "@mui/material";

const AboutContent = () => {
  return (
    <>
      <Box className="flex flex-col lg:flex-row md:flex-col max-w-7xl sm:px-4 md:w-full md:px-8 gap-4  p-5 mx-auto sm:mt-10">
  <Box className="w-full lg:w-1/2 mb-6 lg:mb-0">
    <h1 className="text-2xl font-bold mb-4">About Us</h1>
    <p className="text-lg">
      Welcome to our website. We are excited to share our content with you. Here
      you will find various resources and information that can help you learn
      more about our offerings.
      <br />
      Some centennial enterprises have pages of content that can fit in this
      section, while startups can tell the story of how the company was born,
      its challenges, and its vision for the future.
      <br />
      Whatever it is, your story matters to your prospective buyers and team
      members. Make it entertaining and as immersive as you can.
    </p>
  </Box>

  <Box className="w-full lg:w-1/2">
    <img
      src="src/assets/images/about.jpg"
      alt="About Us"
      className="w-full h-auto rounded-lg object-cover "
      style={{
        transform: 'scale(1) perspective(1040px) rotateY(-15deg) rotateX(1deg) rotate(2deg)'
      }}
    />
  </Box>
</Box>

    </>
  );
};

export default AboutContent;
