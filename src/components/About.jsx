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
        <p>
          A curious Full Stack Software Engineer who is passionate about
          learning and is constantly trying to further himself.
        </p>
      </div>
      <div id="about-content">
        <img id="about-picture" src="./about_photo.jpg" />
        <p className="about-paragraphs">
          Hi! I'm John, a Full Stack Software Engineer currently residing in
          Denver, CO. I recently graduated from Flatiron School's Live Software
          Engineering Program and am now looking for my first role in this
          exciting field.
        </p>
      </div>
    </div>
  );
}

export default About;
