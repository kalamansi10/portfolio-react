interface Project {
  name: string;
  description: string;
  technologies: string[];
  source_code_link: string;
  live_preview_link: string;
  preview_images: string[];
}

interface ProjectWrapperProps {
  project: Project;
}

const ProjectWrapper: React.FC<ProjectWrapperProps> = ({ project }) => {
  const mapTechStack = () => {
    return project.technologies.map((technology: string, index: number) => (
      <li key={index}>{technology}</li>
    ));
  };

  return (
    <div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <h4>Technologies</h4>
      <ul>{mapTechStack()}</ul>
      <a href={project.source_code_link}>
        <button className="btn-2">Source Code</button>
      </a>
      <a href={project.live_preview_link}>
        <button className="btn-1">Live Preview</button>
      </a>
    </div>
  );
};

export default ProjectWrapper;
