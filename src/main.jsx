import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Header from "./Layouts/Header.jsx";
import Footer from "./Layouts/Footer.jsx";
import { Provider } from "react-redux";
import { store } from "./features/redux/store.js";
import { MyContextProvider } from "./context/Mycontext.jsx";
import Sidebar from "./Pages/Dashboard.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="w-full h-dvh flex flex-col justify-between overflow-hidden">
   
      {/* <div className="h-fit">
        <Header />
      </div> */}
      {/* <Sidebar/> */}
      <div className="h-full flex flex-col gap-16 overflow-auto">
        <Provider store={store}>
          <MyContextProvider>
            <App />
          </MyContextProvider>
        </Provider>
        {/* <Footer /> */}
      </div>
    </div>
  </React.StrictMode>



);
