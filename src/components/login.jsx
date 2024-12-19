import React, { useState } from "react";
import "../App.css";

const Login = ({ onSwitch, onForgotPassword }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logged in with Email: ${email}`);
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn">Login</button>
      </form>
      <p>
        <span onClick={onForgotPassword} style={{ color: "red", cursor: "pointer" }}>
          Forgot Password?
        </span>
      </p>
      <p>
        Don't have an account? <span onClick={onSwitch}>Sign up</span>
      </p>
    </div>
  );
};

export default Login;

