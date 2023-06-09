import React, { useState } from "react";
import { FaReact, FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

import "./Navbar.css";

const data = [
  {
    label: "HOME",
    to: "/",
  },

  {
    label: "ABOUT ME",
    to: "/about",
  },

  {
    label: "PROJECTS",
    to: "/project",
  },
];

export const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-container-logo">
            <FaReact size={30} />
          </Link>
        </div>
        <ul className={`navbar-container-menu ${toggleIcon ? "active" : ""}`}>
          {data.map((item, index) => (
            <li key={index} className="navbar-container-menu-item">
              <Link className="navbar-container-menu-item-links" to={item.to}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};
