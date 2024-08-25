import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import smvduLogo from "../../public/logo.png";
import brsiLogo from "../../public/brsi.png";
const Layout = () => {
  return (
    <div className="overflow-x-hidden">
       <div className="conference-details py-5 border ">
        <div className=" flex justify-center items-center ">
          <div>
            <img className=" md:w-32 md:h-32 " src={smvduLogo} alt="" />
          </div>
          <div>
            <h1 className="text-xl md:text-3xl font-bold text-sky-800 text-center ">
              3rd International Conference on Emerging Trends In Bioscience and
              Chemical Technology
            </h1>
          </div>
          <div>
            <img className="md:w-32 md:h-32 " src={brsiLogo} alt="" />
          </div>
        </div>
        <div>
          <p className="text-lg md:text-2xl font-regular text-center ">
            February 14-15 ,2025 , Shri Mata Vaishno Devi University (SMVDU) ,
            Jammu & Kashmir
          </p>
        </div>
      </div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
