const Skills = () => {
  return (
    <section className="section" id="skills">
      <p className="section-kicker">Skills</p>
      <h2>Technical Skills</h2>
      <div className="grid-cards">
        <article className="card">
          <h3>Frontend</h3>
          <p>
            React, Next.js, TypeScript, responsive UI, accessibility-first UX
          </p>
        </article>
        <article className="card">
          <h3>Backend</h3>
          <p>
            Node.js (Express), ASP.NET, REST API design, service integration
          </p>
        </article>
        <article className="card">
          <h3>Data</h3>
          <p>Azure SQL, MS SQL, MySQL, Oracle, MongoDB, performance tuning</p>
        </article>
        <article className="card">
          <h3>Cloud & DevOps</h3>
          <p>Azure, Docker, AKS, GitHub Actions, Azure DevOps, CI/CD</p>
        </article>
        <article className="card">
          <h3>Languages</h3>
          <p>TypeScript, JavaScript, C#, Python, Java, SQL</p>
        </article>
        <article className="card">
          <h3>Delivery</h3>
          <p>
            AODA/WCAG, Agile Scrum, technical docs, cross-team collaboration
          </p>
        </article>
      </div>
    </section>
  );
};

export default Skills;
