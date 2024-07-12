import React from "react";
import "./about.css";
import Info from "../assets/Info";
import Stats from "../assets/stats";
import CV from "../assets/Assad_youssef_cv.pdf";
import { Button } from "@mui/material";
import Skills from "./Skills";

function About() {
  return (
    <section className="aboutme">
      <div className="about2">
        <h2 className="about_title">
          About <span>Me</span>
        </h2>

        <div className="about__container">
          <div className="about__info">
            <h3 className="section__subtitle">Personal Infos</h3>
            <ul className="info__list">
              <Info />
            </ul>
            <Button variant="contained" color="secondary" href={CV} download>
              Download CV
              <i className="icon-download"></i>
            </Button>
          </div>
          <div className="stats">
            <Stats />
          </div>
        </div>
      </div>
      <div className="devider"></div>
      <div className="skills">
        <h3 className="skills__title">My Skills</h3>
        <div className="skills_container">
          {" "}
          {/* Grid */}
          <Skills />
        </div>
      </div>
    </section>
  );
}

export default About;
