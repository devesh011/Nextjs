"use client";
import React from "react";
import NavBar from "./components/NavBar";
import "./globals.css";
import Main from "./components/Main";
import Hoteldetails from"./components/Hoteldetails"
import Host from "./components/Host";
import Aboutus from "./components/Aboutus";
import Things from "./components/Things";
import MoreDetails from "./components/MoreDetails";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    {/* <body className="bg-[#032831] text-white"></body> */}

      <div>
        <NavBar />
      </div>

      <hr />

      <div className="Home">
        <Main />
      </div>

      <div className="bg-[#3B4E55]">
       <Hoteldetails />
      </ div>
      
      <div className="bg-[#032831]">
       <Host />
      </ div>

      <div className="About bg-[#3B4E55]">
       <Aboutus />
      </ div>
      
      <div className="bg-[#032831]">
       <Things />
      </ div>
      
      <div className="bg-[#3B4E55]">
       <MoreDetails />
      </ div>

      <div className="Contact bg-[#032831]">
       <Footer />
      </ div>
     
    </>
  );
}