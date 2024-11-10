"use client";

import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa"; // Import icons

const Contact = () => {
  return (
    <div>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="contact-section"
      >
        <h2 className="contact-title">Contact</h2>
        
        {/* Contact Information */}
        <div className="contact-info">
          <div className="contact-info-item">
            <FaPhone size={30} color="#0077b5" />
            <span>+923172745680</span>
          </div>
          <div className="contact-info-item">
            <FaEnvelope size={30} color="#D44638" />
            <span>danish.haji@gmail.com</span>
          </div>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/danish-b5b26b190/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <FaLinkedin size={40} color="#0077b5" />
            </a>
            <a href="https://github.com/DanishHaji" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <FaGithub size={40} color="#333" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile">
              <FaFacebook size={40} color="#4267B2" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required className="contact-input" />
          <input type="email" placeholder="Your Email" required className="contact-input" />
          <textarea placeholder="Your Message" required className="contact-textarea" />
          <button type="submit" className="contact-button">Submit</button>
        </form>
      </motion.section>
    </div>
  );
};

export default Contact;
