import React, { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../features/counter/counterSlice";
import { MyContext } from "../context/Mycontext";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Card, Drawer, Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { Add, Delete, Remove } from "@mui/icons-material";
import RemoveIcon from "@mui/icons-material/Remove";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const {
    value,
    setValue,
    productData,
    getProduct,
    setProductsData,
    getCategory,
    categoryData,
    getProductByCategory,
  } = useContext(MyContext);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory , setSelectedCatefory]=useState("")

  useEffect(() => {
    getProduct();
    getCategory();
  }, []);

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (!existingItem) {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
      setIsDrawerOpen(true);
    }
  };


  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCart = cartItems.map((cartItem) =>
      cartItem.id === itemId ? { ...cartItem, quantity: newQuantity } : cartItem
    );
    setCartItems(updatedCart);
  };

 
  const handleDelete = (itemId) => {
    const updatedCart = cartItems.filter((cartItem)=>cartItem.id !== itemId )
    setCartItems(updatedCart)
  }

  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  }
  


  const handleChange = (event) => {
    getProductByCategory(event.target.value);
    setSelectedCatefory(event.target.value);
  };

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <div className="h-[64dvh] overflow-y-scroll overflow-x-hidden">
      <h1 className="text-3xl font-semibold  text-center ">
        Product Data
      </h1>

      <Box className="lg:mx-10 ">
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          label="Category"
          onChange={handleChange}
          className="w-60 h-10"
          value={selectedCategory}
          displayEmpty
        >
          <MenuItem value="" disabled>
            Select a category
          </MenuItem>
          {categoryData?.map((item, id) => (
            <MenuItem key={id} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </Box>


      <Box className="flex justify-center items-center mt-5">
        <Box className="flex justify-center items-center gap-5 flex-wrap">
          {productData?.map((item) => {
            const isInCart = cartItems.some(
              (cartItem) => cartItem.id === item.id
            );
            return (
              <Card
                className="rounded lg:m-4 relative w-full max-w-48 md:max-w-60 lg:max-w-60 overflow-hidden p-3 hover:shadow-lg hover:cursor-pointer"
                key={item.id}
              >
                <span className="absolute top-2 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-yellow-400 text-center text-sm text-white">
                  {item.category}
                </span>

                <div className="flex justify-center items-center">
                  <img src={item.image} className="img-fluid h-48" />
                </div>

                <h2>{item.title.slice(0, 25)}</h2>
                <div className="flex items-center justify-between mt-3">
                  <p>
                    <span className="text-xl font-semibold text-slate-900">
                      ${item.price}
                    </span>
                  </p>
                  <a
                    href="#"
                    className={`group flex items-center rounded-md ${
                      isInCart ? "bg-gray-500" : "bg-slate-900"
                    } px-4 py-2.5 text-center text-sm font-medium text-white focus:outline-none`}
                    onClick={() => handleAddToCart(item)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="transform duration-300 transition-all group-hover:translate-x-1">
                      {isInCart ? "Added" : "Add to cart"}
                    </span>
                  </a>
                </div>
              </Card>
            );
          })}
        </Box>
      </Box>

      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 420 }}>
          <Box className="flex justify-between items-center p-3">
            <h2 className="text-lg font-semibold">Your Cart</h2>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box className="p-3">
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <>
                {cartItems.map((item, index) => (
                  <Box
                    key={index}
                    className="flex justify-between items-center mb-3"
                  >
                    <Box className="flex gap-3 ">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-14 h-14 rounded"
                      />
                      <div className="flex flex-col ">
                        <h3 className="text-m">{item.title.slice(0, 20)}</h3>
                        <p className="text-m text-gray-600">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </Box>
                    <Box className="border-2 w-24  flex items-center justify-between rounded-md bg-white shadow-md">
                      <button
                        disabled={item.quantity === 1}
                        className="px-1 cursor-pointer hover:bg-gray-100 rounded-md"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                      >
                        <Remove fontSize="small" />
                      </button>
                      <p className="text-xl font-semibold mx-2">
                        {item.quantity}
                      </p>
                      <button
                        className="px-1 hover:bg-gray-100 rounded-md"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                      >
                        <Add fontSize="small" />
                      </button>
                    </Box>
                    <Box>
                      <Delete
                        className="text-red-500 cursor-pointer"
                        onClick={() => handleDelete(item.id)}
                      />
                    </Box>
                  </Box>
                ))}
                <Box className="mt-4">
                  <h3 className="text-xl font-semibold">
                    Total: ${getTotalPrice()}
                  </h3>
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Drawer>
    </div>
  );
};

export default Counter;
