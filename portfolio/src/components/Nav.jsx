import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import renders from '../data/renders'
import './nav.css'

const SECTIONS = [
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  ...(renders.length > 0 ? [{ id: 'blender', label: 'Blender' }] : []),
  { id: 'contact', label: 'Contact' },
]

const CV = '/Derjen_Frick_cv.pdf'

export default function Nav() {
  const { pathname } = useLocation()
  // The menu remembers which page it was opened on, so it closes by itself on navigation
  const [openOn, setOpenOn] = useState(null)
  const open = openOn === pathname
  const setOpen = (value) => setOpenOn(value ? pathname : null)

  // Esc closes the menu, and the page behind it can't scroll while it's open
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpenOn(null)
    document.documentElement.classList.add('menu-open')
    window.addEventListener('keydown', onKey)
    return () => {
      document.documentElement.classList.remove('menu-open')
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  // On the home page, scroll straight to the section, even if the URL already has that #hash
  const goTo = (id) => (e) => {
    setOpen(false)
    if (pathname !== '/') return
    const el = document.getElementById(id)
    if (!el) return
    e.preventDefault()
    el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header className={`nav ${open ? 'is-open' : ''}`}>
        <div className="nav-inner container">
          <Link to="/" className="nav-logo" aria-label="Derjen Frick, home" onClick={() => setOpen(false)}>
            Derjen Frick
          </Link>

          <nav className="nav-links" aria-label="Main">
            {SECTIONS.map((s) => (
              <Link key={s.id} to={`/#${s.id}`} onClick={goTo(s.id)}>{s.label}</Link>
            ))}
            <a href={CV} className="nav-cv" target="_blank" rel="noopener noreferrer">CV</a>
          </nav>

          <button
            type="button"
            className="nav-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Outside the header: its backdrop-filter would trap a fixed-position child inside the bar */}
      <nav id="mobile-menu" className="nav-menu" aria-label="Main" hidden={!open}>
        <ul className="container">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <Link to={`/#${s.id}`} onClick={goTo(s.id)}>{s.label}</Link>
            </li>
          ))}
          <li>
            <a href={CV} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
              Download CV
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}
