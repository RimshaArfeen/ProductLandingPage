import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // The footer no longer uses fixed positioning, ensuring it flows naturally at the bottom of the page.
    <footer className="bg-gray-900 text-gray-400 body-font">
      <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
        {/* Logo and Site Name */}
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-gray-800 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <circle cx="12" cy="11" r="3" fill="currentColor" stroke="none" />
          </svg>
          <span className="ml-3 text-xl">NestaCoffee</span>
        </a>

        {/* Copyright */}
        <p className="text-sm sm:ml-6 sm:mt-0 mt-4">
          © {currentYear} NestaCoffee —
          <a href="https://twitter.com/yourhandle" rel="noopener noreferrer" className="ml-1 text-gray-400 hover:text-white transition-colors" target="_blank">
            @yourhandle
          </a>
        </p>

        {/* Social Media Links */}
        <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-400 hover:text-white transition-colors" href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-400 hover:text-white transition-colors" href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-400 hover:text-white transition-colors" href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
              <path d="M17.5 6.5h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-400 hover:text-white transition-colors" href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 00-9.33 5H6V20h4v-6h2a4 4 0 100-8h-.33A6 6 0 1016 8zM3 20H1V9h2zm1-11H1a2 2 0 110-4h2a2 2 0 010 4z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
