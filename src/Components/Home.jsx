// Home Component: Home.jsx
import React, { useEffect, useState } from 'react';
// Importing TsParticles:
import ParticlesBg from "./ParticlesBg.jsx";
import ResumeBtn from "../SubComponents/ResumeBtn.jsx";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import HomeImg from "../Media/Adarsh.png";

export default function Home() {

  const [text] = useTypewriter({
    words: ['Web Developer', 'Graphic Designer'],
    loop: {},
    typeSpeed: 30,
    deleteSpeed: 30
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 200);
  }, []);

  return (
    <>
      <ParticlesBg />
      <motion.section className="home-section">
        <div className="container">
          <div className="row">
            <div className="home-text col-lg-6 col-md-6 col-12">
              <div className="home-inner d-flex flex-column align-items-start justify-content-center">
                {isLoaded && (<>
                  <motion.h2
                    className="greet-text"
                    key="greet-text"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}>
                    Hey Fellas!
                  </motion.h2>
                  <motion.h1
                    className="text-white text-name"
                    key="text-name"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}>
                    I'm Adarsh Pattnaik
                  </motion.h1>
                  <motion.h1
                    className="typewrite"
                    key="typewrite"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}>
                    A <span className="fw-bold typeText">
                      {text}
                    </span>
                    <span className="typeCursor">
                      <Cursor cursorStyle="|" />
                    </span>
                  </motion.h1>
                  <ResumeBtn />
                </>)}
              </div>
            </div>
            <div className="home-avatar col-lg-6 col-md-6 col-12">
              <div className="d-flex align-items-center justify-content-center">
                <div className="home-img">
                  <motion.img
                    className="transparent-border"
                    key="home-img"
                    src={HomeImg}
                    alt="Adarsh Pattnaik"
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{ duration: 2, ease: 'easeInOut' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

    </>
  );
};