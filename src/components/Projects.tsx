import backgroundImage from "../assets/background.jpg";

const projects = [
  {
    title: "SoundHouseFun",
    summary: "E-commerce music platform with auth, payments, and admin tools.",
    stack: "ASP.NET, C#, MS SQL",
    image: backgroundImage,
    href: "https://github.com/example/soundhousefun",
  },
  {
    title: "Portfolio MVP",
    summary: "Personal web portfolio focused on clarity, speed, and visual impact.",
    stack: "React, TypeScript, Vite",
    image: backgroundImage,
    href: "https://github.com/example/portfolio-mvp",
  },
  {
    title: "Next Project",
    summary: "Reserved for your next public web project.",
    stack: "TBD",
    image: backgroundImage,
    href: "https://github.com/example/next-project",
  },
];

const Projects = () => {
  return (
    <section className="section" id="projects">
      <p className="section-kicker">Projects</p>
      <h2>Web Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <a
            className="project-link-card"
            href={project.href}
            key={project.title}
            target="_blank"
            rel="noreferrer"
          >
            <img
              alt={`${project.title} preview`}
              loading="lazy"
              src={project.image}
            />
            <div className="project-card-body">
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <p className="project-stack">{project.stack}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
