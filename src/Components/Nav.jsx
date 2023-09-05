// Nav Component: Nav.jsx
import React from 'react';
import NavData from '../SubComponents/NavData.jsx';
import { Link, useLocation } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';

export default function Nav() {
    const location = useLocation()
    const currentPath = location.pathname;

    return (
        <>
            <nav className="nav-bar">
                <div className="nav-icons w-100 d-flex flex-lg-column flex-md-row flex-row align-items-center justify-content-between justify-content-xl-center">
                    {
                        NavData.map((elem, ind) =>
                            <Tooltip key={ind} title={elem.name} placement="right" arrow>
                                <Link
                                    className={`nav-elem ${currentPath === elem.path ? "nav-active" : ""}`}
                                    to={elem.path}>
                                    {elem.icon}
                                </Link>
                            </Tooltip>
                        )
                    }
                </div>
            </nav>
        </>
    );
};