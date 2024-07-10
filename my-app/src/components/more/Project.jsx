import React from "react";
import "./project.css";
import { useParams } from "react-router-dom";
function Project() {
  const { id } = useParams();
  return(
    <>
    <h3>{id}</h3>
    </>
  );
}

export default Project;
