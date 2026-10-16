import { config } from "../../config";
import boardverse600 from "../../assets/img/boardverse-600.webp";
import boardverse1200 from "../../assets/img/boardverse-1200.webp";
import soundhousefun600 from "../../assets/img/soundhousefun-600.webp";
import soundhousefun1200 from "../../assets/img/soundhousefun-1200.webp";
import { ArrowUpRightIcon } from "../ui/Icons";
import ProjectCard from "./ProjectCard";
import type { Project } from "./ProjectCard";
import ProjectList from "./ProjectList";
import type { ListedProject } from "./ProjectList";
import Reveal from "../ui/Reveal";
import "./Projects.css";

// Add a liveUrl to show the "Live" button on a card.
const featured: Project = {
  slug: "plotlineai",
  title: "PlotlineAI",
  problem: "Turning a raw CSV into the right chart usually means guessing which chart fits the data.",
  built:
    "Upload a CSV and an AI agent suggests the best charts, rendered from the real data. A Next.js frontend and a Spring Boot API on Java 25, with DynamoDB and S3, deployed serverless on AWS with CDK.",
  tags: ["Next.js", "Spring Boot", "TypeScript", "AWS CDK", "DynamoDB"],
  codeUrl: "https://github.com/AntonKorchynskyi/plotlineai",
  // No public URL yet; add liveUrl here once it is deployed publicly.
};

const pair: Project[] = [
  {
    slug: "soundhousefun",
    title: "SoundHouseFun",
    problem:
      "A music store that needs checkout, sign-in and content management a small team can run.",
    built:
      "Full-stack e-commerce with Stripe payments, Google sign-in and an admin dashboard, on ASP.NET, C# and MS SQL.",
    tags: ["ASP.NET", "C#", "MS SQL", "Stripe", "Google OAuth"],
    codeUrl: "https://github.com/AntonKorchynskyi/SoundHouseFun_ASPNET",
    image: {
      src600: soundhousefun600,
      src1200: soundhousefun1200,
      alt: "SoundHouseFun, an online music store",
    },
  },
  {
    slug: "boardverse",
    title: "BoardVerse",
    problem: "Playing board games with friends online, with stats that follow you between games.",
    built:
      "Accounts, player profiles that track stats, and real-time multiplayer Tic-Tac-Toe on boardgame.io, backed by a Flask API.",
    tags: ["Next.js", "React", "Tailwind CSS", "boardgame.io", "Flask"],
    codeUrl: "https://github.com/AntonKorchynskyi/boardverse-frontend",
    liveUrl: "https://boardverse.vercel.app",
    image: {
      src600: boardverse600,
      src1200: boardverse1200,
      alt: "BoardVerse, an online board game platform",
    },
  },
];

const moreProjects: ListedProject[] = [
  {
    slug: "chart-lab",
    name: "Chart Lab",
    description: "Renders the same revenue datasets in six charting libraries side by side.",
    stack: ["React", "TypeScript", "FastAPI"],
    codeUrl: "https://github.com/AntonKorchynskyi/chart-lab",
  },
  {
    slug: "booklog-api",
    name: "BookLog API",
    description:
      "REST API for managing a book list, with filtered queries and recommendations based on what's on it.",
    stack: ["Node.js", "Express", "MongoDB"],
    codeUrl: "https://github.com/AntonKorchynskyi/BooklogAPI",
  },
  {
    slug: "movienest",
    name: "MovieNest",
    description: "Android app for searching OMDb titles, with a watchlist synced through Firebase.",
    stack: ["Java", "Android", "Firebase"],
    codeUrl: "https://github.com/AntonKorchynskyi/MovieNest",
  },
  {
    slug: "no-addict",
    name: "No Addict",
    description: "Chrome extension that blocks distracting sites by domain or URL before they load.",
    stack: ["JavaScript", "Chrome Extensions"],
    codeUrl: "https://github.com/AntonKorchynskyi/no-addict",
  },
  {
    slug: "mailsheet-automator",
    name: "MailSheet Automator",
    description: "Python tool that validates Excel data and sends bulk HTML emails through Outlook.",
    stack: ["Python", "openpyxl", "Outlook COM"],
    codeUrl: "https://github.com/AntonKorchynskyi/MailSheet-Automator",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="sec" aria-labelledby="projects-title">
      <div className="sec-rule projects-head">
        <div>
          <p className="kicker">01 · Projects</p>
          <h2 id="projects-title" className="h2">
            Selected projects
          </h2>
        </div>
        <a
          className="link-btn"
          href={config.github}
          target="_blank"
          rel="noreferrer"
          data-track="github/projects"
        >
          All projects on GitHub
          <ArrowUpRightIcon />
        </a>
      </div>

      <Reveal className="projects-featured">
        <ProjectCard project={featured} featured />
      </Reveal>

      <div className="projects-pair">
        {pair.map((project, index) => (
          <Reveal key={project.slug} delay={0.06 * (index + 1)}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <ProjectList projects={moreProjects} />
    </section>
  );
};

export default Projects;
