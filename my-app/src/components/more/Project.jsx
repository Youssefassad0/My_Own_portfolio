import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Projects from "../../projects.json";
import { useSpring, animated } from "react-spring";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import "./project.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = Projects.find((p) => p.id === parseInt(id));
  const [currentImage, setCurrentImage] = useState(
    project ? project.imageUrl[0] : ""
  );

  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <animated.div style={fadeIn} className="project-detail">
      <div className="project-card" style={{backgroundColor:"var(--secondary)"}} >
        <CardContent>
          <h2 className="title" >
            {project.title}
          </h2>
          {currentImage && (
            <CardMedia
              component="img"
              className="main-image"
              image={currentImage}
              alt={project.title}
            />
          )}
          <Typography variant="body1" paragraph>
            {project.description}
          </Typography>
          <div className="additional-images">
            <div className="sliderSmall">
              {project.imageUrl[1] &&
                project.imageUrl.map((image, index) => (
                  <div
                    className="item"
                    key={index}
                    onClick={() => setCurrentImage(image)}
                  >
                    <img
                      src={image}
                      alt={`Additional ${index}`}
                      className="slider-image w-100 cursor-pointer"
                    />
                  </div>
                ))}
            </div>
          </div>
          {project.linkGithub && (
            <Button
              variant="contained"
              color="primary"
              href={project.linkGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="github-button"
            >
              View on GitHub
            </Button>
          )}
          {project.linkRapport && (
            <iframe
              src={project.linkRapport}
              width="100%"
              height="600px"
              title="Project Report"
            ></iframe>
          )}
        </CardContent>
      </div>
    </animated.div>
  );
};

export default ProjectDetail;
