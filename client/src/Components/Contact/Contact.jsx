import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import './Contact.css';
import resume from '../../assets/KellySunResume.pdf';

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_o86bko7",
        "template_ly5w6ri",
        form.current,
        "HVi0luBegJidX7dMu"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message: " + error.text);
        }
      );
};

  return (
    <div id="contact" className="contact-container">
      <h2>Contact Me</h2>
      <div className="resume-container">
        <a href={resume} download className="resume-download">
          Download Resume
        </a>
      </div>
      <form ref={form} onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="from_name">Your Name</label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            required
            disabled={status.submitting}
          />
        </div>
        <div className="form-group">
          <label htmlFor="from_email">Your Email</label>
          <input
            type="email"
            id="from_email"
            name="from_email"
            required
            disabled={status.submitting}
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            disabled={status.submitting}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            disabled={status.submitting}
          ></textarea>
        </div>
        {status.message && (
          <div className={`status-message ${status.success ? "success" : "error"}`}>
            {status.message}
          </div>
        )}
        <button
          type="submit"
          className="submit-btn"
          disabled={status.submitting}
        >
          {status.submitting ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default Contact; 