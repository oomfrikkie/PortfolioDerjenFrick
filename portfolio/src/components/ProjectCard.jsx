import { Link } from 'react-router-dom'
import PROJECT_TYPES from '../data/projectTypes'
import './projectcard.css'

export default function ProjectCard({ project }) {
  const isPhone = project.device === 'mobile'

  return (
    <li>
      <Link to={`/projects/${project.slug}`} className="card">
        <div className="card-text">
          <p className="label">{PROJECT_TYPES[project.type]?.card}</p>
          <h3 className="card-title">{project.title}</h3>
          <p className="card-summary">{project.summary}</p>
          <span className="card-more link">Learn more ›</span>
        </div>

        {isPhone ? (
          <div className="card-media is-phone">
            <div className="phone">
              <img src={project.cover} alt="" loading="lazy" />
            </div>
          </div>
        ) : (
          <div className="card-media">
            <img src={project.cover} alt="" loading="lazy" />
          </div>
        )}
      </Link>
    </li>
  )
}
