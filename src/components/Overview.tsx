import { config } from "../config";
import GitHubIcon from "../assets/GitHub_Invertocat_Black.svg";
import LinkedInIcon from "../assets/linkedin-svgrepo-com.svg";

const profileLinks = [
  { href: config.github, icon: GitHubIcon, label: "GitHub", type: "svg" as const },
  { href: config.linkedin, icon: LinkedInIcon, label: "LinkedIn", type: "svg" as const },
  { href: `mailto:${config.email}`, icon: "@", label: "Email", type: "text" as const },
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
      <div className="overview-hero">
        <div className="overview-content">
          <p className="section-kicker">Overview</p>
          <h1>Hello, I'm <span className="highlight">Anton</span> and I build accessible web applications that ship.</h1>
          <p>
            I’m a full-stack developer focused on building accessible and reliable web applications.
            I care about clean interfaces, thoughtful architecture, and shipping work that performs in real production environments.
          </p>
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
      </div>
        </div>
        <div
          className="overview-photo-slot"
          aria-label="Profile photo"
        >
          <img src={config.headshotUrl} alt="Anton Korchynskyi" />
        </div>
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
              {link.type === "svg" ? (
                <img src={link.icon} alt="" className="overview-link-svg" />
              ) : (
                link.icon
              )}
            </span>
            <span className="overview-link-label">{link.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Overview;
