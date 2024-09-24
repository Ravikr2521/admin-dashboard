// Layout.jsx
import React, { useState } from "react";
import { Outlet } from "react-router-dom"; 
import Sidebar from "./Layouts/Sidebar";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";
import Navbar from "./Layouts/Navbar";
import CustomBreadCrumbs from "./Components/CustomComponents/CustomBreadCrumbs";


const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="w-full h-screen flex flex-col justify-between">
      
      <div className="flex h-full bg-gray-100 ">
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        
        {/* Main Content Area */}
        <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "lg:ml-64 md:ml-60 ml-0" : "lg:ml-16 md:ml-16 ml-0"}`}>
            <Navbar setIsSidebarOpen={setIsSidebarOpen}/>
            <CustomBreadCrumbs/>
          <main className="p-6 ">
            <Outlet /> 
          </main>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
