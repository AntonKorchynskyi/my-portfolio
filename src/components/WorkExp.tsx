const WorkExp = () => {

  const workProjects = [
    {
      title: "ServiceOntario Account for Business (SOAB) - eForms POC",
      stack: ["React", "JavaScript", "MySQL", "Docker", "Azure Cloud", "Azure Kubernetes Service (AKS)", "GitHub Actions", "GitHub"],
    },
    {
      title: "Electronic Death Registration (EDR)",
      stack: ["SharePoint", "Power Apps", "Power Automate"],
    },
    {
      title: "Business Experience Platform (BXP)",
      stack: ["React", "Next.js", "TypeScript", "AODA/WCAG", "Ontario Design System"],
    },
  ];

  return (
    <section className="section" id="work-experience">
      <p className="section-kicker">Experience</p>
      <h2>Work Experience</h2>
      <p className="section-intro">
        I&amp;IT Technology Analyst/Developer, Ontario Public Service (2024-2025)
      </p>
      <div className="timeline">
        <article className="timeline-item">
          <div className="timeline-date">January 2024 - August 2024</div>
          <h3>ServiceOntario Account for Business (SOAB) - eForms POC</h3>
          <p>
            Built cloud microservices and deployment pipelines that improved
            release consistency and platform readiness.
          </p>
          <div className="project-stack-badges">
            {workProjects[0].stack.map((tech) => (
              <span key={tech} className="stack-badge">
                {tech}
              </span>
            ))}
          </div>
        </article>

        <article className="timeline-item">
          <div className="timeline-date">September 2024 - April 2025</div>
          <h3>Electronic Death Registration (EDR)</h3>
          <p>
            Modernized workflow operations using Power Apps and Power Automate
            to reduce manual processing and improve data quality.
          </p>
          <div className="project-stack-badges">
            {workProjects[1].stack.map((tech) => (
              <span key={tech} className="stack-badge">
                {tech}
              </span>
            ))}
          </div>
        </article>

        <article className="timeline-item">
          <div className="timeline-date">April 2025 - October 2025</div>
          <h3>Business Experience Platform (BXP)</h3>
          <p>
            Delivered accessible React/Next.js UI components aligned with
            AODA/WCAG and Ontario Design System standards.
          </p>
          <div className="project-stack-badges">
            {workProjects[2].stack.map((tech) => (
              <span key={tech} className="stack-badge">
                {tech}
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default WorkExp;
