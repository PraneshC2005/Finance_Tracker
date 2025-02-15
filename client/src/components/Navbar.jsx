import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaChartBar, FaCalendarAlt, FaUser } from "react-icons/fa"; // Importing icons
import "./Navbar.css";
import logo from "../assets/OIP.jpg"; // Add your logo

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left side - App logo */}
      <div className="navbar-logo">
        <img src={logo} alt="App Logo" />
      </div>

      {/* Center - Navigation Links */}
      <ul className="navbar-links">
        <li><Link to="/home"><FaHome /> Home</Link></li>
        <li><Link to="/report"><FaChartBar /> Report</Link></li>
        <li><Link to="/schedule"><FaCalendarAlt /> Schedule</Link></li>
      </ul>

      {/* Right Side - Login Button */}
      <div className="navbar-login">
        <Link to="/"><FaUser /> Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
