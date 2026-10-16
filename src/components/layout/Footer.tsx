import { config } from "../../config";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../ui/Icons";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="mono">
          © {currentYear} {config.name}
        </p>
        <nav className="footer-nav" aria-label="Footer">
          <ul>
            <li>
              <a
                className="social"
                href={config.github}
                target="_blank"
                rel="noreferrer"
                data-track="github/footer"
              >
                <GitHubIcon size={16} />
                GitHub
              </a>
            </li>
            <li>
              <a
                className="social"
                href={config.linkedin}
                target="_blank"
                rel="noreferrer"
                data-track="linkedin/footer"
              >
                <LinkedInIcon size={15} />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="social"
                href={`mailto:${config.email}`}
                data-track="email/footer"
              >
                <MailIcon size={16} />
                Email
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
