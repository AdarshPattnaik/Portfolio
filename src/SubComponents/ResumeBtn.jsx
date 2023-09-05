// ResumeBtn Sub-Component: ResumeBtn.jsx
import React, { useEffect, useState } from 'react';
import "./ResumeBtnCSS.css";
import { motion } from "framer-motion";
import CvImg from "../Media/cv-img.png";
import Resume from "../Media/AdarshPattnaikResume.pdf";

export default function ResumeBtn() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 1);
    }, []);
    return (
        <>
            {isLoaded && (
                <motion.div className="wrap-btn"
                    key="home-resume"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}>
                    <a href={Resume} download="AdarshPattnaikResume">
                        <button class="resume-btn">
                            <motion.p className="cv-desktop my-auto"
                                key="home-resume-desktop"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5, ease: 'easeInOut'  }}>
                                Resume
                            </motion.p>
                            <motion.p className="cv-mobile my-auto"
                                key="home-resume-mobile"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5, ease: 'easeInOut'  }}>
                                <img src={CvImg} width="30px" alt="cv" />
                            </motion.p>
                        </button>
                    </a>
                </motion.div>
            )}
        </>
    );
};