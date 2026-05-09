import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-gray-400 py-8 px-6 md:px-24 flex flex-col md:flex-row justify-between items-center border-t border-gray-700">
      <p className="text-sm mb-4 md:mb-0">© {new Date().getFullYear()} Deepak Kumar. All rights reserved.</p>
      <nav className="flex space-x-6 text-sm">
        <a href="#hero" className="hover:text-indigo-400 transition">Home</a>
        <a href="#about" className="hover:text-indigo-400 transition">About</a>
        <a href="#skills" className="hover:text-indigo-400 transition">Skills</a>
        <a href="#experience" className="hover:text-indigo-400 transition">Experience</a>
        <a href="#projects" className="hover:text-indigo-400 transition">Projects</a>
        <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
      </nav>
      <div className="flex space-x-6 text-gray-400">
        <a href="https://github.com/Deepak-kumar911" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-indigo-400 transition">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/deepak-kumar-20a007269/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-indigo-400 transition">
          <FaLinkedin size={24} />
        </a>
        {/* <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-indigo-400 transition">
          <FaTwitter size={24} />
        </a> */}
      </div>
    </footer>
  );
};

export default Footer;
