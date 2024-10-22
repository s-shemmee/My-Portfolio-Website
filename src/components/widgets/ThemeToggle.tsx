'use client';

import { useEffect } from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.add('transition-colors');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('transition-colors');
    }
  }, [theme]);

  return (
    <button
      className="p-2 rounded-full text-bluebell hover:bg-gray-200 dark:hover:bg-gray-800 focus-visible:ring focus-visible:ring-gray-900 dark:focus-visible:ring-gray-100 transition-colors duration-300 ease-in-out"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label={`Toggle ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeToggle;
