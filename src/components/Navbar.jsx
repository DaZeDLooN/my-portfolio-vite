import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Lionel Serrao</h2>
      <div className="links">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
          About
        </NavLink>
        <NavLink to="/experience" className={({ isActive }) => isActive ? 'active' : ''}>
          Experience
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>
          Projects
        </NavLink>
        <NavLink to="/certifications" className={({ isActive }) => isActive ? 'active' : ''}>
          Certifications
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
          Contact
        </NavLink>
        <a href="/LionelJSerrao_220968368_DSE.pdf" download>
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

