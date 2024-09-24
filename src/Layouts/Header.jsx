import { Box } from '@mui/material'
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';



const Header = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
      };
      const MenuItems = [
        { name: "Home", link: "/home" },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" },
        { name: "Login", link: "/login" },
      ];
    
  return (
    <Box>
        <div className="bg-black  w-full  flex justify-center items-center h-[55px]   mx-auto sm:px-10 px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]"  >Logo</h1>

        <ul className="hidden md:flex">
          {MenuItems.map((item) => (
          <a href={item.link}> <li
              key={item.name}
              className="p-2 hover:bg-[#00df9a] cursor-pointer  rounded m-2 duration-300 hover:text-black "
            >
             {item.name}
            </li>
            </a>
           
          ))}
        </ul>

        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <ul
          className={
            nav
              ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">Logo</h1>

          {MenuItems.map((item) => (
            <li
              key={item.id}
              className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      
    </Box>
  )
}

export default Header
