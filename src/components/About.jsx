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
        <div id="about-paragraph-section">
          <p className="about-paragraphs">
            Hi! I'm John, a Full Stack Software Engineer currently residing in
            Denver, CO. I recently graduated from Flatiron School's Live
            Software Engineering Program and am now looking for my first role in
            this exciting field.
          </p>
          <p className="about-paragraphs">
            I've never been one to fit in a conventional box. My previous
            experience as a Field Service Technician for Panther Industries
            involved traveling full-time around the country installing print and
            apply machines. I spent a lot of time turning wrenches, tinkering
            with code and improving my problem solving skills. After injuring
            myself and being on leave from work for several weeks, I discovered
            an unknown love for the puzzle-like aspect of programming and the
            rest is history. I look forward to the infinite opportunities to
            improve upon technical and interpersonal skills as a Software
            Engineer.
          </p>
          <p className="about-paragraphs">
            If I labelled myself something other than a Developer, I have a love
            of the outdoors. In the winter I enjoy skiing and when it's warm out
            I love to play disc golf. Recently I've gotten into running and am
            currently training for a half marathon.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
