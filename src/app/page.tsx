"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hero-section"
      >
        <div className="hero-content">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="profile-img"
          >
            <Image
              src="/profile1.png"
              alt="Profile Image"
              width={400}
              height={400}
              className="rounded-circle"
            />
          </motion.div>
          <div className="text-content">
            <motion.h1
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="name"
            >
              Hi, <br /> Myself, Danish Haji
            </motion.h1>
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="description"
            >
              &quot;I am a passionate web developer dedicated to crafting visually engaging and highly functional websites.
              With a strong foundation in modern web technologies, I strive to build seamless, user-centered digital experiences
              that leave a lasting impression. My focus is on clean code, responsive design, and bringing creative visions to life.&quot;
            </motion.p>
            {/* Icons and Button Section */}
            <div className="hero-links">
              <a href="https://www.linkedin.com/in/danish-b5b26b190/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
              </a>
              <a href="https://github.com/DanishHaji" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} className="social-icon" />
              </a>
              <a href="mailto:danish.haji111@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Hire Me">
                <div className="hire-me-button">
                  <FontAwesomeIcon icon={faEnvelope} className="email-icon" /> Hire Me
                </div>
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
