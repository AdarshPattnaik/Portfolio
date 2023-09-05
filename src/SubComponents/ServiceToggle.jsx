import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import WhatIDoData from "./WhatIDoData.jsx";
import ExperienceData from "./ExperienceData.jsx";

export default function ServiceToggle() {
    return (
        <>
            <div class="offcanvas offcanvas-start"
                data-bs-backdrop="static"
                tabIndex="-1" id="what-i-do-offcanvas"
                aria-labelledby="staticBackdropLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="staticBackdropLabel">What I Do?</h5>
                    <p type="button" className="close-btn" data-bs-dismiss="offcanvas" aria-label="Close">
                        <AiOutlineArrowLeft />
                    </p>
                </div>
                <div class="offcanvas-body">
                    <div className="do-container">
                        {
                            WhatIDoData.map((elem, ind) =>
                                <div key={ind} className="do-card">
                                    <div className="do-icon">
                                        <video
                                            src={elem.icon}
                                            loop muted autoPlay>
                                            {elem.name}.mp4
                                        </video>
                                    </div>
                                    <h4 className="do-title">{elem.name}</h4>
                                    <p className="do-para">{elem.description}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <div class="offcanvas offcanvas-start"
                data-bs-backdrop="static"
                tabIndex="-1" id="experience-offcanvas"
                aria-labelledby="staticBackdropLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="staticBackdropLabel">Experience</h5>
                    <p type="button" className="close-btn" data-bs-dismiss="offcanvas" aria-label="Close">
                        <AiOutlineArrowLeft />
                    </p>
                </div>
                <div class="offcanvas-body">
                    <div className="exp-container">
                        {
                            ExperienceData.map((elem, ind) =>
                                <div key={ind} className="exp-card">
                                    <div className="exp-icon d-flex align-items-center justify-content-between">
                                        <video
                                            src={elem.icon}
                                            loop muted autoPlay>
                                            {elem.name}.mp4
                                        </video>
                                        <p>{elem.date}</p>
                                    </div>
                                    <h4 className="exp-title">{elem.name}</h4>
                                    <p className="exp-para">{elem.description}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
};