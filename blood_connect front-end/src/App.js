import React, { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import SendRequest from "./Components/SendRequest";
import Hospital_Home from "./Components/Hospital_Home";
import Doner_Home from "./Components/Doner_home";
import LoadRequest from "./Components/LoadRequest";

function App() {
  const [user, setUser] = useState("");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="Doner_dashboard" element={<Doner_Home/>}>
          <Route path="LoadRequest" element={<LoadRequest/>}></Route>
          </Route>
          <Route path="HospitalDashboard" element={<Hospital_Home />}>
            <Route path="sendRequest" element={<SendRequest />}></Route>
          </Route>
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
            <Route
              path="Hospital_forgot_password"
              element={<Hospital_forgot_password />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
