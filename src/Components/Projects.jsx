// Projects Component: Projects.jsx
import React from 'react';
import { motion } from "framer-motion";
import ProjectData from '../SubComponents/ProjectData.jsx';
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <>
      <motion.section
        className="project-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.5, ease: 'easeInOut' }}>

        <div className="project-container">
          <motion.h2 className="text-center project-head d-flex align-items-center justify-content-center"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 1, ease: 'easeInOut' }}>
            <p className="mb-0">M</p>y <p className="mb-0 ms-2">C</p>reative <p className="mb-0 ms-2">O</p>dyssey
          </motion.h2>
          <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner text-center">

              {/* Slides */}
              {
                ProjectData.map((elem, ind) =>
                  <div class={`carousel-item ${ind === 0 ? "active" : ""}`}>
                    <Link to={elem.link}>
                      <motion.img src={elem.image} class="project-img" alt={`project-${elem.ind + 1}.png`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ delay: 0.2, duration: 1, ease: 'easeInOut' }} />
                    </Link>
                  </div>
                )
              }
            </div>

            {/* Buttons */}
            <motion.button
              class="carousel-control-prev" type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ delay: 0.2, duration: 1.5, ease: 'easeInOut' }}>
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </motion.button>
            <motion.button
              class="carousel-control-next" type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ delay: 0.2, duration: 1.5, ease: 'easeInOut' }}>
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </motion.button>
          </div>
        </div>

      </motion.section>
    </>
  );
};