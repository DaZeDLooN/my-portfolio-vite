import '../styles/projectcard.css';

const ProjectCard = ({ title, description, link, demo, tags, image }) => {
  return (
    <div className="project-card">
      {image && (
        <div className="project-image">
          <img src={image} alt={title} />
        </div>
      )}
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tag-container">
          {tags && tags.map((tag, idx) => (
            <span key={idx} className="tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={link} target="_blank" rel="noopener noreferrer">GitHub</a>
          {demo && <a href={demo} target="_blank" rel="noopener noreferrer">Live Demo</a>}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;


