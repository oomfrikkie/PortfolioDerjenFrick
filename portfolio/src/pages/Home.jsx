import { useState } from 'react'
import projects from '../data/projects.json'
import PROJECT_TYPES from '../data/projectTypes'
import ProjectCard from '../components/ProjectCard'
import BlenderSection from '../components/BlenderSection'
import useDocumentTitle from '../hooks/useDocumentTitle'
import './home.css'

// Only offer a filter for types that actually have projects
const FILTERS = [
  { key: 'all', label: 'All' },
  ...Object.entries(PROJECT_TYPES)
    .filter(([key]) => projects.some((p) => p.type === key))
    .map(([key, type]) => ({ key, label: type.filter })),
]

const TOOLKIT = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'Java', 'C#', 'PHP'] },
  { group: 'Backend', items: ['NestJS', '.NET', 'TypeORM', 'REST APIs', 'JWT / OAuth'] },
  { group: 'Frontend', items: ['React', 'React Native', 'Vite', 'Tailwind CSS'] },
  { group: 'Data & infra', items: ['PostgreSQL', 'MariaDB', 'Docker'] },
  { group: 'Game engines', items: ['Unity', 'Unreal Engine'] },
]

const EMAIL = 'derjen.frick@gmail.com'

export default function Home() {
  useDocumentTitle()
  const [filter, setFilter] = useState('all')
  const visible = filter === 'all' ? projects : projects.filter((p) => p.type === filter)

  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="hero container">
        <img
          className="hero-photo enter"
          src="/avatar.webp"
          alt="Portrait of Derjen Frick"
          width="104"
          height="104"
        />

        <h1 className="hero-title enter" style={{ animationDelay: '0.05s' }}>
          Derjen Frick.
        </h1>

        <p className="hero-lede enter" style={{ animationDelay: '0.1s' }}>
          I build APIs, databases, and the apps on top of them.
        </p>

        <p className="hero-intro enter" style={{ animationDelay: '0.15s' }}>
          Full-stack developer and IT student at NHL Stenden, with a game dev background in
          Unity and Unreal Engine.
        </p>

        <div className="hero-actions enter" style={{ animationDelay: '0.2s' }}>
          <a href="#projects" className="btn btn-primary">See my projects</a>
          <a href="/Derjen_Frick_cv.pdf" className="btn" target="_blank" rel="noopener noreferrer">
            Download CV
          </a>
        </div>
      </section>

      {/* ── Projects ─────────────────────────────────── */}
      <section id="projects" className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Projects.</h2>

            {FILTERS.length > 2 && (
              <div className="filters" role="group" aria-label="Filter projects">
                {FILTERS.map((f) => (
                  <button
                    key={f.key}
                    type="button"
                    aria-pressed={filter === f.key}
                    className={`filter ${filter === f.key ? 'is-active' : ''}`}
                    onClick={() => setFilter(f.key)}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <ul className="cards">
            {visible.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </ul>
        </div>
      </section>

      {/* ── About ────────────────────────────────────── */}
      <section id="about" className="section section-alt">
        <div className="container about">
          <div>
            <h2 className="section-title">From game dev to backend.</h2>

            <div className="about-text">
              <p>
                I grew up in South Africa and moved to the Netherlands to study. I started out in
                game development, building in Unity and Unreal Engine, because I wanted to know
                how the games I played were actually made. That curiosity spread to everything
                else: websites, APIs, databases and how it all fits together.
              </p>
              <p>
                These days I'm studying IT and spend most of my time on the backend: structuring
                data, designing endpoints, handling auth, and running it all in Docker. I still
                enjoy the frontend, but I'm happiest when the system underneath is solid.
              </p>
              <p>
                Outside of code I'm still a gamer, and I play guitar and piano.
              </p>
            </div>
          </div>

          <div className="toolkit">
            <p className="toolkit-title">Toolkit</p>
            <dl>
              {TOOLKIT.map((t) => (
                <div key={t.group} className="toolkit-row">
                  <dt>{t.group}</dt>
                  <dd>{t.items.join(', ')}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── Blender (only renders when src/assets/blender has images) ── */}
      <BlenderSection />

      {/* ── Contact ──────────────────────────────────── */}
      <section id="contact" className="section">
        <div className="container contact">
          <h2 className="section-title">Let's talk.</h2>
          <p className="contact-sub">
            Got a role, a project or a question? Email is the fastest way to reach me.
          </p>

          <a href={`mailto:${EMAIL}`} className="contact-email link">
            {EMAIL} ›
          </a>

          <ul className="contact-links">
            <li>
              <span className="label">GitHub</span>
              <a className="link" href="https://github.com/oomfrikkie" target="_blank" rel="noopener noreferrer">
                @oomfrikkie
              </a>
            </li>
            <li>
              <span className="label">LinkedIn</span>
              <a className="link" href="https://www.linkedin.com/in/derjen-frick-775714262/" target="_blank" rel="noopener noreferrer">
                Derjen Frick
              </a>
            </li>
            <li>
              <span className="label">Phone</span>
              <a className="link" href="tel:+31686133826">+31 6 8613 3826</a>
            </li>
            <li>
              <span className="label">CV</span>
              <a className="link" href="/Derjen_Frick_cv.pdf" download>Download PDF</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
