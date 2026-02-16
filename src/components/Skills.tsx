const Skills = () => {
  return (
    <section className="section" id="skills">
      <p className="section-kicker">Skills</p>
      <h2>Technical Skills</h2>
      <div className="grid-cards">
        <article className="card">
          <h3>Languages</h3>
          <p>TypeScript, JavaScript, C#, Python, Java, SQL</p>
        </article>
        <article className="card">
          <h3>Frontend</h3>
          <p>React, Next.js, Angular, HTML5, CSS3, responsive UI patterns</p>
        </article>
        <article className="card">
          <h3>Backend</h3>
          <p>Node.js (Express), ASP.NET, Spring Boot, REST API design</p>
        </article>
        <article className="card">
          <h3>Databases</h3>
          <p>Azure SQL, MS SQL, MySQL, Oracle, MongoDB, SQLite</p>
        </article>
        <article className="card">
          <h3>Cloud & DevOps</h3>
          <p>
            Azure Cloud, Docker, Kubernetes (AKS), Azure DevOps, GitHub
            Actions, Azure CLI, CI/CD automation
          </p>
        </article>
        <article className="card">
          <h3>Quality & Delivery</h3>
          <p>
            AODA/WCAG accessibility, Ontario Design System, Agile Scrum/Kanban,
            technical documentation
          </p>
        </article>
      </div>
      <article className="card soft-skills">
        <h3>Soft Skills</h3>
        <p>
          Cross-team collaboration, clear technical communication, requirement
          analysis, and pragmatic problem solving.
        </p>
      </article>
    </section>
  );
};

export default Skills;
