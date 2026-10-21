import { ArrowUpRightIcon, GitHubIcon } from "../ui/Icons";
import SpotlightCard from "../ui/SpotlightCard";
import "./ProjectCard.css";

export interface ProjectImage {
  src600: string;
  src1200: string;
  alt: string;
}

export interface Project {
  slug: string;
  title: string;
  problem: string;
  built: string;
  tags: string[];
  codeUrl: string;
  // When set, a "Live" button links to the running site.
  liveUrl?: string;
  // Without an image the frame shows a placeholder tile with the title and tags.
  image?: ProjectImage;
}

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const ProjectShot = ({ project, featured }: ProjectCardProps) => (
  <div className="project-shot">
    <div className="project-frame-bar" aria-hidden="true">
      <span />
      <span />
      <span />
      <span className="project-frame-url mono">{project.slug}</span>
    </div>
    <div className="project-shot-media">
      {project.image ? (
        <img
          src={project.image.src1200}
          srcSet={`${project.image.src600} 600w, ${project.image.src1200} 1200w`}
          sizes={
            featured
              ? "(max-width: 900px) 100vw, 640px"
              : "(max-width: 900px) 100vw, 560px"
          }
          alt={project.image.alt}
          loading="lazy"
          width="1200"
          height="800"
        />
      ) : (
        <div className="project-placeholder" aria-hidden="true">
          <span className="project-placeholder-title">{project.title}</span>
          <span className="project-placeholder-tags mono">
            {project.tags.join(" · ")}
          </span>
        </div>
      )}
    </div>
  </div>
);

// Case-study card: screenshot in a minimal browser frame, problem, what was
// built, tags, and Live demo (only when a URL exists) plus Code.
const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
  return (
    <SpotlightCard className="project-card-wrap">
      <article className={`project-card${featured ? " is-featured" : ""}`}>
        <ProjectShot project={project} featured={featured} />
        <div className="project-body">
          {featured && <p className="project-featured mono">Featured</p>}
          <h3 className="project-title">{project.title}</h3>
          <p className="project-problem">{project.problem}</p>
          <p className="project-built">{project.built}</p>
          <ul className="tags project-tags" aria-label="Tech used">
            {project.tags.map((tag) => (
              <li key={tag} className="tag">
                {tag}
              </li>
            ))}
          </ul>
          <div className="project-actions">
            {project.liveUrl && (
              <a
                className="btn btn-primary btn-small"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                data-track={`demo/${project.slug}`}
              >
                Live<span className="sr-only"> site for {project.title}</span>
                <ArrowUpRightIcon />
              </a>
            )}
            <a
              className="link-btn"
              href={project.codeUrl}
              target="_blank"
              rel="noreferrer"
              data-track={`code/${project.slug}`}
            >
              <GitHubIcon size={16} />
              Code<span className="sr-only"> for {project.title}</span>
            </a>
          </div>
        </div>
      </article>
    </SpotlightCard>
  );
};

export default ProjectCard;
