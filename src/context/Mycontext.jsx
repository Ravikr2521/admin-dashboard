import React, { createContext, useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {  
  const [value, setValue] = useState("hiii");


  const [productData,setProductsData]=useState([])
  const [categoryData,setCategoryData]=useState([])

  const getProduct = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(`https://fakestoreapi.com/products`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setProductsData(result)
      })
      .catch((error) => {
        if (error) {
          console.log("erorr")
        }
      });
  };

  const getCategory = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(`https://fakestoreapi.com/products/categories`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setCategoryData(result)
      })
      .catch((error) => {
        if (error) {
          console.log("erorr")
        }
      });
  };
  const getProductByCategory = (category) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(`https://fakestoreapi.com/products/category/${category}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setProductsData(result) 
        
      })
      .catch((error) => {
        if (error) {
          console.log("erorr")
        }
      });
  };




  return (
    <MyContext.Provider value={{ value, setValue , productData ,setProductsData, getProduct  , categoryData , getCategory , getProductByCategory }}>
      {children}
    </MyContext.Provider>
  );
};







