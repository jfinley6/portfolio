import React from "react";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "John Finley | About";
  }, []);
  return <div>About</div>;
}

export default About;
