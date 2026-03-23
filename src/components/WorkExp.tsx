import { useState } from "react";

const WorkExp = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const role = {
    title: "I&IT Technology Analyst/Developer, Ontario Public Service",
    dates: "(2024-2025)",
    summary: [
      "Contributed to multiple digital modernization initiatives across provincial services, developing accessible web applications, cloud microservices, and workflow automation solutions. Worked in Agile Scrum teams alongside architects, business analysts, designers, DevOps engineers, and QA specialists to deliver production-ready features aligned with government accessibility and security standards. My work spanned front-end development, cloud deployments, API integrations, accessibility compliance, and data analysis supporting platform modernization.",
    ],
    projects: [
      {
        title: "ServiceOntario Account for Business (SOAB) - eForms POC",
        dates: "January 2024 - August 2024",
        description:
          "This proof-of-concept project evaluated integration between a custom digital forms solution and the ServiceOntario business platform. I designed the initial microservice application architecture and implemented both frontend and backend functionality using React, Python Flask, and MySQL. I containerized services with Docker and deployed them to Azure Kubernetes Service, while building CI/CD pipelines with GitHub Actions to automate builds and deployments. The platform integrated SendGrid for automated email notifications and served as a feasibility prototype for scalable cloud-based form processing within the broader ServiceOntario ecosystem.",
        stack: [
          "React",
          "JavaScript",
          "Python (Flask)",
          "MySQL",
          "Docker",
          "Azure Kubernetes Service (AKS)",
          "Azure Cloud",
          "GitHub",
          "GitHub Actions",
          "CI/CD",
          "Docker Hub",
          "SendGrid API",
          "Postman",
        ],
      },
      {
        title: "Electronic Death Registration (EDR) Admin Platform",
        dates: "September 2024 - April 2025",
        description:
          "Developed an administrative support solution for the Electronic Death Registration system to help internal teams manage operational data and track registered users responsible for institutions such as hospitals, coroners' offices, and cemeteries across Ontario. Built the solution using SharePoint, Power Apps, and Power Automate, structuring SharePoint lists to track institutions and assigned users while automating workflow processes. Implemented geographic visualization using a custom SharePoint SPFx component with Leaflet Maps and integrated Power BI to display mapped institution locations, improving visibility and coordination for internal teams.",
        stack: [
          "SharePoint",
          "Power Apps",
          "Power Automate",
          "Power BI",
          "Leaflet Maps",
          "SharePoint SPFx",
        ],
      },
      {
        title: "Business Experience Platform (BXP)",
        dates: "April 2025 - October 2025",
        description:
          "Business Experience Platform is a large-scale modernization of the legacy ServiceOntario Account for Business system. I developed reusable React and Next.js components based on Figma designs and the Ontario Design System, implementing accessible interfaces using semantic HTML, Tailwind CSS, ARIA patterns, and keyboard navigation to meet AODA and WCAG standards. I collaborated with designers, QA testers, and backend developers to deliver features and resolve defects, supported integration with the Ontario Business Registry API, built early proof-of-concept prototypes, and performed Python-based data analysis to assist migration planning from the legacy platform.",
        stack: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "HTML",
          "AODA/WCAG",
          "Ontario Design System",
          "Azure DevOps",
          "MS SQL",
          "Postman",
          "Figma",
          "pandas",
          "NumPy",
        ],
      },
    ],
  };

  return (
    <section className="section" id="work-experience">
      <p className="section-kicker">Experience</p>
      <h2 id="work-experience-title">Work Experience</h2>
      <p className="section-intro workexp-role-title highlight">
        {role.title} {role.dates}
      </p>

      <div className="workexp-overview">
        {role.summary.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div
        id="experience-details"
        role="region"
        aria-labelledby="work-experience-title"
        className="workexp-content"
      >
        {isExpanded && (
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
        className="edu-button"
        aria-expanded={isExpanded}
        aria-controls="experience-details"
        aria-label={
          isExpanded ? "Hide detailed project timeline" : "View detailed project timeline"
        }
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        {isExpanded ? "Hide Project Details ▲" : "View Project Details ▼"}
      </button>
    </section>
  );
};

export default WorkExp;
