import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-primary px-6 py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        
        {/* Left side: Name */}
        <p className="text-sm text-secondary">
          © {new Date().getFullYear()} Syed Muhammad Usman
        </p>

        {/* Right side: Links */}
        <div className="flex gap-6 text-sm text-secondary">
          <a
            href="https://www.linkedin.com/in/muhammadd-usman-ds"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaLinkedin size={20} />
            <span className="text-xs">LinkedIn</span>
          </a>

          <a
            href="https://github.com/Muhammad-Usman-DS"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaGithub size={20} />
            <span className="text-xs">GitHub</span>
          </a>

          <a
            href="mailto:muhammadusman19095@gmail.com"
            className="hover:text-white transition-colors"
          >
            <MdEmail size={20} />
            <span className="text-xs">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
