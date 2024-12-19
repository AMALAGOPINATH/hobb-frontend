import React, { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import "./App.css";

const App = () => {
  const [currentForm, setCurrentForm] = useState("login");

  const switchToLogin = () => setCurrentForm("login");
  const switchToSignup = () => setCurrentForm("signup");
  const switchToForgotPassword = () => setCurrentForm("forgotPassword");

  return (
    <div className="app-container">
      <h1>HOBB Login & Signup</h1>
      {currentForm === "login" && (
        <Login
          onSwitch={switchToSignup}
          onForgotPassword={switchToForgotPassword}
        />
      )}
      {currentForm === "signup" && <Signup onSwitch={switchToLogin} />}
      {currentForm === "forgotPassword" && (
        <ForgotPassword onSwitch={switchToLogin} />
      )}
    </div>
  );
};

export default App;