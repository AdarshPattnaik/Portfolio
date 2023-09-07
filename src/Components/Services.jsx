// Services Component: Services.jsx
import React from 'react';
import { motion } from "framer-motion";
import WhatIDoImg from "../Media/what-i-do.png";
import ExperienceImg from "../Media/experience.png";
import CertificationsImg from "../Media/certifications.png";
import ServiceToggle from '../SubComponents/ServiceToggle.jsx';

export default function Services() {
  return (
    <>
      <motion.section
        className="service-section glitter-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.2, duration: 1.5, ease: 'easeInOut' }}>
        <motion.div className="pattern-bg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ delay: 0.2, duration: 1.5, ease: 'easeInOut' }}>
          <motion.div className="do-box">
            <motion.img src={WhatIDoImg} alt="what-i-do.png"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ delay: 1.7, duration: 1.5, ease: 'easeInOut' }}
              data-bs-toggle="offcanvas"
              data-bs-target="#what-i-do-offcanvas"
              aria-controls="staticBackdrop" />
          </motion.div>
          <motion.div className="exp-box">
            <motion.img src={ExperienceImg} alt="experience.png"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ delay: 1.7, duration: 1.5, ease: 'easeInOut' }}
              data-bs-toggle="offcanvas"
              data-bs-target="#experience-offcanvas"
              aria-controls="staticBackdrop" />
          </motion.div>
        </motion.div>
        <motion.div className="cert-box">
            <motion.img src={CertificationsImg} alt="certifications.png"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ delay: 1.7, duration: 1.5, ease: 'easeInOut' }}
              data-bs-toggle="offcanvas"
              data-bs-target="#certificate-offcanvas"
              aria-controls="staticBackdrop" />
          </motion.div>
        <ServiceToggle />
      </motion.section>
    </>
  );
};