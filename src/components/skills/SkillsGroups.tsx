import "./SkillsGroups.css";

const groups = [
  {
    name: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Angular",
      "HTML & CSS",
      "Tailwind CSS",
      "WCAG / AODA",
    ],
  },
  {
    name: "Backend",
    skills: [
      "Node.js",
      "Python (Flask, FastAPI)",
      "REST APIs",
      "C# / ASP.NET",
      "Java",
      "Spring Boot",
    ],
  },
  {
    name: "Cloud & DevOps",
    skills: [
      "Azure",
      "Kubernetes (AKS)",
      "Docker",
      "GitHub Actions",
      "Azure DevOps",
      "Git",
    ],
  },
  {
    name: "Data",
    skills: ["PostgreSQL", "MySQL", "MS SQL", "pandas", "Power BI", "MongoDB"],
  },
];

const SkillsGroups = () => {
  return (
    <section id="skills" className="skills" aria-labelledby="skills-title">
      <div className="sec skills-inner">
        <p className="kicker">04 · Skills</p>
        <h2 id="skills-title" className="h2">
          What I work with
        </h2>
        <div className="skills-grid">
          {groups.map((group) => (
            <div key={group.name}>
              <h3 className="skills-group-name mono">{group.name}</h3>
              <ul className="skills-list">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsGroups;
