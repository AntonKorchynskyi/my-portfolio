import { config } from "../config";

const profileLinks = [
  { href: config.github, icon: "GH", label: "GitHub" },
  { href: config.linkedin, icon: "in", label: "LinkedIn" },
  { href: `mailto:${config.email}`, icon: "@", label: "Email" },
];

const handleResumeDownload = () => {
  const link = document.createElement("a");
  link.href = config.resumeUrl;
  link.download = "Anton-Korchynskyi-Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Overview = () => {
  return (
    <section className="section section-overview" id="overview">
      <div
        className="overview-photo-slot"
        aria-label="Profile photo"
      >
        {/* TODO: Replace with actual headshot image */}
        <span>Photo</span>
      </div>
      <div className="overview-content">
        <p className="section-kicker">Overview</p>
        <h1>I build accessible, production-ready web applications for government and enterprise clients.</h1>
        <p>
          I am Anton Korchynskyi, a full-stack developer specializing in React, Azure, and AODA-compliant solutions. 
          I focus on clean UI, practical architecture, and delivery in real production environments.
        </p>
        <p>
          Background: Georgian College graduate, Ontario Public Service project
          delivery (SOAB, EDR, BXP), and ongoing portfolio/product work.
        </p>
        <p className="career-goal">
          {config.careerGoal}
        </p>
        <div className="overview-highlights">
          <span>React + TypeScript</span>
          <span>Cloud + DevOps</span>
          <span>AODA/WCAG</span>
        </div>
        <div className="overview-ctas">
          <button 
            className="cta-button cta-primary" 
            onClick={handleResumeDownload}
            aria-label="Download resume"
          >
            View My Resume
          </button>
          <button 
            className="cta-button cta-secondary" 
            onClick={() => scrollToSection("projects")}
            aria-label="View projects"
          >
            See My Work
          </button>
          <button 
            className="cta-button cta-secondary" 
            onClick={() => scrollToSection("form")}
            aria-label="Contact me"
          >
            Get In Touch
          </button>
        </div>
        <div className="overview-links" id="overview-links">
          {profileLinks.map((link) => (
            <a
              className="overview-link"
              href={link.href}
              key={link.label}
              target="_blank"
              rel="noreferrer"
            >
              <span aria-hidden="true" className="overview-link-icon">
                {link.icon}
              </span>
              <span className="overview-link-label">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
