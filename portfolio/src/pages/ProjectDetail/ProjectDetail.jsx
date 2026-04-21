import { useParams } from "react-router-dom";
import projects from "../../data/projects.json";
import "./projectdetail.css";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <div className="project-detail-not-found">Project not found</div>;
  }

  return (
    <section className="project-detail-container">
      <h1 className="project-detail-title">{project.title}</h1>
      <p className="project-detail-description">{project.description}</p>
      {project.image1 && project.image2 && (
        <div className="project-detail-images">
          <div className="project-detail-image-block">
            <img src={project.image1} alt={project.image1description || "Project screenshot 1"} className="project-detail-image" />
            {project.image1description && (
              <div className="project-detail-image-description">{project.image1description}</div>
            )}
          </div>
          <div className="project-detail-image-block">
            <img src={project.image2} alt={project.image2description || "Project screenshot 2"} className="project-detail-image" />
            {project.image2description && (
              <div className="project-detail-image-description">{project.image2description}</div>
            )}
          </div>
        </div>
      )}
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-detail-link">
        View Project
      </a>
    </section>
  );
}
