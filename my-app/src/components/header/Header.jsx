import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="flex" >
      <div />
      <nav>
        <ul className="flex">
          <li><Link to="/about">about</Link></li>
          <li><Link to="/">Articles</Link></li>
          <li><Link to="/">Projects</Link></li>
          <li><Link to="/about">Contact</Link></li>
        </ul>
      </nav>
      <button >Light</button>
    </header>
  );
}

export default Header;
