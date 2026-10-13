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
    title: "BoardVerse",
    description:
      "BoardVerse is a web platform for discovering and playing board games online, featuring user accounts, player profiles with stats, and real-time multiplayer Tic-Tac-Toe. Built with Next.js, Tailwind CSS, and boardgame.io.",
    stack: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "Python (Flask)",
    ],
    image: boardverse,
    githubUrl: "https://github.com/AntonKorchynskyi/boardverse-frontend",
  },
  {
    title: "SoundHouseFun",
    description:
      "A full-stack e-commerce music store featuring Stripe payment integration, Google authentication, an admin dashboard for content management, and an MS SQL database backend, built with ASP.NET and C#.",
    stack: [
      "ASP.NET",
      "C#",
      "MS SQL",
      "Stripe API",
      "Bootstrap",
      "Google oAuth",
    ],
    image: soundHouseFunIMage,
    githubUrl: "https://github.com/AntonKorchynskyi/SoundHouseFun_ASPNET",
  },
  {
    title: "No Addict",
    description:
      "No Addict is a lightweight Chrome extension that helps users reduce digital distraction by blocking access to selected websites. Users can add domains or specific URLs they want to avoid, enable or disable blocking as needed, and automatically prevent those pages from loading by clearing their content.",
    stack: ["JavaScript", "HTML", "CSS", "Google Chrome"],
    image: noAddict,
    githubUrl: "https://github.com/AntonKorchynskyi/no-addict",
  },
  {
    title: "Chart Lab",

    description:
      "Chart Lab is a full-stack data visualization playground for comparing charting libraries by rendering the same revenue datasets with Chart.js, Recharts, Nivo, ECharts, D3, and Observable Plot.",

    stack: [
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Chart.js",
      "Recharts",
      "Nivo",
      "ECharts",
      "D3",
      "Observable Plot",
    ],
    image: chartLab,
    githubUrl: "https://github.com/AntonKorchynskyi/chart-lab",
  },
  {
    title: "MovieNest",
    description:
      "Android movie discovery app with Firebase authentication and cloud favorites, enabling users to search OMDb titles, view rich details, and manage personalized watchlists through an MVVM architecture and RecyclerView interface.",
    stack: [
      "Java",
      "Android SDK",
      "MVVM",
      "Firebase Authentication",
      "Firebase Firestore",
      "OMDb API",
      "Gradle",
    ],
    image: movieNest,
    githubUrl: "https://github.com/AntonKorchynskyi/MovieNest",
  },
  {
    title: "MailSheet Automator",
    description:
      "Python automation tool that processes Excel spreadsheets to validate and generate standardized email addresses, then automatically sends bulk HTML emails through Microsoft Outlook. Built using openpyxl, PyInputPlus, and the Outlook COM API.",
    stack: ["Python", "openpyxl", "PyInputPlus", "pywin32 (Outlook COM API)"],
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
