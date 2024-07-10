import React, { useRef } from "react";
import "./hero.css";
import Lottie from "lottie-react";
import dev from "../../animations/dev2.json";
import { motion } from "framer-motion";
function Hero() {
  const lottieRef = useRef();
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar">
          <motion.img
            initial={{ transform: "scale:0" }}
            animate={{ transform: "scale:1" }}
            transition={{ duration: 2, type: "spring", stiffness: 300 }}
            src="image_assad1.png"
            className="avatar"
            alt=""
          />
          <span className=""></span>
        </div>
        <h1 className="title led-effect">
          Full Stack developer, ambitious and passionate
        </h1>

        <p className="sub-title">
          I'm Assad Youssef Ambitious and passionate about digital development,
          my goal is to become a full stack option engineer. I seeks to put into
          practice the skills I have acquired and to continue learning to
          contribute significantly to innovative and complex projects.
        </p>
        <div className="all-icons flex">
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin-square"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-skype"></div>
        </div>
      </div>
      <div className="right-section animation">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            lottieRef.current.setSpeed(0.3);
          }}
          height={200}
          animationData={dev}
        />
      </div>
    </section>
  );
}

export default Hero;
