import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-50 w-full py-10 mt-20 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-xl font-semibold text-gray-800">Vikki Gupta</h2>
        <p className="text-gray-600 mt-2">Aspiring Web Developer | Passionate about UI/UX and React</p>

        <div className="mt-6 flex justify-center space-x-6">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black">
            <span className="sr-only">GitHub</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48...Z" />
            </svg>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600">
            <span className="sr-only">LinkedIn</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76..." />
            </svg>
          </a>
          <a href="mailto:your.email@example.com" className="text-gray-500 hover:text-red-500">
            <span className="sr-only">Email</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2 4a2 2 0 0 1..." />
            </svg>
          </a>
        </div>

        <p className="text-gray-400 text-sm mt-6">
          © {new Date().getFullYear()} Vikki Gupta. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
