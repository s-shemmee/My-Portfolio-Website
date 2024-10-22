'use client';

import React, { useRef } from 'react';
import ScrollMouse from '@/components/widgets/ScrollMouse';
import { motion, Variants } from 'framer-motion';
import useInView from '@/hooks/useInView';

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 1 + i * 0.2,
      duration: 0.7,
      ease: 'easeInOut',
    },
  }),
};

const handWaveVariants: Variants = {
  hidden: { rotate: 0 },
  visible: {
    rotate: [0, 10, -10, 10, -10, 0],
    transition: { repeat: Infinity, duration: 1, ease: 'easeInOut' },
  },
};

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { hasBeenInView } = useInView(heroRef, { threshold: 0.1 });

  return (
    <section ref={heroRef} className="w-full p-6 lg:px-12">
      <header className="max-w-custom mx-auto text-center mt-48 py-24">
        <motion.h1
          className="font-serif text-lg sm:text-xl lg:text-2xl font-normal text-bluebell mb-4 sm:mb-8"
          initial="hidden"
          animate={hasBeenInView ? 'visible' : 'hidden'}
          custom={0}
          variants={textVariants}
        >
          Hey there!
          <motion.span
            className="ml-2 inline-block"
            variants={handWaveVariants}
            initial="hidden"
            animate={hasBeenInView ? 'visible' : 'hidden'}
          >
            👋
          </motion.span>
        </motion.h1>
        <motion.h1
          className="font-sans text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-none text-softLilac m-0"
          initial="hidden"
          animate={hasBeenInView ? 'visible' : 'hidden'}
          custom={1}
          variants={textVariants}
        >
          I&apos;m Shemmee
        </motion.h1>
        <motion.p
          className="font-serif text-base sm:text-lg lg:text-xl font-normal text-bluebell mt-2 mb-2"
          initial="hidden"
          animate={hasBeenInView ? 'visible' : 'hidden'}
          custom={2}
          variants={textVariants}
        >
          &
        </motion.p>
        <motion.h2
          className="font-sans text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-none text-gray-900 dark:text-gray-50 m-0"
          initial="hidden"
          animate={hasBeenInView ? 'visible' : 'hidden'}
          custom={3}
          variants={textVariants}
        >
          I build stuff for the web.
        </motion.h2>
        <motion.div
          initial="hidden"
          animate={hasBeenInView ? 'visible' : 'hidden'}
          custom={4}
          variants={textVariants}
        >
          <ScrollMouse />
        </motion.div>
      </header>
    </section>
  );
};

export default Hero;
