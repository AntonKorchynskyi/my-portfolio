import { config } from "../config";
import { downloadResume } from "../utils/downloadResume";

const handleResumeDownload = () => {
  downloadResume(config.resumeUrl, "Anton-Korchynskyi-Resume.pdf");
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href={config.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            GitHub
          </a>
          <a href={config.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            LinkedIn
          </a>
          <a href={`mailto:${config.email}`} aria-label="Email">
            Email
          </a>
          <button
            onClick={handleResumeDownload}
            className="footer-resume-link"
            aria-label="Download resume"
          >
            Resume
          </button>
        </div>
        <div className="footer-meta">
          <p>© {currentYear} Anton Korchynskyi</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
