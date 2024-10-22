'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useInView from '@/hooks/useInView';

const Contact: React.FC = () => {
  const contactRef = React.useRef(null);
  const { hasBeenInView } = useInView(contactRef, { threshold: 0.1 });

  const [formState, setFormState] = useState({ email: '', message: '' });
  const [errors, setErrors] = useState<{ email?: string; message?: string }>(
    {}
  );
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    const newErrors: { email?: string; message?: string } = {};
    if (!formState.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formState.message) {
      newErrors.message = 'Message is required';
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setLoading(true);
      setErrors({});
      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formState),
        });
        if (response.ok) {
          setSubmitted(true);
          setFormState({ email: '', message: '' });
        } else {
          console.error('Failed to send message');
        }
      } catch (error) {
        console.error('Failed to send message', error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div ref={contactRef} className="w-full p-4 md:p-6 lg:px-12" id="contact">
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
            04.
          </span>
          <span className="ml-4">Get in Touch</span>
          <span className="flex-1 h-px bg-gray-300 dark:bg-gray-700 ml-4 max-w-xs"></span>
        </motion.h2>
        <motion.p
          className="text-gray-700 text-base font-sans dark:text-gray-300 mb-8 leading-relaxed"
          initial="hidden"
          animate={hasBeenInView ? 'visible' : 'hidden'}
          variants={textVariants}
          custom={1}
        >
          I&apos;m always open to discussing work opportunities, new projects,
          or even just a quick chat! Feel free to drop me a message and
          I&apos;ll get back to you as soon as I can!
        </motion.p>
        <div className="flex flex-col md:flex-row md:gap-12">
          <motion.div
            className="md:flex-1"
            initial="hidden"
            animate={hasBeenInView ? 'visible' : 'hidden'}
            variants={textVariants}
            custom={2}
          >
            <motion.form
              className="space-y-6"
              initial="hidden"
              animate={hasBeenInView ? 'visible' : 'hidden'}
              variants={textVariants}
              custom={3}
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-gray-700 dark:text-gray-300 text-base font-sans mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@domain.com"
                  autoComplete="email"
                  className={`p-3 bg-gray-100 dark:bg-gray-800 border ${
                    errors.email
                      ? 'border-red-500'
                      : 'border-gray-300 dark:border-gray-700'
                  } rounded focus:outline-none focus:border-bluebell dark:focus:border-bluebell hover:border-softLilac dark:hover:border-softLilac`}
                  value={formState.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">{errors.email}</span>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="text-gray-700 dark:text-gray-300 text-base font-sans mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Type your message"
                  autoComplete="message"
                  className={`p-3 bg-gray-100 dark:bg-gray-800 border ${
                    errors.message
                      ? 'border-red-500'
                      : 'border-gray-300 dark:border-gray-700'
                  } rounded focus:outline-none focus:border-bluebell dark:focus:border-bluebell hover:border-softLilac dark:hover:border-softLilac`}
                  value={formState.message}
                  onChange={handleChange}
                  required
                ></textarea>
                {errors.message && (
                  <span className="text-red-500 text-sm">{errors.message}</span>
                )}
              </div>
              <button
                type="submit"
                className="p-3 bg-transparent border-2 border-bluebell text-bluebell font-serif rounded transition-transform transform hover:bg-bluebell hover:bg-opacity-10 hover:shadow-lg"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {submitted && (
                <p className="text-green-500 text-sm mt-4">
                  Message sent successfully!
                </p>
              )}
            </motion.form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
