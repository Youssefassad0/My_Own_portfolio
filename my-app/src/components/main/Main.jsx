import React, { useState } from "react";
import "./main.css";
import { Link } from "react-router-dom";
import Projects from "../../projects.json";

function Main() {
  const [currentActive, setCurrentActive] = useState("all");

  const handleButtonClick = (category) => {
    setCurrentActive(category);
  };

  const filteredProjects = currentActive === "all"
    ? Projects
    : Projects.filter((p) => p.category === currentActive);

  return (
    <main className="flex">
      <section className="flex left-section">
        <button
          className={currentActive === "all" ? "active" : ""}
          onClick={() => handleButtonClick("all")}
        >
          All Projects
        </button>
        <button
          className={currentActive === "PHP" ? "active" : ""}
          onClick={() => handleButtonClick("PHP")}
        >
          PHP
        </button>
        <button
          className={currentActive === "JS" ? "active" : ""}
          onClick={() => handleButtonClick("JS")}
        >
          JS
        </button>
        <button
          className={currentActive === "React" ? "active" : ""}
          onClick={() => handleButtonClick("React")}
        >
          React
        </button>
        <button
          className={currentActive === "REACT+LARAVEL" ? "active" : ""}
          onClick={() => handleButtonClick("REACT_LARAVEL")}
        >
          REACT+LARAVEL
        </button>
      </section>

      <section className="flex right-section">
        {filteredProjects.map((p) => (
          <article className="card" key={p.id}>
            <img width={266} src={p.imageUrl[0]} alt={p.title} />
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
