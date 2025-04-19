import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import resume from '../../assets/KellySunResume.pdf';

const Contact = () => {
  const [formData, setFormData] = useState({
    from: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false, message: '' });

    try {
      const response = await axios.post('/api/contact', formData);
      setStatus({
        submitting: false,
        success: true,
        error: false,
        message: 'Email sent successfully! I will get back to you soon.'
      });
      setFormData({ from: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Failed to send email. Please try again later.'
      });
    }
  };

  return (
    <div id="contact" className="contact-container">
      <h2>Contact Me</h2>
      <div className="resume-container">
        <a href={resume} download className="resume-download">
          Download Resume
        </a>
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="from">Your Email</label>
          <input
            type="email"
            id="from"
            name="from"
            value={formData.from}
            onChange={handleChange}
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
            value={formData.subject}
            onChange={handleChange}
            required
            disabled={status.submitting}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={status.submitting}
          />
        </div>
        {status.message && (
          <div className={`status-message ${status.success ? 'success' : 'error'}`}>
            {status.message}
          </div>
        )}
        <button 
          type="submit" 
          className="submit-btn"
          disabled={status.submitting}
        >
          {status.submitting ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default Contact; 