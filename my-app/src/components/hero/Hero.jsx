import React from "react";
import "./hero.css";
function Hero() {
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar">
          <img src="image_assad1.png" className="avatar" alt="" />
          <span className="" ></span>
        </div>
      </div>
      <div className="right-section animation border">animation</div>
    </section>
  );
}

export default Hero;
