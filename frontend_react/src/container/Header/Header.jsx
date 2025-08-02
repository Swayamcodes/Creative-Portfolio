import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { images } from '../../constants';
import './Header.scss';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';

const Header = () => {
  return (
    <div className="app__header">

      {/* LEFT SECTION */}
      <motion.div
        className="app__header-left"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="hero-title">
          Hi, I’m <span>Swayam</span>
        </h1>
        <h2 className="hero-role">Web Developer</h2>
        <p className="hero-desc">
          I build modern full-stack applications using React.js, Node.js, Express,
          and PosgresSQL. I’m passionate about creating performant, scalable, and
          user-friendly web experiences.
        </p>

        <div className="hero-icons">
          <a href="https://github.com/Swayamcodes" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/swayam-shinde-863335258/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://x.com/raspberrychai_" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
        </div>

        <a href="/Swayam-Resume.pdf" download className="cv-button">
          Download CV ⬇
        </a>
      </motion.div>

      {/* RIGHT SECTION */}
      <motion.div
        className="app__header-right"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="blob-bg"></div>
        <img src={images.profile} alt="Swayam profile" className="hero-img" />
      </motion.div>
    </div>
  );
};


export default AppWrap(Header, 'home');
