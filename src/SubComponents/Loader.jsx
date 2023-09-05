import React from 'react';
import "./loader.scss";
import loaderVideo from "../Media/loader.mp4";

export default function Loader() {
    return (
        <>
            <div className="loader-bg">
                <video
                    src={loaderVideo}
                    loop muted autoPlay>
                    loader.mp4
                </video>
            </div>
        </>
    );
};