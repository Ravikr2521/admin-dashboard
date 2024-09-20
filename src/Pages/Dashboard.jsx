import React, { useEffect } from 'react';
import { CiBank } from "react-icons/ci";
import { FaUser, FaChartBar, FaShieldAlt, FaCartPlus, FaUsers } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setBreadcrumbs } from '../features/slices/appslice';

const Dashboard = () => {
  const dispatch = useDispatch()
  const Cards = [
    {
      icon: <FaUser size={36} className="text-green-600" />,
      moduleName: 'My Dashboard',
      link: '/',
    },
    {
      icon: <FaUsers size={36} className="text-blue-600" />,
      moduleName: 'Onboarding',
      link: '/onboarding',
    },
    {
      icon: <CiBank size={36} className="text-red-600" />,
      moduleName: 'Banking - LOS',
      link: '/',
    },
    {
      icon: <FaShieldAlt size={36} className="text-yellow-600" />,
      moduleName: 'Insurance Retail',
      link: '/',
    },
    {
      icon: <FaChartBar size={36} className="text-purple-600" />,
      moduleName: 'Advisory',
      link: '/',
    },
    {
      icon: <FaCartPlus size={36} className="text-pink-600" />,
      moduleName: 'E-Mandi',
      link: '/',
    },
  ];


  useEffect(()=>{
    dispatch(setBreadcrumbs(null))

  },[])

  return (
    <div className=" bg-gray-100 p-4">
      <h1 className="text-3xl font-semibold text-center mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {Cards.map((product, index) => (
          <Link
            to={product.link}
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform group transform hover:-translate-y-2 duration-300"
          >
            <div className="flex flex-col items-center">
              <div className="mb-4 ">{product.icon}</div>
              <h2 className="text-l font-bold text-gray-700 ">{product.moduleName}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
