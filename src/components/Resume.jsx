import React from "react";
import "../stylesheets/resume.css";

function Resume() {
  return (
    <div id="resume-page">
      <iframe
        src="./JohnFinleyResume.pdf#toolbar=0&navpanes=0"
        height="100%"
        width="100%"
      />
    </div>
  );
}

export default Resume;
