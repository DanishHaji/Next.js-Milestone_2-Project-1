"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <div>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="about-section"
      >
        <div className="about-content">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="profile-img"
          >
            <Image
              src="/about.png"
              alt="About Image"
              width={500}
              height={500}
              className="about-profile-img"
            />
          </motion.div>

          <div className="about-text">
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="about-heading"
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="about-description"
            >
              I&apos;m Danish Haji, a dedicated web developer with a passion for creating dynamic, visually appealing, 
              and user-friendly websites. With a keen eye for design and a solid understanding of modern web technologies,
              I enjoy transforming creative ideas into seamless digital experiences. 
            </motion.p>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="about-description"
            >
              &quot; My goal is to continuously grow my skills and bring meaningful projects to life that provide value to users. 
              Let&apos;s build something great together! &quot;
            </motion.p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
