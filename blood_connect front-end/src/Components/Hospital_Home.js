import React from "react";

import { Outlet } from "react-router-dom";

import HospitalDashboard from "./HospitalDashboard";

function Hospital_Home() {
  return (
    <>
      <HospitalDashboard />
      <Outlet />
      
    </>
  );
}

export default Hospital_Home;
