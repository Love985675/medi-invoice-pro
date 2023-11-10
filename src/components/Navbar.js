import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Medi Invoice Pro</h1>
      </div>
      <ul className="nav-links">
        {/* <li>
          <a href="./src/App.js">Home</a>
        </li> */}
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
