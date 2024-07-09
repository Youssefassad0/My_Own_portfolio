import React from "react";
import "./main.css";
import { Link } from "react-router-dom";
function Main() {
  return (
    <main className="flex">
      <section className="flex left-section">
        <button className="active" >All Projects</button>
        <button>PHP</button>
        <button>JS</button>
        <button>REACT+LARAVEL</button>
      </section>

      <section className="right-section">
        <article className="card">
          <img width={266} src="./projects-image/home1.png" alt="" />
          <div style={{width:"266px"}} className="box">
            <h2 className="title">Title</h2>
            <p className="sub-title" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, repellendus perspiciatis? Consectetur minus ullam </p>
            <div className="flex icons">
            <div className="flex"   style={{gap:"11px"}}  >
            <div className="icon-unlink" />
            <div className="icon-github" />
            </div>
              <Link to="" className="link flex" >more <span className="icon-redo2" ></span></Link>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Main;
