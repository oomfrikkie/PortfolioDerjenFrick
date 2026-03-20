import './projectcard.css'

export default function ProjectCard({ title, description, image, onClick }) {
    return (
        <article className="project-card-container" onClick={onClick} style={onClick ? { cursor: "pointer" } : {}}>
            {image && (
                <figure className="project-card-image-wrapper">
                    <img src={image} alt={title} className="project-card-image" />
                </figure>
            )}
            <header className="project-card-information-container">
                <h2>{title}</h2>
                <p>{description}</p>
            </header>
        </article>
    );
}