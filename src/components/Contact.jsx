import { useState } from "react";
import "./contactstyles.css";

function Contact() {
  return (
    <div className="contactForm">
      <form >
        <h2>Get In Touch</h2>
        <div className="contactFormbox">
          <label htmlFor="Name">Name</label>
          <input typeof="Text" className="field" id="Text" placeholder="Text" />
          <br />
          <br />
        </div>

        <div className="field">
          <label htmlFor="Email">Email Address</label>
          <input
            name ="Email"
            typeof="Email"
            className="field"
            id="Email"
            placeholder="Email"
          />
          <br />
          <br />
        </div>

        <div className="contactFormbox">
          <label>
            Leave a Message:
            <textarea
              name="Message"
              className="field"
              defaultValue="Write your Message here!"
              rows={4}
              cols={40}
            />
          </label>
          </div>
          <br />
      
        <button>Send</button>
      </form>
    </div>
  );
}

export default Contact;
