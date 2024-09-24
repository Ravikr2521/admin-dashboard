import { Box } from '@mui/material';
import React, { useState } from 'react'
import {
    HiHome,
    HiMenu,
    HiShoppingCart,
    HiUserGroup,
    HiChartBar,
    HiBell,
    HiUser,
    HiCog,
    HiLogout,
    HiChevronDown,
    HiChevronUp,
  } from "react-icons/hi";
  import { IoArrowBackOutline } from "react-icons/io5";
  import { Link } from "react-router-dom";

const Sidebar = ({isSidebarOpen, setIsSidebarOpen}) => {

    const [isProductsSubmenuOpen, setIsProductsSubmenuOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
    
  
    const toggleProductsSubmenu = () => {
      setIsProductsSubmenuOpen(!isProductsSubmenuOpen);
    };
  return (
    <div>
        <div
          className={`fixed inset-y-0 left-0 transition-all duration-300 ease-in-out z-50  ${
            isSidebarOpen ? "w-64 opacity-100" : "w-16 opacity-0"
          } bg-white shadow-lg overflow-hidden`}
        >
          <div className="p-4 flex justify-between items-center">
            <button
              onClick={toggleSidebar}
              className="text-gray-600 hover:text-gray-900"
            >
              {isSidebarOpen ? (
                <IoArrowBackOutline size={20} />
              ) : (
                "Open Sidebar"
              )}
            </button>
          </div>
          <nav className="mt-1">
            <Link
              to="/Homepage"
              className="flex items-center py-2.5 px-4 text-gray-700 hover:bg-gray-200 group "
            >
              <HiHome className="w-6 h-6 group-hover:text-orange-500" />
              {isSidebarOpen && (
                <span className="ml-4 mt-1 group-hover:text-orange-500">
                  Dashboard
                </span>
              )}
            </Link>
            <Link
              to="/orders"
              className="flex items-center py-2.5 px-4 text-gray-700 hover:bg-gray-200 group"
            >
              <HiShoppingCart className="w-6 h-6 group-hover:text-orange-500" />
              {isSidebarOpen && (
                <span className="ml-4 group-hover:text-orange-500">Orders</span>
              )}
            </Link>

            <div>
              <button
                onClick={toggleProductsSubmenu}
                className={`w-full flex justify-between items-center group py-2.5 px-4 text-gray-700 hover:bg-gray-200 ${isProductsSubmenuOpen ? "bg-gray-200" : ""}`}
              >
                <div className="flex items-center ">
                  <HiUserGroup className= {`w-6 h-6 group-hover:text-orange-500 ${isProductsSubmenuOpen ? "text-orange-500" : ""}`} />
                  {isSidebarOpen && (
                    <span className="ml-4 group-hover:text-orange-500 ">
                      Products
                    </span>
                  )}
                </div>
                {isSidebarOpen && (
                  <span>
                    {isProductsSubmenuOpen ? (
                      <HiChevronUp />
                    ) : (
                      <HiChevronDown />
                    )}
                  </span>
                )}
              </button>

              <div className="sidebar">
                <div className="sidebar-menu">
                  <ul>
                    <li>
                      <div
                        className={`submenu overflow-hidden transition-max-h duration-300 ease-in-out ml-12 ${
                          isProductsSubmenuOpen ? "max-h-40  " : "max-h-0"
                        }`}
                      >
                        <ul className="">
                          <li>
                            <Link
                              to="/products/electronics"
                              className="block py-2 px-4 text-gray-600 hover:bg-gray-200 relative hover:text-black"
                            >
                              Electronics
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/fashion"
                              className="block py-2 px-4 text-gray-600 hover:bg-gray-200 relative hover:text-black"
                            >
                              Fashion
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/home-goods"
                              className="block py-2 px-4 text-gray-600 hover:bg-gray-200 relative hover:text-black"
                            >
                              Home Goods
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <Link
              to="/"
              className="flex items-center py-2.5 px-4 text-gray-700 hover:bg-gray-200 group"
            >
              <HiChartBar className="w-6 h-6 group-hover:text-orange-500" />
              {isSidebarOpen && (
                <span className="ml-4  group-hover:text-orange-500">
                  Customers
                </span>
              )}
            </Link>
            <Link
              to="/"
              className="flex items-center py-2.5 px-4 text-gray-700 hover:bg-gray-200 group"
            >
              <HiBell className="w-6 h-6  group-hover:text-orange-500" />
              {isSidebarOpen && (
                <span className="ml-4  group-hover:text-orange-500">
                  Reports
                </span>
              )}
            </Link>
            <div className="border-t border-gray-200 mt-5 pt-5">
              <Link
                to="/"
                className="flex items-center py-2.5 px-4 text-gray-700 hover:bg-gray-200 group"
              >
                <HiUser className="w-6 h-6  group-hover:text-orange-500" />
                {isSidebarOpen && (
                  <span className="ml-4  group-hover:text-orange-500">
                    Profile
                  </span>
                )}
              </Link>
              <Link
                to="/"
                className="flex items-center py-2.5 px-4 text-gray-700 hover:bg-gray-200 group"
              >
                <HiCog className="w-6 h-6  group-hover:text-orange-500" />
                {isSidebarOpen && (
                  <span className="ml-4  group-hover:text-orange-500">
                    Settings
                  </span>
                )}
              </Link>
              <Link
                to="/"
                className="flex items-center py-2.5 px-4 text-gray-700 hover:bg-gray-200 group"
              >
                <HiLogout className="w-6 h-6  group-hover:text-orange-500" />
                {isSidebarOpen && (
                  <span className="ml-4  group-hover:text-orange-500">
                    Log Out
                  </span>
                )}
              </Link>
            </div>
          </nav>
        </div>

<Box className="lg:block hidden">
        <div
          className={`fixed inset-y-0 left-0 flex flex-col items-center transition-all duration-300 ease-in-out  ${
            isSidebarOpen ? "w-16 opacity-0 lg:block hidden" : "w-16 opacity-100"
          } bg-gray-800 text-white`}
        >
          <button
            onClick={toggleSidebar}
            className="p-2 mt-3 mb-4 hover:bg-gray-700 rounded-full"
          >
            <HiMenu className="w-6 h-6" />
          </button>
          <Link to="/" className="p-2 mb-4 hover:bg-gray-700 rounded-full">
            <HiHome className="w-6 h-6" />
          </Link>
          <Link to="/" className="p-2 mb-4 hover:bg-gray-700 rounded-full">
            <HiShoppingCart className="w-6 h-6" />
          </Link>
          <Link to="/" className="p-2 mb-4 hover:bg-gray-700 rounded-full">
            <HiUserGroup className="w-6 h-6" />
          </Link>
          <Link to="/" className="p-2 mb-4 hover:bg-gray-700 rounded-full">
            <HiChartBar className="w-6 h-6" />
          </Link>
          <Link to="/" className="p-2 mb-4 hover:bg-gray-700 rounded-full">
            <HiBell className="w-6 h-6" />
          </Link>
          <Link to="/" className="p-2 mb-4 hover:bg-gray-700 rounded-full">
            <HiUser className="w-6 h-6" />
          </Link>
          <Link to="/" className="p-2 mb-4 hover:bg-gray-700 rounded-full">
            <HiCog className="w-6 h-6" />
          </Link>
          <Link to="/" className="p-2 mb-4 hover:bg-gray-700 rounded-full">
            <HiLogout className="w-6 h-6" />
          </Link>
        </div>
        </Box>
      
    </div>
  )
}

export default Sidebar
