import { config } from "../config";
import { downloadResume } from "../utils/downloadResume";

const navItems = [
  { href: "#work-experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const handleResumeDownload = () => {
  downloadResume(config.resumeUrl, "Anton-Korchynskyi-Resume.pdf");
};

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#overview">
          <span className="brand-name">Anton Korchynskyi</span>
          <span className="brand-role">Web Developer | Full-Stack & Cloud</span>
        </a>
        <nav aria-label="Primary navigation" className="main-links">
          {navItems.map((item) => (
            <a
              href={item.href}
              key={item.href}
              data-track={`nav/${item.href.slice(1)}`}
            >
              {item.label}
            </a>
          ))}
          <button
            className="header-resume-btn"
            onClick={handleResumeDownload}
            aria-label="Download resume"
            data-track="resume/header"
          >
            Resume
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
