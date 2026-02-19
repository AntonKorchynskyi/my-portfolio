interface Skill {
  title: string;
  proficiency: "Expert" | "Advanced" | "Intermediate";
  description: string;
}

const Skills = () => {
  // Skills ordered by priority for Full-Stack Developer roles
  const skills: Skill[] = [
    {
      title: "Frontend",
      proficiency: "Advanced",
      description: "React, Next.js, TypeScript, responsive UI, accessibility-first UX",
    },
    {
      title: "Backend",
      proficiency: "Advanced",
      description: "Node.js (Express), ASP.NET, REST API design, service integration",
    },
    {
      title: "Cloud & DevOps",
      proficiency: "Advanced",
      description: "Azure, Docker, AKS, GitHub Actions, Azure DevOps, CI/CD",
    },
    {
      title: "Data",
      proficiency: "Advanced",
      description: "Azure SQL, MS SQL, MySQL, Oracle, MongoDB, performance tuning",
    },
    {
      title: "Languages",
      proficiency: "Advanced",
      description: "TypeScript, JavaScript, C#, Python, Java, SQL",
    },
    {
      title: "Delivery",
      proficiency: "Expert",
      description: "AODA/WCAG compliance, Agile Scrum, technical documentation, cross-team collaboration",
    },
  ];

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case "Expert":
        return "var(--accent)";
      case "Advanced":
        return "var(--accent-2)";
      default:
        return "var(--muted)";
    }
  };

  return (
    <section className="section" id="skills">
      <p className="section-kicker">Skills</p>
      <h2>Technical Skills</h2>
      <div className="grid-cards">
        {skills.map((skill) => (
          <article className="card skill-card" key={skill.title}>
            <div className="skill-header">
              <h3>{skill.title}</h3>
              <span
                className="proficiency-badge"
                style={{ color: getProficiencyColor(skill.proficiency) }}
              >
                {skill.proficiency}
              </span>
            </div>
            <p>{skill.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
