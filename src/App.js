import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Hospital_SignIn from "./Components/Hospital_SignIn";
import Hospital_SignUp from "./Components/Hospital_SignUp";
import { useState } from "react";
import Footer from "./Components/Footer";

function App() {
  const [login, setLogin] = useState("login");
  return (
    <>
      {/* <Navbar /> */}
      <Hospital_SignIn />
      <Hospital_SignUp />
      <Footer />
    </>
  );
}

export default App;
