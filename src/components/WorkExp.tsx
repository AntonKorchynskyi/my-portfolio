const role = {
  title: "I&IT Technology Analyst/Developer, Ontario Public Service",
  dates: "January 2024 – October 2025",
  summary:
    "Worked in Agile Scrum teams with architects, business analysts, designers, DevOps engineers, and QA specialists on digital modernization across provincial services: accessible web applications, cloud microservices, and workflow automation built to government accessibility and security standards.",
  projects: [
    {
      title: "Business Experience Platform (BXP)",
      dates: "April 2025 – October 2025",
      highlights: [
        "Built reusable React and Next.js components from Figma designs and the Ontario Design System for the modernization of the ServiceOntario Account for Business platform.",
        "Met AODA and WCAG requirements with semantic HTML, ARIA patterns, and full keyboard navigation, working with designers, QA, and backend developers.",
        "Supported the Ontario Business Registry API integration and used Python data analysis (pandas) to plan the migration from the legacy platform.",
      ],
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "AODA/WCAG",
        "Azure DevOps",
      ],
    },
    {
      title: "Electronic Death Registration (EDR) Admin Platform",
      dates: "September 2024 – April 2025",
      highlights: [
        "Built an admin platform for tracking the hospitals, coroners' offices, and cemeteries that use Ontario's Electronic Death Registration system, and the users assigned to them.",
        "Automated internal workflows with structured SharePoint lists, Power Apps, and Power Automate.",
        "Mapped institution locations with a custom SharePoint SPFx component (Leaflet Maps) and Power BI, improving visibility for internal teams.",
      ],
      stack: [
        "SharePoint",
        "SharePoint SPFx",
        "Power Apps",
        "Power Automate",
        "Power BI",
        "Leaflet Maps",
      ],
    },
    {
      title: "ServiceOntario Account for Business (SOAB) - eForms POC",
      dates: "January 2024 – August 2024",
      highlights: [
        "Designed the initial microservice architecture and built both frontend and backend with React, Python Flask, and MySQL.",
        "Containerized the services with Docker, deployed them to Azure Kubernetes Service, and automated builds and deployments with GitHub Actions CI/CD.",
        "Added SendGrid email notifications; the prototype proved out scalable cloud-based form processing for the ServiceOntario ecosystem.",
      ],
      stack: [
        "React",
        "Python (Flask)",
        "MySQL",
        "Docker",
        "Azure Kubernetes Service (AKS)",
        "GitHub Actions",
      ],
    },
  ],
};

const WorkExp = () => {
  return (
    <section className="section" id="work-experience" aria-labelledby="work-experience-title">
      <p className="section-kicker">Experience</p>
      <h2 id="work-experience-title">Work Experience</h2>
      <p className="section-intro workexp-role-title highlight">{role.title}</p>
      <p className="workexp-role-dates">{role.dates}</p>

      <div className="workexp-overview">
        <p>{role.summary}</p>
      </div>

      <div className="timeline">
        {role.projects.map((project) => (
          <article key={project.title} className="timeline-item">
            <div className="timeline-date">{project.dates}</div>
            <h3>{project.title}</h3>
            <ul className="timeline-highlights">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div className="project-stack-badges">
              {project.stack.map((tech) => (
                <span key={tech} className="stack-badge">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WorkExp;
