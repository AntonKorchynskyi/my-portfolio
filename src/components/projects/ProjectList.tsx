import { GitHubIcon } from "../ui/Icons";
import "./ProjectList.css";

export interface ListedProject {
  slug: string;
  name: string;
  description: string;
  stack: string[];
  codeUrl: string;
}

interface ProjectListProps {
  projects: ListedProject[];
}

// Compact ruled list for secondary projects under the featured cards.
const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <>
      <h3 className="project-list-title">More projects</h3>
      <ul className="project-list">
        {projects.map((project) => (
          <li key={project.slug} className="project-list-row">
            <span className="project-list-name">{project.name}</span>
            <span className="project-list-desc">{project.description}</span>
            <span className="project-list-stack mono">{project.stack.join(" · ")}</span>
            <a
              className="link-btn"
              href={project.codeUrl}
              target="_blank"
              rel="noreferrer"
              data-track={`code/${project.slug}`}
            >
              <GitHubIcon size={16} />
              Code<span className="sr-only"> for {project.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProjectList;
