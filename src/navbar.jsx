import React, { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="Nav">
      <a href="/" className="home">
        <h1>Aarav Bedi.</h1>
      </a>
      <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`Nav-links ${menuOpen ? "show" : ""}`}>
        <li><a href="/#aboutme">About me</a></li>
        <li>
          <a href="/res.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/aaravbedi/">LinkedIn</a>
        </li>
      </ul>
    </nav>
  );
}
