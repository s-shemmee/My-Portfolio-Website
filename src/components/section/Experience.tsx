'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import useInView from '@/hooks/useInView';
import { Experiences, Technology } from '@/types/types';

const experiences: Experiences[] = [
  { role: 'Front-end Freelancer', year: '2023' },
  { role: 'Web Developer Intern', year: '2022' },
  { role: 'Front-end Lead Intern', year: '2021' },
];

const technologies: Technology[] = [
  { name: 'HTML5' },
  { name: 'CSS3' },
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'React' },
  { name: 'Next.js' },
  { name: 'Vue.js' },
  { name: 'TailwindCSS' },
  { name: 'SASS' },
  { name: 'Bootstrap' },
  { name: 'Vite' },
  { name: 'Git' },
  { name: 'Netlify' },
  { name: 'Vercel' },
  { name: 'Firebase' },
  { name: 'RESTful API' },
  { name: 'Framer Motion' },
  { name: 'Jest' },
  { name: 'RTL' },
];

const Experience: React.FC = () => {
  const skillsRef = useRef(null);
  const { hasBeenInView } = useInView(skillsRef, { threshold: 0.1 });

  const sectionHeaderVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const techVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div ref={skillsRef} className="w-full p-4 md:p-6 lg:px-12" id="experience">
      <div className="max-w-custom mx-auto py-16 md:py-28">
        <motion.h2
          className="text-2xl text-gray-900 font-sans font-semibold dark:text-gray-50 flex items-center mb-10"
          initial="hidden"
          animate={hasBeenInView ? 'visible' : 'hidden'}
          variants={sectionHeaderVariants}
          transition={{ duration: 0.5 }}
        >
          <span
            className="text-xl text-bluebell font-serif"
            style={{ transform: 'translateY(-0.15em)' }}
          >
            02.
          </span>
          <span className="ml-4">Tech & Tenure</span>
          <span className="flex-1 h-px bg-gray-300 dark:bg-gray-700 ml-4 max-w-xs"></span>
        </motion.h2>
        <motion.p
          className="font-sans text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
          initial="hidden"
          animate={hasBeenInView ? 'visible' : 'hidden'}
          variants={itemVariants}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Here is a summary of my professional experience and technical skills:
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="relative"
            initial="hidden"
            animate={hasBeenInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.6 }}
          >
            <div className="relative text-gray-900 dark:text-gray-50 font-serif h-full">
              <span className="absolute top-0 left-0 text-bluebell">
                {'<experience>'}
              </span>
              <div className="flex flex-col items-center justify-center h-full py-8">
                <div className="relative w-full">
                  <div className="absolute inset-0 flex justify-center">
                    <div className="w-px bg-gray-400 dark:bg-gray-600 h-full"></div>
                  </div>
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={exp.role + exp.year}
                      className={`relative mb-6 flex items-center w-full ${
                        index === 1 ? 'flex-row-reverse' : ''
                      }`}
                      initial="hidden"
                      animate={hasBeenInView ? 'visible' : 'hidden'}
                      variants={itemVariants}
                      transition={{ duration: 0.7, delay: 0.6 + index * 0.2 }}
                      style={{ zIndex: 10 }}
                    >
                      <div
                        className={`absolute w-4 h-4 bg-bluebell rounded-full border-2 border-white dark:border-gray-800 left-1/2 transform -translate-x-1/2`}
                        style={{ zIndex: 5 }}
                      ></div>
                      <div
                        className={`text-sm p-4 bg-gray-100 dark:bg-gray-800 rounded-md shadow-md hover:shadow-lg transition duration-300 ${
                          index === 1 ? 'ml-10 text-left' : 'mr-10 text-right'
                        }`}
                        style={{ zIndex: 10 }}
                      >
                        {exp.role}
                        <span className="block text-xs text-gray-600 dark:text-gray-300">
                          {exp.year}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <span className="absolute bottom-0 right-0 text-bluebell">
                {'</experience>'}
              </span>
            </div>
          </motion.div>
          <motion.div
            className="relative"
            initial="hidden"
            animate={hasBeenInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.6 }}
          >
            <div className="relative text-gray-900 dark:text-gray-50 font-serif h-full">
              <span className="absolute top-0 left-0 text-bluebell">
                {'<technologies>'}
              </span>
              <div className="flex flex-wrap justify-center items-center h-full p-4">
                {technologies.map((tech, index) => (
                  <motion.p
                    key={tech.name}
                    className={`text-${
                      Math.floor(Math.random() * 4) + 2
                    }xl m-2`}
                    initial="hidden"
                    animate={hasBeenInView ? 'visible' : 'hidden'}
                    variants={techVariants}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                  >
                    {tech.name}
                  </motion.p>
                ))}
              </div>
              <span className="absolute bottom-0 right-0 text-bluebell">
                {'</technologies>'}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
