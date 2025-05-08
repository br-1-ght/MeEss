import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Adeleye Suliat Tolulope</h1>
      <div className="nav-buttons">
        <a href="https://wa.me/+2348135573634" className="resume-btn">ORDER NOW</a>
        <button className="menu-btn">
          <span className="menu-icon">≡</span>
        </button>
      </div>
    </nav>
  );
}