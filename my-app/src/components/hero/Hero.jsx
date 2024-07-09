import React from "react";
import "./hero.css";
function Hero() {
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar">
          <img src="image_assad1.png" className="avatar" alt="" />
          <span className=""></span>
        </div>
        <h1 className="title">
          Full Stack developer , ambitious and passionate
        </h1>
        <p className="sub-title">
          Ambitious and passionate about digital development, my goal is to
          become a full stack option engineer. I seeks to put into practice the
          skills I have acquired and to continue learning to contribute
          significantly to innovative and complex projects.
        </p>
        <div className="all-icons flex">
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin-square"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-skype"></div>
        </div>
      </div>
      <div className="right-section border animation">
     animation
      </div>
    </section>
  );
}

export default Hero;
