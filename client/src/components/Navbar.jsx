import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li><Link to="/home" style={styles.link}>Home</Link></li>
        <li><Link to="/report" style={styles.link}>Report</Link></li>
        <li><Link to="/schedule" style={styles.link}>Schedule</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "center",
    background: "#333",
    padding: "10px 0",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
  },
};

export default Navbar;
