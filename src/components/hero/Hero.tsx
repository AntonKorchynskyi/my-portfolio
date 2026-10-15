import { config } from "../../config";
import photo400 from "../../assets/img/anton-400.webp";
import { ArrowRightIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "../ui/Icons";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="overview" aria-labelledby="hero-title">
      <div className="hero">
        <div>
          <p className="hero-greeting">
            Hi, I'm <strong>Anton</strong>, a full-stack developer in Ontario, Canada.
          </p>
          {/* Lines rise into place but are painted from the first frame. */}
          <h1 id="hero-title" className="hero-title">
            <span className="hero-line">
              <span style={{ "--i": 0 } as React.CSSProperties}>Web apps that work</span>
            </span>
            <span className="hero-line">
              <span className="hero-accent" style={{ "--i": 1 } as React.CSSProperties}>
                for everyone.
              </span>
            </span>
          </h1>
          <p className="hero-proof">
            Around two years at the Ontario Public Service shipping accessible React and
            Next.js interfaces, Flask microservices on Azure Kubernetes Service, and the
            GitHub Actions pipelines that deploy them. Now also building backends with Java
            and Spring Boot.
          </p>
          <p className="hero-status">
            <span className="status-dot" aria-hidden="true" />
            Looking for Full-Stack and Frontend roles, remote or hybrid.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#contact" data-track="contact/hero">
              Get in touch
              <ArrowRightIcon />
            </a>
            <a
              className="btn btn-secondary"
              href={config.resumeUrl}
              download={config.resumeFileName}
              data-track="resume/hero"
            >
              Download resume
              <DownloadIcon />
            </a>
          </div>
          <ul className="hero-socials">
            <li>
              <a
                className="social"
                href={config.github}
                target="_blank"
                rel="noreferrer"
                data-track="github/hero"
              >
                <GitHubIcon />
                GitHub
              </a>
            </li>
            <li>
              <a
                className="social"
                href={config.linkedin}
                target="_blank"
                rel="noreferrer"
                data-track="linkedin/hero"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
            </li>
            <li>
              <a className="social" href={`mailto:${config.email}`} data-track="email/hero">
                <MailIcon />
                Email
              </a>
            </li>
          </ul>
        </div>
        <figure className="hero-photo">
          <div>
            <img
              src={photo400}
              alt="Anton Korchynskyi, smiling, wearing glasses and a navy t-shirt"
              width="400"
              height="400"
              fetchPriority="high"
            />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
