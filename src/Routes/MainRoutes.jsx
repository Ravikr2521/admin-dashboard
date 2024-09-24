

import Layout from "../Layout";
import About from "../Pages/About";
import Counter from "../Pages/Counter";
import Dashboard from "../Pages/Dashboard";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import Onboarding from "../Pages/Onboarding/Onboarding";
import TestPage from "../Pages/TestPage";


const MainRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    { path: "/", element: <Dashboard /> }, 
    { path: "/login", element: <Login /> }, 
    { path: "/about", element: <About /> }, 
    { path: "/test", element: <TestPage /> }, 
    { path: "/counter", element: <Counter /> }, 
    { path: "/Homepage", element: <HomePage /> }, 
    { path: "/onboarding", element: <Onboarding /> } 
  ],
};

export default MainRoutes;