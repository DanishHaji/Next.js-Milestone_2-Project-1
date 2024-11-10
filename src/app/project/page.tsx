"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Projects = () => {
  return (
    <div>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='projectsSection'
      >
        <h2 className='projectsTitle'>My Projects</h2>
        <div className='projectsContainer'>
          {/* Project Item 1 */}
          <div className='projectItem'>
            <div className='projectImageWrapper'>
              <Image
                src="/project1.png"
                alt="Project 1"
                width={300}
                height={200}
                layout="responsive"
                className='projectImage'
              />
              <div className='projectOverlay'>
                <h3 className='projectTitle'>
                <a href="https://milestone12-nine.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Visit Static Resume Project">
                    Static Resume
                  </a>
                </h3>
                <p className='projectDescription'>A well-designed, static resume template created using HTML, CSS, and TypeScript for a clean, professional look.</p>
              <div className="project-languages">
                <span className="language-html">HTML</span>
                <span className="language-css">CSS</span>
                <span className="language-typescript">TypeScript</span>
                <span className="language-javascript">JavaScript</span>
              </div>
              </div>
            </div>
          </div>

          {/* Project Item 2 */}
          <div className='projectItem'>
            <div className='projectImageWrapper'>
              <Image
                src="/project2.png"
                alt="Project 2"
                width={300}
                height={200}
                layout="responsive"
                className='projectImage'
              />
              <div className='projectOverlay'>
                <h3 className='projectTitle'>
                <a href="https://birthday-wish-two-theta.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Visit Birthday Wish Card Project">
                Birthday Wish Card
                  </a></h3>
                <p className='projectDescription'>An interactive birthday card application built with React, offering a personalized greeting experience.</p>
              <div className="project-languages">
                <span className="language-next">Next.js</span>
                <span className="language-html">HTML</span>
                <span className="language-css">CSS</span>
                <span className="language-typescript">TypeScript</span>
                <span className="language-javascript">JavaScript</span>
              </div>
              </div>
            </div>
          </div>

          {/* Project Item 3 */}
          <div className='projectItem'>
            <div className='projectImageWrapper'>
              <Image
                src="/project3.png"
                alt="Project 3"
                width={300}
                height={200}
                layout="responsive"
                className='projectImage'
              />
              <div className='projectOverlay'>
                <h3 className='projectTitle'>
                <a href="https://todo-app-sand-seven-47.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Visit Todo App">
                Todo App
                  </a></h3>
                <p className='projectDescription'>A functional to-do list app made with Next.js, allowing users to manage tasks with ease and efficiency.</p>
                <div className="project-languages">
                <span className="language-react">React</span>
                <span className="language-css">CSS</span>
                <span className="language-typescript">TypeScript</span>
                <span className="language-javascript">JavaScript</span>
              </div>
              </div>
            </div>
          </div>

          {/* Project Item 4 */}
          <div className='projectItem'>
            <div className='projectImageWrapper'>
              <Image
                src="/project4.png"
                alt="Project 4"
                width={300}
                height={200}
                layout="responsive"
                className='projectImage'
              />
              <div className='projectOverlay'>
                <h3 className='projectTitle'>
                <a href="https://milestone5-two-zeta.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Visit Resume Builder Project">
                Resume Builder
                  </a></h3>
                <p className='projectDescription'>A dynamic resume builder app that enables users to create and style resumes interactively.</p>
                <div className="project-languages">
                <span className="language-html">HTML</span>
                <span className="language-css">CSS</span>
                <span className="language-typescript">TypeScript</span>
                <span className="language-javascript">JavaScript</span>
              </div>
              </div>
            </div>
          </div>

          {/* Project Item 5 */}
          <div className='projectItem'>
            <div className='projectImageWrapper'>
              <Image
                src="/project5.png"
                alt="Project 5"
                width={300}
                height={200}
                layout="responsive"
                className='projectImage'
              />
              <div className='projectOverlay'>
                <h3 className='projectTitle'>
                <a href="https://weather-widget-taupe.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Visit Weather Widget Project">
                Weather Widget
                  </a></h3>
                <p className='projectDescription'>A real-time weather widget built with Next.js, offering accurate and up-to-date weather information.</p>
                <div className="project-languages">
                <span className="language-next">Next.js</span>
                <span className="language-html">HTML</span>
                <span className="language-css">CSS</span>
                <span className="language-typescript">TypeScript</span>
                <span className="language-javascript">JavaScript</span>
              </div>
              </div>
            </div>
          </div>

          {/* Project Item 6 */}
          <div className='projectItem'>
            <div className='projectImageWrapper'>
              <Image
                src="/project6.png"
                alt="Project 6"
                width={300}
                height={200}
                layout="responsive"
                className='projectImage'
              />
              <div className='projectOverlay'>
                <h3 className='projectTitle'>
                <a href="https://countdown-timer-jet-ten.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Visit Countdown Timer Project">
                Countdown Timer
                  </a></h3>
                <p className='projectDescription'>A customizable countdown timer built with Next.js, perfect for tracking time to events or deadlines.</p>
                <div className="project-languages">
                <span className="language-next">Next.js</span>
                <span className="language-html">HTML</span>
                <span className="language-css">CSS</span>
                <span className="language-typescript">TypeScript</span>
                <span className="language-javascript">JavaScript</span>
              </div>
              </div>
            </div>
          </div>

        </div>
      </motion.section>
    </div>
  );
};

export default Projects;
