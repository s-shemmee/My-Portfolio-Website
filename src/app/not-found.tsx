import React from 'react';
import Link from 'next/link';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-bluebell dark:text-gray-50">
          404
        </h1>
        <p className="mt-4 text-xl text-gray-800 dark:text-gray-300">
          Oops! Page not found.
        </p>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link href="/">
          <button className="inline-block mt-6 px-6 py-3 bg-bluebell text-white font-serif rounded-lg hover:bg-bluebell-dark dark:hover:bg-bluebell-dark hover:shadow-lg transition-colors">
            Go back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
