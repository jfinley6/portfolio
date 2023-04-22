import React, { useEffect } from "react";
import "../stylesheets/projects.css";

function Projects() {
  useEffect(() => {
    document.title = "John Finley | Projects";
  }, []);

  return (
    <div id="projects-page">
      <h3>Projects Coming Soon!</h3>
    </div>
  );
}

export default Projects;
