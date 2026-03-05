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
    problem:
      "Needed a scalable e-commerce platform for music equipment sales with secure authentication, payment processing, and administrative tools.",
    process:
      "Built a full-stack application using ASP.NET Core with C# for the backend API, implementing role-based authentication and authorization. Designed and implemented MS SQL database schema for products, orders, and user management. Created admin dashboard for inventory and order management.",
    outcome:
      "Delivered a production-ready e-commerce platform with secure payment integration, user authentication, and comprehensive admin tools.",
    stack: ["ASP.NET", "C#", "MS SQL"],
    image: backgroundImage,
    githubUrl: config.github + "/soundhousefun", // TODO: Update with actual repo path
  },
  {
    title: "Portfolio MVP",
    problem:
      "Required a modern, accessible portfolio website that showcases work effectively while maintaining fast load times and excellent user experience.",
    process:
      "Developed a responsive single-page application using React and TypeScript with Vite for optimal build performance. Implemented smooth scrolling navigation, accessible components following WCAG guidelines, and optimized asset loading.",
    outcome:
      "Created a fast, accessible portfolio site with clear information architecture and modern design that effectively communicates value proposition to recruiters.",
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

              <p className="project-summary">{project.outcome}</p>

              <div className="project-links">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="cert-card__cta"
                  >
                    View Live Demo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="cert-card__cta"
                >
                  View Source Code
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
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
