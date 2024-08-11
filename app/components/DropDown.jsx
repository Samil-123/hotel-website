'use client'

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Importing icons from react-icons

const Dropdown = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="wrapper">
      <div
        id="dd"
        className={`wrapper-dropdown-5 ${isActive ? 'active' : ''}`}
        tabIndex="1"
        onClick={toggleDropdown}
      >
        Relevancy
        <span className="dropdown-icon">
          {isActive ? <FaChevronUp className='text-white'/> : <FaChevronDown  className='text-white' />}
        </span>
        <ul className="dropdown z-50">
          <li>
            <a href="#">
              <i className="icon-user"></i>Profile
            </a>
          </li>
          <li>
            <a href="#">
              <i className="icon-cog"></i>Settings
            </a>
          </li>
          <li>
            <a href="#">
              <i className="icon-remove"></i>Log out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
