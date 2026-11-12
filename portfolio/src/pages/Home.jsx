import { useState } from 'react'
import projects from '../data/projects.json'
import ProjectRow from '../components/ProjectRow'
import './home.css'

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'personal', label: 'Personal' },
  { key: 'university', label: 'University' },
]

const TOOLKIT = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'Java', 'C#', 'PHP'] },
  { group: 'Backend', items: ['NestJS', '.NET', 'TypeORM', 'REST APIs', 'JWT / OAuth'] },
  { group: 'Frontend', items: ['React', 'React Native', 'Vite', 'Tailwind CSS'] },
  { group: 'Data & infra', items: ['PostgreSQL', 'MariaDB', 'Docker'] },
]

const EMAIL = 'derjen.frick@gmail.com'

export default function Home() {
  const [filter, setFilter] = useState('all')
  const visible = filter === 'all' ? projects : projects.filter((p) => p.type === filter)
  const count = (key) => (key === 'all' ? projects.length : projects.filter((p) => p.type === key).length)

  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="hero container">
        <div className="hero-text enter">
          <p className="hero-status mono">
            <span className="dot" aria-hidden="true" />
            Full-stack developer · Netherlands
          </p>

          <h1 className="hero-title">
            Derjen Frick.
            <span> I build web apps from the database up.</span>
          </h1>

          <p className="hero-intro">
            Backend-leaning full-stack developer and IT student at NHL Stenden. I like
            designing APIs, modelling data and containerising things, then building a clean
            frontend on top.
          </p>

          <div className="hero-actions">
            <a href="#work" className="btn btn-primary">See my work ↓</a>
            <a href="/Derjen_Frick_cv.pdf" className="btn" target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </div>
        </div>

        <figure className="hero-photo enter" style={{ animationDelay: '0.1s' }}>
          <img src="/me.jpg" alt="Portrait of Derjen Frick" width="880" height="1100" />
        </figure>
      </section>

      {/* ── Work ─────────────────────────────────────── */}
      <section id="work" className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">
              <span className="label">01 — Work</span>
              Selected projects
            </h2>

            <div className="filters" role="tablist" aria-label="Filter projects">
              {FILTERS.map((f) => (
                <button
                  key={f.key}
                  role="tab"
                  aria-selected={filter === f.key}
                  className={`filter ${filter === f.key ? 'is-active' : ''}`}
                  onClick={() => setFilter(f.key)}
                >
                  {f.label}
                  <span className="mono">{count(f.key)}</span>
                </button>
              ))}
            </div>
          </div>

          <ul className="rows">
            {visible.map((p) => (
              <ProjectRow key={p.slug} project={p} index={projects.indexOf(p)} />
            ))}
          </ul>
        </div>
      </section>

      {/* ── About ────────────────────────────────────── */}
      <section id="about" className="section">
        <div className="container about">
          <div>
            <h2 className="section-title">
              <span className="label">02 — About</span>
              From game dev to backend.
            </h2>

            <div className="about-text">
              <p>
                I grew up in South Africa and moved to the Netherlands to study. I started out in
                game development, because I wanted to know how the games I played were actually
                built. That curiosity spread to everything else: websites, APIs, databases and
                how it all fits together.
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
            <p className="label">Toolkit</p>
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

      {/* ── Contact ──────────────────────────────────── */}
      <section id="contact" className="section">
        <div className="container contact">
          <span className="label">03 — Contact</span>
          <h2 className="contact-title">
            Got a role, a project or a question?
            <span> Let's talk.</span>
          </h2>

          <a href={`mailto:${EMAIL}`} className="contact-email">
            {EMAIL} <span aria-hidden="true">↗</span>
          </a>

          <ul className="contact-links">
            <li>
              <a href="https://github.com/oomfrikkie" target="_blank" rel="noopener noreferrer">
                <span className="label">GitHub</span>
                <span>@oomfrikkie ↗</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/derjen-frick-775714262/" target="_blank" rel="noopener noreferrer">
                <span className="label">LinkedIn</span>
                <span>Derjen Frick ↗</span>
              </a>
            </li>
            <li>
              <a href="tel:+31686133826">
                <span className="label">Phone</span>
                <span>+31 6 8613 3826</span>
              </a>
            </li>
            <li>
              <a href="/Derjen_Frick_cv.pdf" download>
                <span className="label">CV</span>
                <span>Download PDF ↓</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
