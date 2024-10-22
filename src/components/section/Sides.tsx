'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import GitHubIcon from '@/components/icons/GithubIcon';
import LinkedInIcon from '@/components/icons/LinkedInIcon';
import XIcon from '@/components/icons/XIcon';
import YouTubeIcon from '@/components/icons/YoutubeIcon';
import DribbbleIcon from '@/components/icons/DribbbleIcon';
import useInView from '@/hooks/useInView';
import { config } from '@/config/config';

const Sides: React.FC = () => {
  const leftSideRef = useRef(null);
  const rightSideRef = useRef(null);

  const { hasBeenInView: leftSideInView } = useInView(leftSideRef, {
    threshold: 0.1,
  });
  const { hasBeenInView: rightSideInView } = useInView(rightSideRef, {
    threshold: 0.1,
  });

  const heroAnimationDuration = 2;
  const sideAnimationDelay = heroAnimationDuration + 0.5;

  const socialMediaLinks = [
    {
      href: config.urls.githubProfile,
      icon: <GitHubIcon />,
      label: 'GitHub',
    },
    {
      href: config.urls.youtubeProfile,
      icon: <YouTubeIcon />,
      label: 'YouTube',
    },
    {
      href: config.urls.XProfile,
      icon: <XIcon />,
      label: 'X',
    },
    {
      href: config.urls.linkedinProfile,
      icon: <LinkedInIcon />,
      label: 'LinkedIn',
    },
    {
      href: config.urls.dribbbleProfile,
      icon: <DribbbleIcon />,
      label: 'Dribbble',
    },
  ];

  return (
    <div className="hidden xl:block">
      <motion.div
        ref={leftSideRef}
        className="fixed bottom-0 left-6 xl:left-12 w-10 z-10 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: leftSideInView ? 1 : 0,
          y: leftSideInView ? 0 : 20,
        }}
        transition={{ duration: 0.5, delay: sideAnimationDelay }}
      >
        <div className="flex flex-col items-center">
          <motion.ul
            className="space-y-6 mb-6 list-none p-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: leftSideInView ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            {socialMediaLinks.map((link) => (
              <motion.li
                key={link.href}
                className="transition-transform hover:-translate-y-1"
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-bluebell dark:hover:text-bluebell focus:text-bluebell dark:focus:text-bluebell"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div
            className="w-px h-24 bg-gray-900 dark:bg-gray-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: leftSideInView ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          ></motion.div>
        </div>
      </motion.div>
      <motion.div
        ref={rightSideRef}
        className="fixed bottom-0 right-6 xl:right-12 w-10 z-10 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: rightSideInView ? 1 : 0,
          y: rightSideInView ? 0 : 20,
        }}
        transition={{ duration: 0.5, delay: sideAnimationDelay }}
      >
        <div className="flex flex-col items-center">
          <motion.a
            href={`mailto:${config.urls.email}`}
            className="font-serif font-medium text-sm text-gray-700 tracking-widest dark:text-gray-300 hover:text-bluebell dark:hover:text-bluebell focus:text-bluebell dark:focus:text-bluebell [writing-mode:vertical-lr] transition-transform hover:-translate-y-1 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: rightSideInView ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            aria-label={`Email ${config.urls.email}`}
          >
            {config.urls.email}
          </motion.a>
          <motion.div
            className="w-px h-24 bg-gray-900 dark:bg-gray-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: rightSideInView ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          ></motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sides;
