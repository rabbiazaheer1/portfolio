import { projects } from "../data/projects";

export default function Projects() {
  return <section className="section" id="projects">
    <h2 className="section-title">My Projects</h2>
    <div className="projects-grid">
      {projects.map(project => <article className="project-card" key={project.title}>
        <img src={project.image} alt={`${project.title} Website`} className="project-image" />
        <div className="project-info">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-tech">{project.tech.map(t => <span className="tech-item" key={t}>{t}</span>)}</div>
          <div className="project-links">
            <a className="project-link" href={project.live} target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"></i> Live Demo</a>
            {project.github && <a className="project-link github-link" href={project.github} target="_blank" rel="noreferrer"><i className="fab fa-github"></i> GitHub</a>}
          </div>
        </div>
      </article>)}
    </div>
  </section>;
}
