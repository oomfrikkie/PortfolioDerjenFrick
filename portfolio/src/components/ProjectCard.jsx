import { Link } from 'react-router-dom'
import './projectcard.css'

export default function ProjectCard({ project }) {
  const typeLabel = project.type === 'university' ? 'University · Team' : 'Personal'

  return (
    <li>
      <Link to={`/projects/${project.slug}`} className="card">
        <div className="card-text">
          <p className="label">{typeLabel}</p>
          <h3 className="card-title">{project.title}</h3>
          <p className="card-summary">{project.summary}</p>
          <span className="card-more link">Learn more ›</span>
        </div>

        <div className="card-media">
          <img
            src={project.cover}
            alt=""
            loading="lazy"
            className={project.device === 'mobile' ? 'is-mobile' : ''}
          />
        </div>
      </Link>
    </li>
  )
}
