import React from "react";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    document.title = "John Finley | Contact";
  }, []);

  return <div>Contact</div>;
}

export default Contact;
