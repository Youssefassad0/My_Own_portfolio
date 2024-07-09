import React, { useState, useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";
function Header() {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
    else{
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);
  const handleLight = () => {
    localStorage.setItem("mood", theme === "dark" ? "light" : "dark");
    setTheme(localStorage.getItem("mood"));
  };

  return (
    <header className="flex">
      <button
        onClick={() => setShowModal(true)}
        className="menu icon-menu flex"
      />
      <div />
      <nav>
        <ul className="flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          handleLight();
        }}
        className="mode flex"
      >
        <span className="icon-moon"></span>
      </button>
      {showModal && (
        <div className="flexed">
          <ul className="modal">
            <li>
              <button
                className="icon-circle-with-cross"
                onClick={() => setShowModal(false)}
                aria-label="Close Menu"
              />
            </li>
            <li>
              <Link to="/" onClick={() => setShowModal(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setShowModal(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={() => setShowModal(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setShowModal(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
