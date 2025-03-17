import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import logo from "/Cuebox-Logo.png";
import "../styles/signin.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { login } = useAuth(); // Get login function
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email }); // Call login function
    navigate("/"); // Redirect to Dashboard
  };

  return (

    <div className="auth-container">
      <img src={logo} alt="Logo" className="logo" />
      <h2>Sign In</h2>
      <p className="welcome-text">Welcome back! Please sign in to your account.</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <div className="remember-forgot">
          <label>
            <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
            Remember Me
          </label>
          <a href="/forgot-password">Forgot Password?</a>
        </div>

        <button className="submit-button" type="submit">Sign In</button>
      </form>

      <p className="or-sign-in">--or Sign in with--</p>
      <button className="google-signin">Google</button>

      <p className="register-text">
        Don't have an account? <a href="/register">Register Now</a>
      </p>
    </div>
  );
};

export default SignIn;