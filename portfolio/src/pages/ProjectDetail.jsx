import { Link, useParams } from 'react-router-dom'
import projects from '../data/projects.json'
import NotFound from './NotFound'
import './projectdetail.css'

export default function ProjectDetail() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) return <NotFound />

  const project = projects[index]
  const next = projects[(index + 1) % projects.length]
  const isMobile = project.device === 'mobile'
  const typeLabel = project.type === 'university' ? 'University · Team project' : 'Personal project'

  // Fall back to the cover image when there are no screenshots
  const images = project.images.length
    ? project.images
    : project.cover
      ? [{ src: project.cover, caption: null }]
      : []

  return (
    <article className="detail container" key={project.slug}>
      <Link to="/#work" className="detail-back">‹ All projects</Link>

      <header className="detail-head enter">
        <p className="label">
          {typeLabel}
        </p>
        <h1 className="detail-title">{project.title}</h1>
        <p className="detail-lede">{project.summary}</p>
      </header>

      <div className="detail-grid">
        <div className="detail-body">
          {project.description.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <aside className="detail-aside">
          {project.highlights?.length > 0 && (
            <div>
              <p className="label">Highlights</p>
              <ul className="detail-list">
                {project.highlights.map((h) => <li key={h}>{h}</li>)}
              </ul>
            </div>
          )}

          {project.stack?.length > 0 && (
            <div>
              <p className="label">Stack</p>
              <ul className="detail-tags">
                {project.stack.map((s) => <li key={s} className="mono">{s}</li>)}
              </ul>
            </div>
          )}

          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {project.linkLabel || 'View project'}
            </a>
          )}
        </aside>
      </div>

      {images.length > 0 && (
        <div className={`detail-gallery ${isMobile ? 'is-mobile' : ''}`}>
          {images.map((img, i) => (
            <figure key={img.src}>
              <div className="detail-frame">
                <img src={img.src} alt={img.caption || `${project.title} screenshot`} loading={i ? 'lazy' : 'eager'} />
              </div>
              {img.caption && (
                <figcaption>
                  {img.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      )}

      <Link to={`/projects/${next.slug}`} className="detail-next">
        <span className="label">Next project</span>
        <span className="detail-next-title">
          {next.title} <span aria-hidden="true">→</span>
        </span>
      </Link>
    </article>
  )
}
