import soundHouseFunIMage from "../assets/projects/SoundHouseFun2.png";
import boardverse from "../assets/projects/boardverse2.png";
import noAddict from "../assets/projects/no-addict.png";
import mailSheet from "../assets/projects/mailsheet.png";
import movieNest from "../assets/projects/movienest.png";
import chartLab from "../assets/projects/chartlab.png";
import { toSlug } from "../utils/analytics";

interface Project {
  title: string;
  description: string;
  stack: string[];
  image: string;
  githubUrl: string;
  demoUrl?: string;
  metrics?: string;
}

const projects: Project[] = [
  {
    title: "Chart Lab",
    description:
      "A full-stack playground that renders the same revenue datasets with six charting libraries (Chart.js, Recharts, Nivo, ECharts, D3, and Observable Plot) so they can be compared side by side. The React and TypeScript frontend is served by a FastAPI and PostgreSQL backend running in Docker.",
    stack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Docker"],
    image: chartLab,
    githubUrl: "https://github.com/AntonKorchynskyi/chart-lab",
  },
  {
    title: "BoardVerse",
    description:
      "A web platform for discovering and playing board games online, with user accounts and player profiles that track stats. Includes real-time multiplayer Tic-Tac-Toe built on boardgame.io.",
    stack: ["Next.js", "React", "Tailwind CSS", "boardgame.io", "Python (Flask)"],
    image: boardverse,
    githubUrl: "https://github.com/AntonKorchynskyi/boardverse-frontend",
  },
  {
    title: "SoundHouseFun",
    description:
      "A full-stack e-commerce music store with Stripe payments, Google sign-in, and an admin dashboard for managing content. Built with ASP.NET and C# on an MS SQL database.",
    stack: ["ASP.NET", "C#", "MS SQL", "Stripe API", "Google OAuth"],
    image: soundHouseFunIMage,
    githubUrl: "https://github.com/AntonKorchynskyi/SoundHouseFun_ASPNET",
  },
  {
    title: "MovieNest",
    description:
      "An Android app for searching OMDb movie titles, viewing rich details, and keeping a personal watchlist. Firebase Authentication and Firestore sync favorites to the cloud, on an MVVM architecture.",
    stack: ["Java", "Android SDK", "MVVM", "Firebase", "OMDb API"],
    image: movieNest,
    githubUrl: "https://github.com/AntonKorchynskyi/MovieNest",
  },
  {
    title: "No Addict",
    description:
      "A lightweight Chrome extension that blocks distracting websites by domain or specific URL. Blocking can be switched on and off, and blocked pages are cleared before they load.",
    stack: ["JavaScript", "HTML", "CSS", "Chrome Extensions"],
    image: noAddict,
    githubUrl: "https://github.com/AntonKorchynskyi/no-addict",
  },
  {
    title: "MailSheet Automator",
    description:
      "A Python tool that validates Excel spreadsheet data and generates standardized email addresses from it. It then sends bulk HTML emails through Microsoft Outlook automatically.",
    stack: ["Python", "openpyxl", "PyInputPlus", "Outlook COM API"],
    image: mailSheet,
    githubUrl: "https://github.com/AntonKorchynskyi/MailSheet-Automator",
  },
];

const Projects = () => {
  const ExternalLinkIcon = () => (
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
  );

  return (
    <section className="section" id="projects">
      <p className="section-kicker">Projects</p>
      <h2>Selected Projects</h2>
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

              <p className="project-summary">{project.description}</p>

              <div className="project-links">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                    aria-label={`View live demo for ${project.title}`}
                    data-track={`demo/${toSlug(project.title)}`}
                  >
                    View Live Demo
                    <ExternalLinkIcon />
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                  aria-label={`View source code for ${project.title}`}
                  data-track={`code/${toSlug(project.title)}`}
                >
                  View Source Code
                  <ExternalLinkIcon />
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
