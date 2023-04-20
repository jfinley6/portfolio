import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../stylesheets/home.css";

export default function Home() {
  useEffect(() => {
    document.title = "John Finley | Developer";
  }, []);

  return (
    <div id="home-page">
      <div id="home-column">
        <img id="home-image" src="./me.jpeg" />
        <div id="details-container">
          <h3>
            Hi there! I'm <span id="home-name">John</span> Finley
          </h3>
          <h4>
            A <span id="home-title">Full-Stack Software Engineer</span>{" "}
            passionate about creating unique software solutions
          </h4>
          <div id="resume-button-container">
            <NavLink to="/resume" id="navLink">
              <button id="resume-button">
                Resume{" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 20 20"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
