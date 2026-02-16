const WorkExp = () => {
  return (
    <section className="section" id="work-experience">
      <p className="section-kicker">Experience</p>
      <h2>Work Experience</h2>
      <p className="section-intro">
        I&amp;IT Technology Analyst/Developer, Ministry of Public and Business
        Service Delivery and Procurement (Ontario Public Service)
      </p>
      <div className="timeline">
        <article className="timeline-item">
          <div className="timeline-date">January 2024 - August 2024</div>
          <h3>ServiceOntario Account for Business (SOAB) - eForms POC</h3>
          <p>
            Built cloud microservices with Node.js and JavaScript, integrated
            data workflows with Azure SQL/MySQL, and deployed containerized
            services using Docker and AKS.
          </p>
          <p>
            Automated build/test/deploy stages with GitHub Actions and Azure
            DevOps to improve release reliability and delivery speed.
          </p>
        </article>

        <article className="timeline-item">
          <div className="timeline-date">September 2024 - April 2025</div>
          <h3>Electronic Death Registration (EDR)</h3>
          <p>
            Developed SharePoint-based Power Apps and Power Automate workflows
            to replace manual processes, improve data quality, and streamline
            operational steps.
          </p>
          <p>
            Worked with business teams to define process flows and delivered
            handover documentation for long-term support.
          </p>
        </article>

        <article className="timeline-item">
          <div className="timeline-date">April 2025 - October 2025</div>
          <h3>Business Experience Platform (BXP)</h3>
          <p>
            Built accessible frontend components with Next.js and React aligned
            with AODA/WCAG and Ontario Design System standards.
          </p>
          <p>
            Collaborated in Agile Scrum delivery with architects, QA, and DevOps
            teams to ship scalable user-focused features.
          </p>
        </article>
      </div>
    </section>
  );
};

export default WorkExp;
