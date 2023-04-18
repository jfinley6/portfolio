import React from "react";
import { useEffect } from "react";
import "../stylesheets/about.css";

function About() {
  useEffect(() => {
    document.title = "John Finley | About";
  }, []);
  return (
    <div id="about-page">
      <div id="about-intro">
        <p>Who is John Finley?</p>
        <p>A curious Full Stack Software Engineer who is passionate about learning and is constantly trying to further himself.</p>
      </div>
    </div>
  );
}

export default About;
