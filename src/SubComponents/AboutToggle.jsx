// AboutToggle Sub Component:
import React from 'react';
import SkillData from './SkillData.jsx';
import EduData from './EducationData.jsx';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

export default function AboutToggle({ skillTap }) {
    const [showSkill, setShowSkill] = React.useState(false);
    const disableSkill = () => {
        setShowSkill(false);
    }

    React.useEffect(() => {
        setShowSkill(true);
    }, [skillTap]);

    React.useEffect(() => {
        setShowSkill(false);
    }, []);

    return (
        <>
            <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex="-1" id="skillSlider" aria-labelledby="staticBackdropLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title"
                        id="staticBackdropLabel">Skills</h5>
                    <p onClick={disableSkill}
                        type="button" className="close-btn" data-bs-dismiss="offcanvas" aria-label="Close">
                        <AiOutlineArrowLeft />
                    </p>
                </div>
                <div className="offcanvas-body">

                    <div className="skill-container">
                        {
                            showSkill &&
                            SkillData.map((elem, ind) =>
                                <motion.div key={ind} className="skill-box"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ delay: 0.2, duration: 0.5, ease: 'easeInOut' }}>
                                    <div className="skill-info">
                                        <p className="skill-name">{elem.name}</p>
                                        <p className="skill-percent">{elem.percent}</p>
                                    </div>
                                    <div className="progress-line" data-percent={elem.percent}>
                                        <span style={{ width: elem.percent }}></span>
                                    </div>
                                </motion.div>
                            )}
                    </div>
                </div>
            </div>
            <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex="-1" id="educationSlider" aria-labelledby="staticBackdropLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="staticBackdropLabel">Education</h5>
                    <p type="button" className="close-btn" data-bs-dismiss="offcanvas" aria-label="Close">
                        <AiOutlineArrowLeft />
                    </p>
                </div>
                <div className="offcanvas-body">
                    <div className="edu-container">
                        {EduData.map((elem, ind) =>
                            <motion.div key={ind} className="edu-box"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ delay: 0.2, duration: 1, ease: 'easeInOut' }}>
                                <div className="edu-head d-flex flex-row align-items-center justify-content-between">
                                    <video
                                        className="edu-icon"
                                        src={elem.icon}
                                        loop muted autoPlay>
                                        {elem.title}
                                    </video>
                                    <div className="edu-date">{elem.date}</div>
                                </div>
                                <div className="edu-title">{elem.title}</div>
                                <div className="edu-inst">
                                    <Link to={elem.link}>
                                        {elem.inst}
                                    </Link>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>

        </>
    );
};