import React, { useState } from "react";
import "../App.css";

const Signup = ({ onSwitch }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    alert(`Signed up with Name: ${name}, Email: ${email}`);
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <button type="submit" className="btn">Sign Up</button>
      </form>
      <p>
        Already have an account? <span onClick={onSwitch}>Log in</span>
      </p>
    </div>
  );
};

export default Signup;
