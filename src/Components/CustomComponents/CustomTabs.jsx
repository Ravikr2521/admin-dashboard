import React, { useState, useEffect } from "react";

const CustomTabs = ({ tabs }) => {
    
  const [activeTab, setActiveTab] = useState(() => {
    const savedTab = localStorage.getItem("activeTab");
    return savedTab !== null ? parseInt(savedTab, 10) : 0;
  });


  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full">
    <div className="relative flex flex-col lg:flex-row items-center bg-white shadow-md rounded-full overflow-hidden lg:w-3/5 md:w-4/5 sm:w-full w-full">
      <span
        className="absolute top-[2px] left-0 h-10 bg-red-500 rounded-full transition-transform duration-300 ease-out"
        style={{ transform: `translateX(${activeTab * (100 / tabs.length)}%)` }}
      ></span>
  
      {tabs.map((tab, index) => (
        <div key={index} className="relative flex-1 w-full lg:w-auto">
          <label
            className={`flex items-center justify-center h-11 font-medium rounded-full cursor-pointer transition-colors duration-300 ease-in-out relative z-10 py-2 lg:py-0 ${
              activeTab === index ? "text-white bg-red-500" : "text-gray-500"
            }`}
            onClick={() => handleTabChange(index)}
          >
            {tab.label}
            {tab.notification > 0 && (
              <span
                className={`ml-2 flex items-center justify-center w-6 h-6 rounded-full ${
                  activeTab === index
                    ? "bg-white text-red-500"
                    : "bg-gray-300 text-black"
                } transition duration-300 ease-in-out`}
              >
                {tab.notification}
              </span>
            )}
          </label>
        </div>
      ))}
    </div>
  
    <div className="mt-4">
      {tabs[activeTab] && (
        <div className="p-2 lg:p-4">{tabs[activeTab].content}</div>
      )}
    </div>
  </div>
  
  );
};

export default CustomTabs;



