import './navbar.css';
import { useLocation, useNavigate } from 'react-router-dom';

export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNav = (section) => {
    if (location.pathname === '/home') {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/home#${section}`);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <a href="/">Derjen Frick</a>
        </div>
        <div className="nav-links">
          <button className="nav-link-btn" onClick={() => handleNav('about')}>About</button>
          <button className="nav-link-btn" onClick={() => handleNav('projects')}>Projects</button>
          <button className="nav-link-btn" onClick={() => handleNav('contact')}>Contact</button>
        </div>
      </div>
    </nav>
  );
}