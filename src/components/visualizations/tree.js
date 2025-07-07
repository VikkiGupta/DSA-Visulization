import React from "react";
import { Link } from "react-router";
import ThemeToggleButton from "../home/Themetoggle";

const Tree= () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 w-full text-black dark:text-white">
      {/* Header - same as Home component but simplified */}
      <header className="fixed top-0 w-full h-16 bg-amber-50 text-black shadow-md flex items-center justify-between px-8 z-50">
        <h1 className="font-bold text-2xl">DSA Visualization</h1>
        <nav className="flex gap-6 text-sm font-medium">
          <Link
            to="/"
            className="cursor-pointer hover:text-blue-600 transition-colors text-2xl"
          >
            Home
          </Link>
          <ThemeToggleButton />
        </nav>
      </header>

      {/* Content Section */}
      <div className="min-h-screen pt-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-amber-500 mb-6">Tree Visualization</h1>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-gray-700 dark:text-gray-300">
             Coming soon...
            </p>
            <Link 
              to="/" 
              className="mt-4 inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tree;