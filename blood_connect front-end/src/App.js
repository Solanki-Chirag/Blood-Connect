import React, { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./Components/About";
import Contact from "./Components/Contact";
import Blogs from "./Components/Blogs";
import Home from "./Components/Home";
import DonorSignIn from "./Components/DonerSignIn";
import Hospital_SignIn from "./Components/Hospital_SignIn";
import OrganizeCamp from "./Components/OrganizeCamp";
import ChooseUserType from "./Components/ChooseUserType";

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
            <Route path="HospitalSignIn" element={<Hospital_SignIn />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
