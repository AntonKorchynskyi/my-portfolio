import { useState } from "react";

const WorkExp = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const role = {
    title: "I&IT Technology Analyst/Developer, Ontario Public Service",
    dates: "(2024-2025)",
    summary: [
      "Contributed to multi-year digital modernization initiatives across core provincial services, building and supporting secure, user-centered solutions that improved delivery speed and operational reliability.",
      "Worked across frontend development, cloud deployment, low-code process automation, and accessibility-aligned design, collaborating with cross-functional teams to translate policy and business needs into production-ready outcomes.",
    ],
    overallStack: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "MySQL",
      "Docker",
      "Azure Cloud",
      "Azure Kubernetes Service (AKS)",
      "GitHub Actions",
      "GitHub",
      "SharePoint",
      "Power Apps",
      "Power Automate",
      "AODA/WCAG",
      "Ontario Design System",
    ],
    projects: [
      {
        title: "ServiceOntario Account for Business (SOAB) - eForms POC",
        dates: "January 2024 - August 2024",
        description:
          "Built cloud microservices and deployment pipelines that improved release consistency and platform readiness.",
        stack: [
          "React",
          "JavaScript",
          "MySQL",
          "Docker",
          "Azure Cloud",
          "Azure Kubernetes Service (AKS)",
          "GitHub Actions",
          "GitHub",
        ],
      },
      {
        title: "Electronic Death Registration (EDR)",
        dates: "September 2024 - April 2025",
        description:
          "Modernized workflow operations using Power Apps and Power Automate to reduce manual processing and improve data quality.",
        stack: ["SharePoint", "Power Apps", "Power Automate"],
      },
      {
        title: "Business Experience Platform (BXP)",
        dates: "April 2025 - October 2025",
        description:
          "Delivered accessible React/Next.js UI components aligned with AODA/WCAG and Ontario Design System standards.",
        stack: [
          "React",
          "Next.js",
          "TypeScript",
          "AODA/WCAG",
          "Ontario Design System",
        ],
      },
    ],
  };

  return (
    <section className="section" id="work-experience">
      <p className="section-kicker">Experience</p>
      <h2>Work Experience</h2>
      <p className="section-intro workexp-role-title">
        {role.title} {role.dates}
      </p>

      <div className="workexp-overview">
        {role.summary.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div id="experience-details" role="region" className="workexp-content">
        {!isExpanded ? (
          <div className="project-stack-badges">
            {role.overallStack.map((tech) => (
              <span key={tech} className="stack-badge">
                {tech}
              </span>
            ))}
          </div>
        ) : (
          <div className="timeline workexp-content--animated">
            {role.projects.map((project) => (
              <article key={project.title} className="timeline-item">
                <div className="timeline-date">{project.dates}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
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
        )}
      </div>

      <button
        type="button"
        className="project-toggle-btn workexp-toggle"
        aria-expanded={isExpanded}
        aria-controls="experience-details"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        {isExpanded ? "Hide Project Details ▲" : "View Project Details ▼"}
      </button>
    </section>
  );
};

export default WorkExp;
