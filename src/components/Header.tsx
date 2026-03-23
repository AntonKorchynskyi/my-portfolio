import { config } from "../config";
import { downloadResume } from "../utils/downloadResume";

const navItems = [
  { href: "#overview", label: "Overview" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#work-experience", label: "Work Experience" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
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
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
          <button 
            className="header-resume-btn" 
            onClick={handleResumeDownload}
            aria-label="Download resume"
          >
            Resume
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
