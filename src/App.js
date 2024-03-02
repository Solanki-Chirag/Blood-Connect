import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Hospital_SignIn from "./Components/Hospital_SignIn";
import Hospital_SignUp from "./Components/Hospital_SignUp";
import { useState } from "react";
import Footer from "./Components/Footer";
import Hospital_forgot_password from "./Components/Hospital_forgot_password";

function App() {
  const [login, setLogin] = useState("login");
  return (
    <>
      {/* <Navbar /> */}
      {login === "login" ? (
        <Hospital_SignIn setLogin={setLogin} />
      ) : login === "signup" ? (
        <Hospital_SignUp setLogin={setLogin} />
      ) : (
        <Hospital_forgot_password setLogin={setLogin} />
      )}

      <Footer />
    </>
  );
}

export default App;
