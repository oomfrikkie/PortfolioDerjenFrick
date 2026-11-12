import { Link } from 'react-router-dom'
import './projectrow.css'

export default function ProjectRow({ project, index }) {
  const num = String(index + 1).padStart(2, '0')
  const typeLabel = project.type === 'university' ? 'University · Team' : 'Personal'

  return (
    <li>
      <Link to={`/projects/${project.slug}`} className="row">
        <span className="row-num mono">{num}</span>

        <div className="row-thumb">
          <img
            src={project.cover}
            alt=""
            loading="lazy"
            className={project.device === 'mobile' ? 'is-mobile' : ''}
          />
        </div>

        <div className="row-body">
          <h3 className="row-title">{project.title}</h3>
          <p className="row-summary">{project.summary}</p>
        </div>

        <div className="row-meta">
          <span className="mono">{typeLabel}</span>
          <span className="row-arrow" aria-hidden="true">→</span>
        </div>
      </Link>
    </li>
  )
}
