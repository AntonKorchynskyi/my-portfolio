import { config } from "../config";
import { downloadResume } from "../utils/downloadResume";
import GitHubIcon from "../assets/GitHub_Invertocat_Black.svg";
import LinkedInIcon from "../assets/linkedin-svgrepo-com.svg";

const profileLinks = [
  {
    href: config.github,
    icon: GitHubIcon,
    label: "GitHub",
    type: "svg" as const,
    external: true,
  },
  {
    href: config.linkedin,
    icon: LinkedInIcon,
    label: "LinkedIn",
    type: "svg" as const,
    external: true,
  },
  {
    href: `mailto:${config.email}`,
    icon: "@",
    label: "Email",
    type: "text" as const,
    external: false,
  },
];

const handleResumeDownload = () => {
  downloadResume(config.resumeUrl, "Anton-Korchynskyi-Resume.pdf");
};

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Overview = () => {
  return (
    <section
      className="section section-overview"
      id="overview"
      aria-labelledby="overview-title"
    >
      <div className="overview-hero">
        <div className="overview-content">
          <p className="availability-badge">
            <span className="availability-dot" aria-hidden="true" />
            {config.availability}
          </p>
          <h1 id="overview-title">
            Hello, I'm <span className="highlight">Anton</span> and I build
            accessible production-ready web applications.
          </h1>
          <p>
            Full-stack developer who spent nearly two years at the Ontario Public
            Service building accessible React and Next.js interfaces, Python
            APIs, and Azure cloud services for provincial digital services. I
            care about software that works for everyone.
          </p>
          <div className="overview-ctas">
            <button
              className="cta-button cta-primary"
              onClick={() => scrollToSection("contact")}
              data-track="contact/hero"
            >
              Get in touch
            </button>
            <button
              className="cta-button cta-secondary"
              onClick={handleResumeDownload}
              data-track="resume/hero"
            >
              Download resume
            </button>
          </div>
        </div>
        <div className="overview-photo-slot" aria-label="Profile photo">
          <img src={config.headshotUrl} alt="Anton Korchynskyi" />
        </div>
      </div>

      <div className="overview-links" id="overview-links">
        {profileLinks.map((link) => (
          <a
            className="overview-link"
            href={link.href}
            key={link.href + link.label}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noreferrer" : undefined}
            aria-label={link.label}
            data-track={`${link.label.toLowerCase()}/hero`}
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
