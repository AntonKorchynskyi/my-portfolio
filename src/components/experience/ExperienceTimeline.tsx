import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";
import Reveal from "../ui/Reveal";
import SpotlightCard from "../ui/SpotlightCard";
import "./ExperienceTimeline.css";

interface ExperienceProject {
  title: string;
  dates: string;
  highlights: string[];
  tags: string[];
}

interface Role {
  title: string;
  meta: string;
  projects: ExperienceProject[];
}

const roles: Role[] = [
  {
    title: "I&IT Technology Specialist",
    meta: "Full-time · May 2025 to Oct 2025",
    projects: [
      {
        title: "Business Experience Platform (BXP)",
        dates: "May 2025 to Oct 2025",
        highlights: [
          "Developed reusable React and Next.js components using TypeScript, Figma, and the Ontario Design System to deliver accessible, responsive interfaces for ServiceOntario's Account for Business modernization.",
          "Built Java 17+, Spring Boot, Python and Flask REST APIs, integrating backend services with the UI layer and implementing validation and error handling to support reliable business-data exchange.",
          "Integrated Ontario Business Registry APIs for business search and linking workflows, while implementing English/French localization with next-intl to improve access to business information.",
          "Applied TDD practices with Jest, JUnit and PyTest, supporting regression, UAT, and WCAG 2.1 AA/AODA accessibility testing to identify defects and validate functionality before release.",
        ],
        tags: [
          "Next.js",
          "React",
          "TypeScript",
          "Java",
          "Spring Boot",
          "Python",
          "Flask",
          "Tailwind CSS",
          "next-intl",
          "WCAG/AODA",
          "Azure DevOps",
        ],
      },
    ],
  },
  {
    title: "I&IT Technology Analyst/Developer, Co-op",
    meta: "Co-op · Jan 2024 to Apr 2025",
    projects: [
      {
        title: "EDR Admin Platform",
        dates: "Sep 2024 to Apr 2025",
        highlights: [
          "Developed an administrative platform for Ontario's Electronic Death Registration system to centralize information about hospitals, coroners' offices, cemeteries, and associated users.",
          "Built structured SharePoint Lists and automated administrative workflows using Power Apps and Power Automate to simplify institution and user management.",
          "Developed an interactive mapping component using TypeScript, SharePoint SPFx, and Leaflet, alongside Power BI reporting, to visualize institution locations and support administrative oversight.",
        ],
        tags: [
          "SharePoint SPFx",
          "Power Apps",
          "Power Automate",
          "Power BI",
          "Leaflet",
          "Java",
        ],
      },
      {
        title: "SOAB eForms Proof of Concept",
        dates: "Jan 2024 to Aug 2024",
        highlights: [
          "Designed a microservice-based eForms proof of concept using React, JavaScript, Python, Flask, and MySQL to demonstrate cloud-based form processing for ServiceOntario.",
          "Containerized application services with Docker and deployed them to Azure Kubernetes Service (AKS) to provide consistent development and testing environments.",
          "Built GitHub Actions CI/CD pipelines to automate builds, tests, and deployments across DEV and UAT environments, reducing manual release effort.",
          "Integrated SendGrid email notifications into the eForms workflow to demonstrate automated communication during form processing.",
        ],
        tags: [
          "React",
          "JavaScript",
          "Python",
          "Flask",
          "MySQL",
          "Docker",
          "AKS",
          "GitHub Actions",
          "CI/CD",
          "SendGrid",
        ],
      },
    ],
  },
];

// Matches the line's inset in CSS: it starts 10px down and ends 30px short.
const LINE_TOP_PX = 10;
const LINE_INSET_PX = 40;

const ExperienceTimeline = () => {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const nodeRefs = useRef<(HTMLSpanElement | null)[]>([]);
  // The first node is always lit; later ones light when the line reaches them.
  const [lit, setLit] = useState<boolean[]>(() => roles.map((_, i) => i === 0));

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 60%", "end 60%"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const timeline = timelineRef.current;
    if (!timeline) return;
    const box = timeline.getBoundingClientRect();
    const tip = LINE_TOP_PX + progress * (box.height - LINE_INSET_PX);
    const next = nodeRefs.current.map((node, i) => {
      if (i === 0 || !node) return true;
      const rect = node.getBoundingClientRect();
      return rect.top + rect.height / 2 - box.top <= tip + 1;
    });
    setLit((prev) =>
      prev.every((value, i) => value === next[i]) ? prev : next,
    );
  });

  return (
    <section id="work-experience" className="sec" aria-labelledby="exp-title">
      <div className="sec-rule split">
        <div className="exp-intro">
          <p className="kicker">03 · Experience</p>
          <h2 id="exp-title" className="h2">
            Ontario Public Service
          </h2>
          <p className="exp-range mono">Jan 2024 to Oct 2025</p>
          <p className="exp-summary">
            Started as a co-op in January 2024, then hired full time as an
            I&amp;IT Technology Specialist.
          </p>
        </div>

        <div className="exp-timeline" ref={timelineRef}>
          <span className="exp-track" aria-hidden="true" />
          <motion.span
            className="exp-line"
            aria-hidden="true"
            style={{ scaleY: scrollYProgress }}
          />
          <ol className="exp-roles">
            {roles.map((role, roleIndex) => (
              <li key={role.title} className="exp-role">
                <span
                  ref={(node) => {
                    nodeRefs.current[roleIndex] = node;
                  }}
                  className={`exp-node${lit[roleIndex] ? " is-lit" : ""}`}
                  aria-hidden="true"
                />
                <div className="exp-role-head">
                  <h3 className="exp-role-title">{role.title}</h3>
                  <p className="exp-role-meta mono">{role.meta}</p>
                </div>
                <div className="exp-cards">
                  {role.projects.map((project, projectIndex) => (
                    <Reveal key={project.title} delay={0.06 * projectIndex}>
                      <SpotlightCard className="is-small">
                        <article className="exp-card">
                          <p className="exp-card-dates mono">{project.dates}</p>
                          <h4 className="exp-card-title">{project.title}</h4>
                          <ul className="bullets">
                            {project.highlights.map((highlight) => (
                              <li key={highlight}>{highlight}</li>
                            ))}
                          </ul>
                          <ul
                            className="tags exp-card-tags"
                            aria-label="Tech used"
                          >
                            {project.tags.map((tag) => (
                              <li key={tag} className="tag">
                                {tag}
                              </li>
                            ))}
                          </ul>
                        </article>
                      </SpotlightCard>
                    </Reveal>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
