import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "../stylesheets/projects.css";

function Projects() {
  useEffect(() => {
    document.title = "John Finley | Projects";
  }, []);

  return (
    <div id="projects-page">
      <h3>Project Page Coming Really Soon!</h3>
      <h4>
        My current projects can be found on my{" "}
        <NavLink style={{color: "var(--green)"}} to="/resume">Resume</NavLink>,{" "} 
        <Link style={{color: "var(--green)"}} to="https://linkedin.com/in/john-tyler-finley">Linkedin</Link>, or{" "}
        <Link style={{color: "var(--green)"}} to="https://github.com/jfinley6">Github</Link>
      </h4>
    </div>
  );
}

export default Projects;
