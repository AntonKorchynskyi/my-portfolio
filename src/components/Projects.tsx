import { useState } from "react";
import backgroundImage from "../assets/background.jpg";
import { config } from "../config";

interface Project {
  title: string;
  problem: string;
  process: string;
  outcome: string;
  stack: string[];
  image: string;
  githubUrl: string;
  demoUrl?: string;
  metrics?: string;
}

const projects: Project[] = [
  {
    title: "SoundHouseFun",
    problem: "Needed a scalable e-commerce platform for music equipment sales with secure authentication, payment processing, and administrative tools.",
    process: "Built a full-stack application using ASP.NET Core with C# for the backend API, implementing role-based authentication and authorization. Designed and implemented MS SQL database schema for products, orders, and user management. Created admin dashboard for inventory and order management.",
    outcome: "Delivered a production-ready e-commerce platform with secure payment integration, user authentication, and comprehensive admin tools.",
    stack: ["ASP.NET", "C#", "MS SQL"],
    image: backgroundImage,
    githubUrl: config.github + "/soundhousefun", // TODO: Update with actual repo path
  },
  {
    title: "Portfolio MVP",
    problem: "Required a modern, accessible portfolio website that showcases work effectively while maintaining fast load times and excellent user experience.",
    process: "Developed a responsive single-page application using React and TypeScript with Vite for optimal build performance. Implemented smooth scrolling navigation, accessible components following WCAG guidelines, and optimized asset loading.",
    outcome: "Created a fast, accessible portfolio site with clear information architecture and modern design that effectively communicates value proposition to recruiters.",
    stack: ["React", "TypeScript", "Vite"],
    image: backgroundImage,
    githubUrl: config.github + "/portfolio-mvp", // TODO: Update with actual repo path
  },
];

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleExpand = (title: string) => {
    setExpandedProject(expandedProject === title ? null : title);
  };

  return (
    <section className="section" id="projects">
      <p className="section-kicker">Projects</p>
      <h2>Web Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <img
              alt={`${project.title} preview`}
              loading="lazy"
              src={project.image}
              className="project-image"
            />
            <div className="project-card-body">
              <h3>{project.title}</h3>
              <div className="project-stack-badges">
                {project.stack.map((tech) => (
                  <span key={tech} className="stack-badge">
                    {tech}
                  </span>
                ))}
              </div>
              {expandedProject === project.title ? (
                <div className="project-case-study">
                  <div className="case-study-section">
                    <h4>Problem</h4>
                    <p>{project.problem}</p>
                  </div>
                  <div className="case-study-section">
                    <h4>Process</h4>
                    <p>{project.process}</p>
                  </div>
                  <div className="case-study-section">
                    <h4>Outcome</h4>
                    <p>{project.outcome}</p>
                    {project.metrics && (
                      <p className="project-metrics">{project.metrics}</p>
                    )}
                  </div>
                  <button
                    className="project-toggle-btn"
                    onClick={() => toggleExpand(project.title)}
                  >
                    Show Less
                  </button>
                </div>
              ) : (
                <>
                  <p className="project-summary">{project.outcome}</p>
                  <button
                    className="project-toggle-btn"
                    onClick={() => toggleExpand(project.title)}
                  >
                    View Case Study
                  </button>
                </>
              )}
              <div className="project-links">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link project-link-demo"
                  >
                    View Live Demo
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link project-link-code"
                >
                  View Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
