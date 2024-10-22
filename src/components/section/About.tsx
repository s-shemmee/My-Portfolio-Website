'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import aboutMeImg from 'public/images/shemmee.jpg';
import { motion } from 'framer-motion';
import useInView from '@/hooks/useInView';

const About: React.FC = () => {
  const aboutRef = useRef(null);
  const { hasBeenInView } = useInView(aboutRef, { threshold: 0.1 });

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  return (
    <div ref={aboutRef} className="w-full p-4 md:p-6 lg:px-12" id="about">
      <div className="max-w-custom mx-auto py-16 md:py-28">
        <motion.h2
          className="text-2xl text-gray-900 font-sans font-semibold dark:text-gray-50 flex items-center mb-10"
          initial="hidden"
          animate={hasBeenInView ? 'visible' : 'hidden'}
          variants={textVariants}
          custom={0}
        >
          <span
            className="text-xl text-bluebell font-serif"
            style={{ transform: 'translateY(-0.15em)' }}
          >
            01.
          </span>
          <span className="ml-4">About Me</span>
          <span className="flex-1 h-px bg-gray-300 dark:bg-gray-700 ml-4 max-w-xs"></span>
        </motion.h2>
        <div className="flex flex-col md:flex-row md:gap-12">
          <motion.div
            className="md:flex-[2]"
            initial="hidden"
            animate={hasBeenInView ? 'visible' : 'hidden'}
            variants={textVariants}
            custom={1}
          >
            {[
              'Hello! I\'m Shemmee, a self-taught front-end developer based in Marrakesh, Morocco. My coding journey began out of sheer curiosity. I often found myself inspecting the code behind websites I admired, wondering, "How does this even work?" That curiosity evolved into a passion for HTML and CSS, allowing me to bring ideas to life on the web.',
              'Over the past two years, I’ve participated in several online coding bootcamps, including ' +
                "<a class='text-bluebell font-semibold' href='https://www.shecodes.io' target='_blank' rel='noopener noreferrer'>SheCodes</a>" +
                ' and ' +
                "<a class='text-bluebell font-semibold' href='https://codedamn.com' target='_blank' rel='noopener noreferrer'>Codedamn</a>" +
                '. These programs, along with a supportive community, have been instrumental to my growth. I’ve also had the opportunity to contribute to open-source projects and develop personal projects, each one pushing me to refine my skills and explore new technologies.',
              'Outside of coding, you’ll often find me gaming, reading manga, or giving my cats more attention than they’ll admit they need. Whether working on a project or tackling a new challenge, I’m excited to keep learning and growing in this ever-evolving field.',
            ].map((text, index) => (
              <motion.p
                key={index}
                className="text-gray-700 text-[15.5px] font-sans dark:text-gray-300 mt-4 leading-loose"
                custom={index + 2}
                variants={textVariants}
              >
                <span dangerouslySetInnerHTML={{ __html: text }} />
              </motion.p>
            ))}
          </motion.div>
          <motion.div
            className="flex justify-center md:justify-end md:flex-[1] relative mt-8 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{
              opacity: hasBeenInView ? 1 : 0,
              x: hasBeenInView ? 0 : 20,
            }}
            transition={{
              duration: 0.5,
              delay: hasBeenInView ? 0.2 : 0,
            }}
          >
            <div className="relative group w-full md:w-[300px] h-auto md:h-[300px]">
              <div className="rounded-lg overflow-hidden">
                <div className="absolute inset-0 border-2 rounded border-bluebell translate-x-4 translate-y-4 -z-10"></div>
                <Image
                  src={aboutMeImg}
                  alt="A photo of Shemmee"
                  className="rounded-lg w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-bluebell opacity-25 rounded-lg group-hover:opacity-0 transition-opacity duration-300 z-10"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
