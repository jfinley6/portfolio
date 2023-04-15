import React from "react";
import { useEffect } from "react";
import "../stylesheets/contact.css";

function Contact() {
  useEffect(() => {
    document.title = "John Finley | Contact";
    window.scrollTo(0,0)
  }, []);

  return (
    <div id="contact-page">
      <div id="contact-info">
        <h3>Contact</h3>
        <h1>Looking for a new developer or just want to chat?</h1>
        <p style={{ color: "rgb(145, 148, 151)", fontSize: "xx-large" }}>
          Send me a message
        </p>
        <a href="j.finley92@gmail.com" id="mail-to">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            style={{ fontSize: "1.25em", marginRight: "0.5vw" }}
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path>
          </svg>
          j.finley92@gmail.com
        </a>
      </div>
      <form id="contact-form">
        <div className="contact-inputs">
          <div id="name-div">
            <label>
              NAME <span style={{color: "red"}}>*</span>
            </label>
            <input type="text" required name="from_name" id="name-input" value=""></input>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
