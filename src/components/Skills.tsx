import { useState } from "react";

const CATEGORIES = [
  "All",
  "Frontend",
  "Backend",
  "Cloud & DevOps",
  "Databases",
  "Languages",
  "Data Analytics",
  "API",
  "Other",
] as const;

type Category = (typeof CATEGORIES)[number];

interface SkillItem {
  icon: string;
  label: string;
}

const SKILLS_BY_CATEGORY: Record<Exclude<Category, "All">, SkillItem[]> = {
  Frontend: [
    { icon: "/src/assets/skills/html.svg", label: "HTML" },
    { icon: "/src/assets/skills/css.svg", label: "CSS" },
    { icon: "/src/assets/skills/tailwind-css.svg", label: "Tailwind CSS" },
    { icon: "/src/assets/skills/react.svg", label: "React" },
    { icon: "/src/assets/skills/nextjs.svg", label: "Next.js" },
    { icon: "/src/assets/skills/angular.svg", label: "Angular" },
    { icon: "/src/assets/skills/bootstrap.svg", label: "Bootstrap" },
    { icon: "/src/assets/skills/accessibility.png", label: "Accessibility" },
  ],
  Backend: [
    { icon: "/src/assets/skills/nodejs.svg", label: "Node.js" },
    { icon: "/src/assets/skills/express.svg", label: "Express" },
    { icon: "/src/assets/skills/aspnet.svg", label: "ASP.NET" },
    { icon: "/src/assets/skills/restapi.svg", label: "REST API" },
    { icon: "/src/assets/skills/flask.svg", label: "Flask" },
  ],
  "Cloud & DevOps": [
    { icon: "/src/assets/skills/git.svg", label: "Git" },
    { icon: "/src/assets/skills/azure.svg", label: "Azure" },
    { icon: "/src/assets/skills/docker.svg", label: "Docker" },
    { icon: "/src/assets/skills/kubernetes.svg", label: "Kubernetes" },
    { icon: "/src/assets/skills/github.svg", label: "GitHub Actions" },
    { icon: "/src/assets/skills/devops-azure.svg", label: "Azure DevOps" },
    { icon: "/src/assets/skills/jira.svg", label: "Jira" },
    { icon: "/src/assets/skills/cicd.svg", label: "CI/CD" },
  ],
  Databases: [
    { icon: "/src/assets/skills/azuresql.svg", label: "Azure SQL" },
    { icon: "/src/assets/skills/mssql.png", label: "MS SQL" },
    { icon: "/src/assets/skills/mysql.svg", label: "MySQL" },
    { icon: "/src/assets/skills/oracle.svg", label: "Oracle" },
    { icon: "/src/assets/skills/mongodb.svg", label: "MongoDB" },
    { icon: "/src/assets/skills/sqlite.svg", label: "SQLite" },
  ],
  Languages: [
    { icon: "/src/assets/skills/typescript.svg", label: "TypeScript" },
    { icon: "/src/assets/skills/javascript.svg", label: "JavaScript" },
    { icon: "/src/assets/skills/csharp.svg", label: "C#" },
    { icon: "/src/assets/skills/python.svg", label: "Python" },
    { icon: "/src/assets/skills/java.svg", label: "Java" },
    { icon: "/src/assets/skills/sql.svg", label: "SQL" },
    { icon: "/src/assets/skills/php.svg", label: "PHP" },
  ],
  "Data Analytics": [
    { icon: "/src/assets/skills/spark.svg", label: "Spark" },
    { icon: "/src/assets/skills/databricks.svg", label: "Databricks" },
    { icon: "/src/assets/skills/pandas.svg", label: "Pandas" },
    { icon: "/src/assets/skills/numpy.svg", label: "numpy" },
    { icon: "/src/assets/skills/powerbi.svg", label: "Power BI" },
  ],
  API: [
    { icon: "/src/assets/skills/sendgrid.svg", label: "SendGrid" },
    { icon: "/src/assets/skills/stripe.svg", label: "Stripe" },
  ],
  "Other": [
    { icon: "/src/assets/skills/sharepoint.svg", label: "SharePoint" },
    { icon: "/src/assets/skills/power-automate.svg", label: "Power Automate" },
    { icon: "/src/assets/skills/WCAG.svg", label: "WCAG" },
    { icon: "/src/assets/skills/figma.svg", label: "Figma" },
    { icon: "/src/assets/skills/canva.svg", label: "Canva" },
    { icon: "/src/assets/skills/miro.svg", label: "Miro" },
  ],

};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const filteredGroups =
    selectedCategory === "All"
      ? (Object.entries(SKILLS_BY_CATEGORY) as [Exclude<Category, "All">, SkillItem[]][])
      : ([[selectedCategory, SKILLS_BY_CATEGORY[selectedCategory]]] as [
          Exclude<Category, "All">,
          SkillItem[],
        ][]);

  return (
    <section className="section skills-section" id="skills">
      <p className="section-kicker">Skills</p>
      <h2>Technical Skills</h2>

      <nav className="skills-category-nav" aria-label="Filter skills by category">
        <ul className="skills-category-list">
          {CATEGORIES.map((category) => (
            <li key={category}>
              <button
                type="button"
                className={`skills-category-tab ${selectedCategory === category ? "skills-category-tab--active" : ""}`}
                onClick={() => setSelectedCategory(category)}
                aria-pressed={selectedCategory === category}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="skills-content" key={selectedCategory}>
        {filteredGroups.map(([categoryName, skills]) => (
          <div className="skills-group" key={categoryName}>
            <h3 className="skills-group-title">{categoryName}</h3>
            <ul className="skills-pill-list">
              {skills.map((skill) => (
                <li key={skill.label}>
                  <span className="skills-pill">
                    <img
                      src={skill.icon}
                      alt=""
                      className="skills-pill-icon"
                    />
                    <span className="skills-pill-label">{skill.label}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
