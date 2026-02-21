import { config } from "../config";

const navItems = [
  { href: "#overview", label: "Overview" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#work-experience", label: "Work Experience" },
  { href: "#education", label: "Education" },
];

const handleResumeDownload = () => {
  const link = document.createElement("a");
  link.href = config.resumeUrl;
  link.download = "Anton-Korchynskyi-Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
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
