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
          <motion.svg
            width="160"
            height="160"
            viewBox="0 0 160 160"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="circle-svg"
          >
            <circle
              cx="80"
              cy="80"
              r="78"
              stroke="darkorange"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="20 10 10 0"
              fill="none"
            />
          </motion.svg>
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{ duration: 2, type: "spring", stiffness: 300 }}
            src="image_assad1.png"
            className="avatar"
            alt="Avatar"
          />
        </div>
        <h1 className="title led-effect">
          Full Stack developer, ambitious and passionate
        </h1>

        <p className="sub-title">
          I'm Assad Youssef. Ambitious and passionate about digital development,
          my goal is to become a full stack option engineer. I seek to put into
          practice the skills I have acquired and to continue learning to
          contribute significantly to innovative and complex projects.
        </p>
        <div className="all-icons flex">
          <a
            href="https://github.com/Youssefassad0"
            target="_blank"
            className="icon icon-github"
            style={{ color: "var(--subtitle)" }}
          ></a>
          <a
            href="https://www.linkedin.com/in/youssef-assad-a8204b289/"
            target="_blank"
            className="icon icon-linkedin-square"
            style={{ color: "var(--subtitle)" }}
          ></a>
          <a
            href="https://www.instagram.com/assad_youssef_/"
            target="_blank"
            className="icon icon-instagram"
            style={{ color: "var(--subtitle)" }}
          ></a>
          <a
            href="https://join.skype.com/invite/Hr5r80a8HrRR"
            className="icon icon-skype"
            style={{ color: "var(--subtitle)" }}
            target="_blank"
          ></a>
        </div>
      </div>
      <div className="right-section animation">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onDOMLoaded={() => {
            lottieRef.current.setSpeed(0.5);
          }}
          height={200}
          animationData={dev}
        />
      </div>
    </section>
  );
}

export default Hero;
