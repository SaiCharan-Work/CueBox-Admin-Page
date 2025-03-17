import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MyLogo</div>
      <div className="nav-links">
        <Link to="/"><i className="fas fa-home"></i> Home</Link>
        <Link to="/dashboard"><i className="fas fa-tachometer-alt"></i> Dashboard</Link>
        <Link to="/orders"><i className="fas fa-box"></i> Orders</Link>
        <Link to="/invoices"><i className="fas fa-file-invoice"></i> Invoices</Link>
        <Link to="/requests"><i className="fas fa-tasks"></i> Requests</Link>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="profile">
        <i className="fas fa-bell"></i>
        <span>John Doe</span>
        <img src="/vite.svg" alt="Profile" />
      </div>
    </nav>
  );
};

export default Navbar;

