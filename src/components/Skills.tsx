import { useState } from "react";
import { toSlug } from "../utils/analytics";

import accessibilityIcon from "../assets/skills/accessibility.png";
import angularIcon from "../assets/skills/angular.svg";
import aspnetIcon from "../assets/skills/aspnet.svg";
import azureIcon from "../assets/skills/azure.svg";
import azureSqlIcon from "../assets/skills/azuresql.svg";
import bootstrapIcon from "../assets/skills/bootstrap.svg";
import canvaIcon from "../assets/skills/canva.png";
import cicdIcon from "../assets/skills/cicd.svg";
import cssIcon from "../assets/skills/css.svg";
import csharpIcon from "../assets/skills/csharp.svg";
import databricksIcon from "../assets/skills/databricks.svg";
import devopsAzureIcon from "../assets/skills/devops-azure.svg";
import dockerIcon from "../assets/skills/docker.svg";
import expressIcon from "../assets/skills/express.svg";
import figmaIcon from "../assets/skills/figma.svg";
import flaskIcon from "../assets/skills/flask.svg";
import gitIcon from "../assets/skills/git.svg";
import githubActionsIcon from "../assets/skills/github.svg";
import htmlIcon from "../assets/skills/html.svg";
import javaIcon from "../assets/skills/java.svg";
import javascriptIcon from "../assets/skills/javascript.svg";
import jiraIcon from "../assets/skills/jira.svg";
import kubernetesIcon from "../assets/skills/kubernetes.svg";
import logicAppsIcon from "../assets/skills/logic-apps.jpg";
import miroIcon from "../assets/skills/miro.png";
import mongodbIcon from "../assets/skills/mongodb.svg";
import mssqlIcon from "../assets/skills/mssql.png";
import mysqlIcon from "../assets/skills/mysql.svg";
import nextjsIcon from "../assets/skills/nextjs.svg";
import nodejsIcon from "../assets/skills/nodejs.svg";
import numpyIcon from "../assets/skills/numpy.png";
import oracleIcon from "../assets/skills/oracle.svg";
import pandasIcon from "../assets/skills/pandas.svg";
import phpIcon from "../assets/skills/php.svg";
import powerAutomateIcon from "../assets/skills/power-automate.png";
import powerBiIcon from "../assets/skills/powerbi.jpg";
import pythonIcon from "../assets/skills/python.svg";
import reactIcon from "../assets/skills/react.svg";
import restApiIcon from "../assets/skills/restapi.svg";
import sendgridIcon from "../assets/skills/sendgrid.svg";
import sharepointIcon from "../assets/skills/sharepoint.svg";
import sparkIcon from "../assets/skills/spark.svg";
import sqliteIcon from "../assets/skills/sqlite.svg";
import sqlIcon from "../assets/skills/sql.svg";
import stripeIcon from "../assets/skills/stripe.svg";
import tailwindIcon from "../assets/skills/tailwind.svg";
import typescriptIcon from "../assets/skills/typescript.svg";
import wcagIcon from "../assets/skills/wcag.jfif";

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
    { icon: htmlIcon, label: "HTML" },
    { icon: cssIcon, label: "CSS" },
    { icon: tailwindIcon, label: "Tailwind CSS" },
    { icon: reactIcon, label: "React" },
    { icon: nextjsIcon, label: "Next.js" },
    { icon: angularIcon, label: "Angular" },
    { icon: bootstrapIcon, label: "Bootstrap" },
    { icon: accessibilityIcon, label: "Accessibility" },
  ],
  Backend: [
    { icon: nodejsIcon, label: "Node.js" },
    { icon: expressIcon, label: "Express" },
    { icon: aspnetIcon, label: "ASP.NET" },
    { icon: restApiIcon, label: "REST API" },
    { icon: flaskIcon, label: "Flask" },
  ],
  "Cloud & DevOps": [
    { icon: gitIcon, label: "Git" },
    { icon: azureIcon, label: "Azure" },
    { icon: dockerIcon, label: "Docker" },
    { icon: kubernetesIcon, label: "Kubernetes" },
    { icon: githubActionsIcon, label: "GitHub Actions" },
    { icon: devopsAzureIcon, label: "Azure DevOps" },
    { icon: jiraIcon, label: "Jira" },
    { icon: cicdIcon, label: "CI/CD" },
  ],
  Databases: [
    { icon: azureSqlIcon, label: "Azure SQL" },
    { icon: mssqlIcon, label: "MS SQL" },
    { icon: mysqlIcon, label: "MySQL" },
    { icon: oracleIcon, label: "Oracle" },
    { icon: mongodbIcon, label: "MongoDB" },
    { icon: sqliteIcon, label: "SQLite" },
  ],
  Languages: [
    { icon: typescriptIcon, label: "TypeScript" },
    { icon: javascriptIcon, label: "JavaScript" },
    { icon: csharpIcon, label: "C#" },
    { icon: pythonIcon, label: "Python" },
    { icon: javaIcon, label: "Java" },
    { icon: sqlIcon, label: "SQL" },
    { icon: phpIcon, label: "PHP" },
  ],
  "Data Analytics": [
    { icon: sparkIcon, label: "Spark" },
    { icon: databricksIcon, label: "Databricks" },
    { icon: pandasIcon, label: "Pandas" },
    { icon: numpyIcon, label: "NumPy" },
    { icon: powerBiIcon, label: "Power BI" },
  ],
  API: [
    { icon: sendgridIcon, label: "SendGrid" },
    { icon: stripeIcon, label: "Stripe" },
  ],
  Other: [
    { icon: sharepointIcon, label: "SharePoint" },
    { icon: powerAutomateIcon, label: "Power Automate" },
    { icon: logicAppsIcon, label: "Azure Logic Apps" },
    { icon: wcagIcon, label: "WCAG" },
    { icon: figmaIcon, label: "Figma" },
    { icon: canvaIcon, label: "Canva" },
    { icon: miroIcon, label: "Miro" },
  ],
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const filteredGroups =
    selectedCategory === "All"
      ? (Object.entries(SKILLS_BY_CATEGORY) as [
          Exclude<Category, "All">,
          SkillItem[],
        ][])
      : ([[selectedCategory, SKILLS_BY_CATEGORY[selectedCategory]]] as [
          Exclude<Category, "All">,
          SkillItem[],
        ][]);

  return (
    <section className="section skills-section" id="skills">
      <p className="section-kicker">Skills</p>
      <h2>Technical Skills</h2>

      <nav
        className="skills-category-nav"
        aria-label="Filter skills by category"
      >
        <ul className="skills-category-list">
          {CATEGORIES.map((category) => (
            <li key={category}>
              <button
                type="button"
                className={`skills-category-tab ${selectedCategory === category ? "skills-category-tab--active" : ""}`}
                onClick={() => setSelectedCategory(category)}
                aria-pressed={selectedCategory === category}
                data-track={`skills-tab/${toSlug(category)}`}
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
                    <img src={skill.icon} alt="" className="skills-pill-icon" />
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
