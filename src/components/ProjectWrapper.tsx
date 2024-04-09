import React from "react";
import ImageSlider from "./ImageSlider";
import useRandomizer from "../hooks/useRandomizer";

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
  const { getColor, getRandomTilt } = useRandomizer();

  const mapTechStack = () => {
    return project.technologies.map((technology: string, index: number) => (
      <li
        className="tech-item"
        key={index}
        style={{
          transform: getRandomTilt(),
          display: "inline-block",
          backgroundColor: getColor(),
        }}
      >
        {technology}
      </li>
    ));
  };

  function renderLiveLink() {
    if (project.live_preview_link.length) {
      return (
        <a href={project.live_preview_link}>
          <button className="btn-1">Live Preview</button>
        </a>
      );
    } else {
      return (
        <a href="#">
          <button className="btn-3">No Preview</button>
        </a>
      );
    }
  }

  return (
    <div className="project-wrapper">
      <section className="proj-preview">
        <ImageSlider imageLinks={project.preview_images} />
      </section>
      <section className="proj-description">
        <h3>{project.name}</h3>
        <br />
        <p>{project.description}</p>
        <div className="proj-links">
          <a href={project.source_code_link}>
            <button className="btn-2">Source Code</button>
          </a>
          {renderLiveLink()}
        </div>
      </section>
      <section className="proj-tech">
        <h4>Technologies</h4>
        <ul className="tech-list">{mapTechStack()}</ul>
      </section>
    </div>
  );
};

export default ProjectWrapper;
