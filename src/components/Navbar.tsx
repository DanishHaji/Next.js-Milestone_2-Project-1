'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaHome, FaUser, FaLaptopCode, FaInfoCircle, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <a className="navbar-brand">
          Danish <span className="brand-highlight">Haji</span>
        </a>

        <div className="menu-icon" onClick={toggleMenu}>
          {!isMenuOpen ? <FaBars /> : <FaTimes />}
        </div>

        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link href="/" className="navbar-link">
              <FaHome /> Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link href="/about" className="navbar-link">
              <FaUser /> About
            </Link>
          </li>
          <li className="navbar-item">
            <Link href="/project" className="navbar-link">
              <FaLaptopCode /> Projects
            </Link>
          </li>
          <li className="navbar-item">
            <Link href="/skills" className="navbar-link">
              <FaInfoCircle /> Skills
            </Link>
          </li>
          <li className="navbar-item">
            <Link href="/contact" className="navbar-link">
              <FaEnvelope /> Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
