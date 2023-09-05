// About Component: About.jsx
import React from 'react';
import { motion } from "framer-motion";
import Avatar from "../Media/Adarsh.png";
import Comma from "../Media/comma.png";
import AboutToggle from '../SubComponents/AboutToggle.jsx';
import { GiSkills } from "react-icons/gi"
import { ImBooks } from "react-icons/im"

export default function About() {
  const [skillTap, setSkillTap] = React.useState(false);
  const handleSkillTap = () => {
    setSkillTap(skillTap => !skillTap);
  }
  return (
    <>
      <motion.section
        className="about-section d-flex justify-content-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.2, duration: 1.5, ease: 'easeInOut' }}>

        <div className="container-fluid">
          <motion.div className="about-avatar"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ delay: 0.2, duration: 1.5, ease: 'easeInOut' }}>
            <img src={Avatar} alt="Avatar" />
          </motion.div>
          <motion.div className="about-me"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 1.5, ease: 'easeInOut' }}>
            <img className="comma" src={Comma} alt="comma" />
            <p className="about-para">
              I am a passionate and self-driven individual with a keen interest in web development, particularly in React JS. I have dedicated considerable time to honing my skills and expertise in React JS through self-learning and personal projects.
            </p>
          </motion.div>
          <div className="about-main">
            <div className="about-head">
              <motion.h4
                onClick={handleSkillTap}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ delay: 0.2, duration: 1.5, ease: 'easeInOut' }}
                data-bs-toggle="offcanvas"
                data-bs-target="#skillSlider">
                <p className="about-desktop">Skills</p>
                <p className="about-mobile"><GiSkills /></p>
              </motion.h4>
              <motion.h4
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ delay: 0.2, duration: 1.5, ease: 'easeInOut' }}
                data-bs-toggle="offcanvas"
                data-bs-target="#educationSlider">
                <p className="about-desktop">Education</p>
                <p className="about-mobile"><ImBooks /></p>
              </motion.h4>
            </div>
            <div className="about-info d-flex align-items-center justify-content-center">
              <AboutToggle skillTap={skillTap} />
            </div>
          </div>
        </div>

      </motion.section>
    </>
  );
};