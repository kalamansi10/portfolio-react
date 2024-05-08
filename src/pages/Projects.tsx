import projects from "../projects.json";
import ProjectWrapper from "../components/ProjectWrapper";

interface Project {
  name: string;
  description: string;
  technologies: string[];
  source_code_link: string;
  live_preview_link: string;
  preview_images: string[];
}

const Projects: React.FC = () => {
  const renderProjects = () => {
    return projects.map((project: Project, index: number) => {
      return <ProjectWrapper key={index} project={project} />;
    });
  };

  return (
    <div className="project-page">
      <h1>Projects</h1>
      {renderProjects()}
    </div>
  );
};

export default Projects;
