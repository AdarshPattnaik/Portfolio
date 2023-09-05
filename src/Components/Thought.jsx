// Thought Component: Thought.jsx
import React from 'react';
import { motion } from "framer-motion";
import ReviewData from "../SubComponents/ReviewData.jsx";

export default function Thought() {
  return (
    <>
      <motion.section
        className="thought-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.5, ease: 'easeInOut' }}>

        <div id="carouselExample" className="carousel slide">

          {/* Slides */}
          <div className="carousel-inner">
            {
              ReviewData.map((elem, ind) => <div className={`carousel-item ${ind === 0 ? "active" : ""}`}>
                <div key={ind} className="container-fluid">
                  <div className="row">
                    <div className="rev-sec-1 col-lg-6 col-md-6 col-12">
                      <div className="person-dp">
                        <motion.img src={elem.dp} alt={`${elem.name}.png`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ delay: 0.2, duration: 1, ease: 'easeInOut' }} />
                      </div>
                    </div>
                    <div className="rev-sec-2 col-lg-6 col-md-6 col-12">
                      <div className="person-data">
                        <motion.h2
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -30 }}
                          transition={{ delay: 0.2, duration: 1, ease: 'easeInOut' }}>
                          {elem.name}
                        </motion.h2>
                        <motion.h4
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -30 }}
                          transition={{ delay: 0.2, duration: 1.5, ease: 'easeInOut' }}>
                          {elem.title}
                        </motion.h4>
                        <motion.p
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -30 }}
                          transition={{ delay: 0.2, duration: 2, ease: 'easeInOut' }}>
                          {elem.review}
                        </motion.p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              )
            }
          </div>

          {/* Buttons */}
          <motion.button
            className="carousel-control-prev" type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ delay: 0.2, duration: 1.5, ease: 'easeInOut' }}>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </motion.button>
          <motion.button
            className="carousel-control-next" type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ delay: 0.2, duration: 1.5, ease: 'easeInOut' }}>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </motion.button>

        </div>

      </motion.section>
    </>
  );
};