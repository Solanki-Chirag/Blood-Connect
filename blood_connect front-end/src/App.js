import React from "react";
import "./App.css";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import About from "./Components/About";
import Contact from "./Components/Contact";
import Blogs from "./Components/Blogs";
import Home from "./Components/Home";
import DonerSignIn from "./Components/DonerSignIn";
import OrganizeCamp from "./Components/OrganizeCamp";
import Doner_SignUp from "./Components/Doner_SignUp";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />}>
          <Route path="About" element={<About />}></Route>
          <Route path="Contact" element={<Contact />}></Route>
          <Route path="OrganizeCamp" element={<OrganizeCamp />}></Route>
          <Route path="Blogs" element={<Blogs />}></Route>
          <Route path="SignIn" element={<DonerSignIn />}></Route>
          <Route path="Doner_SignUp" element={<Doner_SignUp/>}></Route>
        </Route>
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
