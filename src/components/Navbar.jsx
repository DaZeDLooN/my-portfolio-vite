import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/navbar.css'; // Ensure this file exists
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={closeMenu}>Lionel Serrao</Link>
      {/* Hamburger */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </div>
       {/* Nav Links */}
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
        <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
        <li><NavLink to="/experience" onClick={closeMenu}>Experience</NavLink></li>
        <li><NavLink to="/projects" onClick={closeMenu}>Projects</NavLink></li>
        <li><NavLink to="/certifications" onClick={closeMenu}>Certifications</NavLink></li>
        <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
        {/* <li><a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Resume</a></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;

