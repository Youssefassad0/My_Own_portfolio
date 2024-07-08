import React from "react";
import "./hero.css";
function Hero() {
  return (
    <section className="hero flex">
      <div className="left-section border">
        <div className="parent-avatar">
          <img src="assad.png" className="avatar" alt="" />
          <span className="" ></span>
        </div>
      </div>
      <div className="right-section animation border">animation</div>
    </section>
  );
}

export default Hero;
