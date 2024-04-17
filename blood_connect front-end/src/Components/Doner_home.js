import React from "react";

import { Outlet } from "react-router-dom";
import Doner_dashboard from "./Doner_dashboard";


function Doner_Home() {
  return (
    <>
      <Doner_dashboard/>
      <Outlet />
      
    </>
  );
}

export default Doner_Home;
