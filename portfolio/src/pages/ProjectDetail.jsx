import { Link, useParams } from 'react-router-dom'
import projects from '../data/projects.json'
import PROJECT_TYPES from '../data/projectTypes'
import useDocumentTitle from '../hooks/useDocumentTitle'
import NotFound from './NotFound'
import './projectdetail.css'

// Screenshots narrower than this are shown at their real size instead of stretched
const SMALL_IMAGE = 900

function Shot({ image, title, eager }) {
  const isSmall = image.width < SMALL_IMAGE

  return (
    <figure className="shot">
      <div className={`shot-frame ${isSmall ? 'is-small' : ''}`}>
        <img
          src={image.src}
          alt={image.caption || `${title} screenshot`}
          width={image.width}
          height={image.height}
          loading={eager ? 'eager' : 'lazy'}
          style={isSmall ? { maxWidth: image.width } : undefined}
        />
      </div>
      {image.caption && <figcaption>{image.caption}</figcaption>}
    </figure>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]
  useDocumentTitle(project?.title ?? 'Not found')

  if (!project) return <NotFound />

  const next = projects[(index + 1) % projects.length]
  const isPhone = project.device === 'mobile'
  const [hero, ...rest] = project.images

  return (
    <article className="detail container" key={project.slug}>
      <Link to="/#projects" className="detail-back">‹ All projects</Link>

      <header className="detail-head enter">
        <p className="label">{PROJECT_TYPES[project.type]?.detail}</p>
        <h1 className="detail-title">{project.title}</h1>
        <p className="detail-lede">{project.summary}</p>

        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            {project.linkLabel || 'View project'}
          </a>
        )}
      </header>

      {/* Lead visual: one big screenshot, or the phone screens side by side */}
      {isPhone ? (
        <div className="phones">
          {project.images.map((img, i) => (
            <figure key={img.src}>
              <div className="phone">
                <img
                  src={img.src}
                  alt={img.caption || `${project.title} screen`}
                  width={img.width}
                  height={img.height}
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
              </div>
              {img.caption && <figcaption>{img.caption}</figcaption>}
            </figure>
          ))}
        </div>
      ) : (
        hero && <Shot image={hero} title={project.title} eager />
      )}

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
              <p className="label">Built with</p>
              <ul className="detail-tags">
                {project.stack.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          )}
        </aside>
      </div>

      {!isPhone && rest.length > 0 && (
        <div className="detail-gallery">
          {rest.map((img) => (
            <Shot key={img.src} image={img} title={project.title} />
          ))}
        </div>
      )}

      <Link to={`/projects/${next.slug}`} className="detail-next">
        <span className="label">Next project</span>
        <span className="detail-next-title">
          {next.title} <span aria-hidden="true">›</span>
        </span>
      </Link>
    </article>
  )
}
