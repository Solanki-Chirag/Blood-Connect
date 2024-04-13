import React, { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Doner_dashboard from "./Components/Doner_dashboard";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Blogs from "./Components/Blogs";
import Home from "./Components/Home";
import DonorSignIn from "./Components/DonorSignIn";
import DonorSignUp from "./Components/DonorSignUp";
import Hospital_SignIn from "./Components/Hospital_SignIn";
import Hospital_SignUp from "./Components/Hospital_SignUp";

import Hospital_forgot_password from "./Components/Hospital_forgot_password";
import OrganizeCamp from "./Components/OrganizeCamp";
import ChooseUserType from "./Components/ChooseUserType";
import HospitalDashboard from "./Components/HospitalDashboard";

function App() {
  const [user, setUser] = useState("");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="About" element={<About />}></Route>
            <Route path="Contact" element={<Contact />}></Route>
            <Route path="OrganizeCamp" element={<OrganizeCamp />}></Route>
            <Route path="Blogs" element={<Blogs />}></Route>
            <Route
              path="SignIn"
              element={<ChooseUserType user={user} setUser={setUser} />}
            ></Route>
            <Route path="DonorSignIn" element={<DonorSignIn />}></Route>
            <Route path="DonorSignUp" element={<DonorSignUp />}></Route>
            <Route path="Hospital_SignIn" element={<Hospital_SignIn />}></Route>
            <Route path="Hospital_SignUp" element={<Hospital_SignUp />}></Route>
            <Route path="Hospital_forgot_password" element={<Hospital_forgot_password />}></Route>
            
            <Route
              path="Hospital_forgot_password"
              element={<Hospital_forgot_password />}
            ></Route>
            <Route path="donerDashboard" element={<Doner_dashboard />}></Route>
          </Route>
          <Route path="hospitalDashboard" element={<hospitalDashboard />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <HospitalDashboard/> */}
    </>
  );
}

export default App;
