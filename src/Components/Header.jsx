// Header Component: Header.jsx
import React from 'react';
// Importing Data:
import HeaderData from "../SubComponents/HeaderData.jsx";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header className="header-section">
        <h4 className="header-name">
          <p>A</p>D<p>A</p>RSH
        </h4>
        <div className="social-box">
          {
            HeaderData.map((elem, ind) =>
              <Link
                className="social-icons"
                key={ind}
                to={elem.link}>
                {elem.logo}
              </Link>
            )
          }
        </div>
      </header>
    </>
  );
};