import React, { useEffect } from "react";

function Projects() {
  useEffect(() => {
    document.title = "John Finley | Projects";
  }, []);

  return <div>Projects</div>;
}

export default Projects;
