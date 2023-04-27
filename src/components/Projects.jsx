import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/projects.css";
import { projectData, getGithubData } from "../projectData";
import Typewriter from "typewriter-effect";

function Projects() {
  useEffect(() => {
    document.title = "John Finley | Projects";
  }, []);

  const projectTiles = projectData.map((project) => {
    const [lastCommit, setLastCommit] = useState("");
    getGithubData(project.repository).then((data) => {
      setLastCommit(data[0].commit.committer.date);
    });

    return (
      <div className="projectCard" key={project.name}>
        <div className="projectImageContainer">
          <img className="projectImage" src={project.image} />
          <div className="projectLinks">
            <span>
              <Link to={project.source} target="_blank">
                Github
              </Link>
            </span>
            {project.demo.length > 0 ? (
              <span>
                <Link to={project.demo} target="_blank">
                  Demo
                </Link>
              </span>
            ) : null}
          </div>
        </div>
        <div className="projectInfo">
          <Typewriter
            style={{ color: "var(--green)" }}
            onInit={(typewriter) => {
              typewriter.typeString(project.name).start();
            }}
          />
          <span style={{ textAlign: "left" }}>{project.description}</span>
          <span>Last Commit: {lastCommit.substring(0, 10)}</span>
        </div>
      </div>
    );
  });

  return (
    <div id="projects-page">
      {/* <h3>Project Page Coming Really Soon!</h3>
      <h4>
        My current projects can be found on my{" "}
        <NavLink style={{color: "var(--green)"}} to="/resume">Resume</NavLink>,{" "} 
        <Link style={{color: "var(--green)"}} to="https://linkedin.com/in/john-tyler-finley">Linkedin</Link>, or{" "}
        <Link style={{color: "var(--green)"}} to="https://github.com/jfinley6">Github</Link>
      </h4> */}
      {projectTiles}
    </div>
  );
}

export default Projects;
