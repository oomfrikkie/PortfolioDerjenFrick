import { Link } from 'react-router-dom'
import './nav.css'

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner container">
        <Link to="/" className="nav-logo" aria-label="Derjen Frick — home">
          Derjen Frick
        </Link>

        <nav className="nav-links" aria-label="Main">
          <Link to="/#work">Work</Link>
          <Link to="/#about">About</Link>
          <Link to="/#contact">Contact</Link>
          <a href="/Derjen_Frick_cv.pdf" className="nav-cv" target="_blank" rel="noopener noreferrer">
            CV
          </a>
        </nav>
      </div>
    </header>
  )
}
