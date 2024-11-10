"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiFramer } from "react-icons/si";
import { 
  FaHandsHelping, 
  FaLightbulb, 
  FaComments, 
  FaUserFriends, 
  FaTasks 
} from "react-icons/fa";

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="skillsSection"
    >
      <h2 className="skillsTitle">My Skills</h2>
      
      <div className="skillsContainer">
        
        {/* Technical Skills */}
        <div className="skillsCategory">
          <h3 className="categoryTitle">Technical Skills</h3>
          <div className="skillsList">
            <motion.div whileHover={{ scale: 1.1 }} className="skillItem">
              <FaHtml5 size={50} color="#E34F26" />
              <span>HTML</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="skillItem">
              <FaCss3Alt size={50} color="#1572B6" />
              <span>CSS</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="skillItem">
              <FaJsSquare size={50} color="#F7DF1E" />
              <span>JavaScript</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="skillItem">
              <SiTypescript size={50} color="#007ACC" />
              <span>TypeScript</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="skillItem">
              <SiNextdotjs size={50} color="#000000" />
              <span>Next.js</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="skillItem">
              <FaReact size={50} color="#61DAFB" />
              <span>React</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="skillItem">
              <FaNodeJs size={50} color="#339933" />
              <span>Node.js</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="skillItem">
              <SiFramer size={50} color="#FF0054" />
              <span>Framer Motion</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="skillItem">
              <FaGitAlt size={50} color="#F05032" />
              <span>Git</span>
            </motion.div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="skillsCategory">
          <h3 className="categoryTitle">Soft Skills</h3>
          <div className="skillsList">
            <motion.div whileHover={{ scale: 1.1 }} className="skillItem">
              <FaComments size={50} color="#6D4C41" />
              <span>Communication</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="skillItem">
              <FaUserFriends size={50} color="#4CAF50" />
              <span>Teamwork</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="skillItem">
              <FaLightbulb size={50} color="#FFEB3B" />
              <span>Problem Solving</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="skillItem">
              <FaHandsHelping size={50} color="#FF5722" />
              <span>Adaptability</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="skillItem">
              <FaTasks size={50} color="#607D8B" />
              <span>Time Management</span>
            </motion.div>
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default Skills;
