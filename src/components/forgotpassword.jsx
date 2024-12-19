import React, { useState } from "react";
import "../App.css";

const ForgotPassword = ({ onSwitch }) => {
  const [email, setEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <div className="form-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleReset}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="btn">Send Reset Link</button>
      </form>
      <p>
        Remember your password? <span onClick={onSwitch}>Log in</span>
      </p>
    </div>
  );
};

export default ForgotPassword;
