import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import projects from '../data/projects.json'
import PROJECT_TYPES from '../data/projectTypes'
import useDocumentTitle from '../hooks/useDocumentTitle'
import Lightbox from '../components/Lightbox'
import NotFound from './NotFound'
import './projectdetail.css'

// Screenshots narrower than this are shown at their real size instead of stretched
const SMALL_IMAGE = 900

function Shot({ image, title, eager, onOpen }) {
  const isSmall = image.width < SMALL_IMAGE

  return (
    <figure className="shot">
      <button
        type="button"
        className={`shot-frame ${isSmall ? 'is-small' : ''}`}
        onClick={onOpen}
        aria-label={`Enlarge: ${image.caption || 'screenshot'}`}
      >
        <img
          src={image.src}
          alt={image.caption || `${title} screenshot`}
          width={image.width}
          height={image.height}
          loading={eager ? 'eager' : 'lazy'}
          style={isSmall ? { maxWidth: image.width } : undefined}
        />
        <span className="shot-zoom" aria-hidden="true">Tap to enlarge</span>
      </button>
      {image.caption && <figcaption>{image.caption}</figcaption>}
    </figure>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]
  const [viewing, setViewing] = useState(null) // index into project.images
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
              <button
                type="button"
                className="phone"
                onClick={() => setViewing(i)}
                aria-label={`Enlarge: ${img.caption || 'screen'}`}
              >
                <img
                  src={img.src}
                  alt={img.caption || `${project.title} screen`}
                  width={img.width}
                  height={img.height}
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
              </button>
              {img.caption && <figcaption>{img.caption}</figcaption>}
            </figure>
          ))}
        </div>
      ) : (
        hero && <Shot image={hero} title={project.title} eager onOpen={() => setViewing(0)} />
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
          {rest.map((img, i) => (
            <Shot key={img.src} image={img} title={project.title} onOpen={() => setViewing(i + 1)} />
          ))}
        </div>
      )}

      <Link to={`/projects/${next.slug}`} className="detail-next">
        <span className="label">Next project</span>
        <span className="detail-next-title">
          {next.title} <span aria-hidden="true">›</span>
        </span>
      </Link>

      <Lightbox
        label={`${project.title} screenshots`}
        items={project.images}
        index={viewing}
        onChange={setViewing}
      />
    </article>
  )
}
