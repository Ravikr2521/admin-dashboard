import React, { useState } from 'react';
import { Box } from '@mui/material';

const Navbar = ({setIsSidebarOpen}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Box className="p-4 flex justify-between items-center bg-white shadow relative">
      <h1 className="text-xl font-semibold">Admin Dashboard</h1>
      

      <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button onClick={()=>setIsSidebarOpen(true)}>
          test
        </button>
       
        <button
          type="button"
          className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button"
          aria-expanded={isDropdownOpen}
          onClick={handleDropdownToggle}
        >
          <span className="sr-only">Open user menu</span>
          <img
            className="w-8 h-8 rounded-full"
            src="https://imgs.search.brave.com/ul1ELzJhn3eDT8eV6L6sFVf3Ca6nEr9s5DHA1JybFYE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5zcHJvdXRzb2Np/YWwuY29tL3VwbG9h/ZHMvMjAyMi8wNi9w/cm9maWxlLXBpY3R1/cmUuanBlZw"
            alt="user photo"
          />
        </button>


        {isDropdownOpen &&(
          <div
            className="z-50 fixed top-16 right-4 w-48 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
              <span className="block text-sm text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
         
        )}

       
      </div>
    </Box>
  );
};

export default Navbar;
