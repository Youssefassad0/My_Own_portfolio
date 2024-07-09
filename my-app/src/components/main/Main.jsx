import React, { useState } from "react";
import "./main.css";
import { Link } from "react-router-dom";
import Projects from "../../projects.json";

function Main() {
  const [currentActive,setCurrentActive]=useState("all");
  return (
    <main className="flex">
      <section className="flex left-section">
        <button className="active">All Projects</button>
        <button>PHP</button>
        <button>JS</button>
        <button>React</button>
        <button>REACT+LARAVEL</button>
      </section>

      <section className="flex right-section">
        {Projects.map((p) => (
          <article className="card" key={p.id}>
            <img width={266} src={p.imageUrl} alt={p.title} />
            <div style={{ width: "266px" }} className="box">
              <h2 className="title">{p.title}</h2>
              <p className="sub-title">{p.description}</p>
              <div className="flex icons">
                <div className="flex" style={{ gap: "11px" }}>
                  <div className="icon-unlink" />
                  <a href={p.linkGithub} target="_blank" rel="noopener noreferrer">
                    <div className="icon-github" />
                  </a>
                </div>
                <Link to="" className="link flex">
                  more <span className="icon-redo2"></span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Main;
