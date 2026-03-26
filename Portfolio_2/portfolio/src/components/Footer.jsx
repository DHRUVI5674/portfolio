import React from 'react';
import { Github, Linkedin, Twitter, Youtube, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-8 border-t border-white/10 text-center">
      <div className="flex justify-center items-center space-x-6 mb-6">
        <a
          href="https://github.com/DHRUVI5674"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-neon-cyan transition-colors"
          title="GitHub"
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/dhruvi-patel-bb2b9239a/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-neon-cyan transition-colors"
          title="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://twitter.com/patel_dhru76113"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-neon-cyan transition-colors"
          title="Twitter"
        >
          <Twitter size={20} />
        </a>
        <a
          href="https://www.youtube.com/@Dhruvi_Patel_6"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-neon-cyan transition-colors"
          title="YouTube"
        >
          <Youtube size={20} />
        </a>
        <a
          href="https://leetcode.com/u/TR0kHGhQN9/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-neon-cyan transition-colors"
          title="LeetCode"
        >
          <Code size={20} />
        </a>
      </div>
      <p className="text-gray-400">
        © {new Date().getFullYear()} <span className="text-neon-cyan">Dhruvi Patel</span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;