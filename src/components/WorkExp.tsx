const WorkExp = () => {
  return (
    <section className="section" id="work-experience">
      <p className="section-kicker">Experience</p>
      <h2>Work Experience</h2>
      <p className="section-intro">
        I&amp;IT Technology Analyst/Developer, Ontario Public Service
      </p>
      <div className="timeline">
        <article className="timeline-item">
          <div className="timeline-date">January 2024 - August 2024</div>
          <h3>ServiceOntario Account for Business (SOAB) - eForms POC</h3>
          <p>
            Built cloud microservices and deployment pipelines that improved
            release consistency and platform readiness.
          </p>
          <p className="project-stack">
            Tech stack: Node.js, JavaScript, Azure SQL, MySQL, Docker, AKS,
            GitHub Actions, Azure DevOps
          </p>
        </article>

        <article className="timeline-item">
          <div className="timeline-date">September 2024 - April 2025</div>
          <h3>Electronic Death Registration (EDR)</h3>
          <p>
            Modernized workflow operations using Power Apps and Power Automate
            to reduce manual processing and improve data quality.
          </p>
          <p className="project-stack">
            Tech stack: SharePoint, Power Apps, Power Automate
          </p>
        </article>

        <article className="timeline-item">
          <div className="timeline-date">April 2025 - October 2025</div>
          <h3>Business Experience Platform (BXP)</h3>
          <p>
            Delivered accessible React/Next.js UI components aligned with
            AODA/WCAG and Ontario Design System standards.
          </p>
          <p className="project-stack">
            Tech stack: React, Next.js, TypeScript, AODA/WCAG, Ontario Design
            System
          </p>
        </article>
      </div>
    </section>
  );
};

export default WorkExp;
