import React from "react";
import Navbar from "./Navbar";
import ChooseUserType from "./ChooseUserType";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      {/* <ChooseUserType /> */}
      <Outlet />
      <Footer />
    </>
  );
}

export default Home;
