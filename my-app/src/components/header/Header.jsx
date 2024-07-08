import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
function Header() {
  const [showModal,setShowModal]=useState(false);
  return (
    <header className="flex">
      <button onClick={()=>setShowModal(true)} className="menu icon-menu flex"/>
      <div />
      <nav>
        <ul className="flex">
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/">Articles</Link>
          </li>
          <li>
            <Link to="/">Projects</Link>
          </li>
          <li>
            <Link to="/about">Contact</Link>
          </li>
        </ul>
      </nav>

      <button className="mode flex" >
        <span className="icon-moon"></span>
      </button>
{
  showModal && ( <div className="flexed">
    <ul className="modal">
      <li  >
        <button className="icon-circle-with-cross" onClick={()=>setShowModal(false)} />
      
      </li>
      <li>
        <Link to="/about">about</Link>
      </li>
      <li>
        <Link to="/">Articles</Link>
      </li>
      <li>
        <Link to="/">Projects</Link>
      </li>
      <li>
        <Link to="/about">Contact</Link>
      </li>
    </ul>
  </div>)
}
     
    </header>
  );
}

export default Header;
