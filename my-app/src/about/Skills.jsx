import React from "react";
import { skills } from "../assets/Donne";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProgressProvider from "./ProgressProvider";

function Skills() {
  return (
    <>
      {skills.map(({ title, percentage }, i) => (
        <div className="progress__box" key={i}>
          <div className="progress__circle">
            <ProgressProvider valueStart={0} valueEnd={percentage} interval={5000}>
              {value => (
                <CircularProgressbar
                  strokeWidth={5}
                  text={`${value}%`}
                  value={value}
                  styles={buildStyles({
                    pathTransitionDuration: 3,
                    pathColor: "var(--blue)",
                    textColor: "var(--title)",
                    trailColor: "#d6d6d6",
                    backgroundColor: "#f4f4f4",
                  })}
                />
              )}
            </ProgressProvider>
          </div>
          <h3 className="skills__title">{title}</h3>
        </div>
      ))}
    </>
  );
}

export default Skills;
