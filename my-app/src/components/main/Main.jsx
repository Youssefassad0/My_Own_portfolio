import React, { useState } from "react";
import "./main.css";
import { Link } from "react-router-dom";
import Projects from "../../projects.json";
import { AnimatePresence, motion } from "framer-motion";

function Main() {
  const [currentActive, setCurrentActive] = useState("all");

  const handleButtonClick = (category) => {
    setCurrentActive(category);
  };

  const filteredProjects =
    currentActive === "all"
      ? Projects
      : Projects.filter((p) => p.category === currentActive);

  return (
    <main className="flex" id="#projects" >
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
        <AnimatePresence>
          {filteredProjects.map((p) => (
            <motion.article
            layout
              initial={{transform:"scale(0)"}}
              animate={{transform:"scale(1)"}}
              transition={{type:"spring",stiffness:50,damping:8}}
              className="card"
              key={p.id}
            >
              <img width={266} src={p.imageUrl[0]} alt={p.title} height={150} />
              <div style={{ width: "266px" }} className="box">
                <h2 className="title">{p.title}</h2>
                <p className="sub-title">{p.description}</p>
                <div className="flex icons">
                  <div className="flex" style={{ gap: "11px" }}>
                    <div className="icon-unlink" />
                    <a
                      href={p.linkGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="icon-github" />
                    </a>
                  </div>
                  <Link to={`/project/${p.id}`} className="link flex">
                    more <span className="icon-redo2"></span>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </section>
    </main>
  );
}

export default Main;
