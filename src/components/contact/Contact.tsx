import { useEffect, useRef, useState } from "react";
import { config } from "../../config";
import { CheckIcon, CopyIcon, DownloadIcon, LinkedInIcon } from "../ui/Icons";
import "./Contact.css";

const COPIED_RESET_MS = 2500;

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(config.email);
    } catch {
      // Clipboard blocked (e.g. insecure context): open the mail client instead.
      window.location.href = `mailto:${config.email}`;
      return;
    }
    setCopied(true);
    window.clearTimeout(resetTimer.current);
    resetTimer.current = window.setTimeout(() => setCopied(false), COPIED_RESET_MS);
  };

  return (
    <section id="contact" className="sec contact" aria-labelledby="contact-title">
      <div className="sec-rule split contact-split">
        <div>
          <p className="kicker">07 · Contact</p>
          <h2 id="contact-title" className="contact-title">
            Let's talk.
          </h2>
          <p className="contact-lead">
            Available now for Full-Stack and Frontend roles, remote or hybrid, from Ontario,
            Canada.
          </p>
        </div>
        <div>
          <p className="contact-label mono">Email</p>
          <a className="contact-email" href={`mailto:${config.email}`} data-track="email/contact">
            {config.email}
          </a>
          <div className="contact-actions">
            <button
              type="button"
              className="link-btn"
              onClick={handleCopyEmail}
              data-track="copy-email/contact"
            >
              {copied ? (
                <span className="contact-check">
                  <CheckIcon />
                </span>
              ) : (
                <CopyIcon />
              )}
              {copied ? "Copied" : "Copy email"}
            </button>
            <a
              className="link-btn"
              href={config.linkedin}
              target="_blank"
              rel="noreferrer"
              data-track="linkedin/contact"
            >
              <LinkedInIcon size={16} />
              LinkedIn
            </a>
            <a
              className="link-btn"
              href={config.resumeUrl}
              download={config.resumeFileName}
              data-track="resume/contact"
            >
              <DownloadIcon size={16} />
              Resume
            </a>
          </div>
          <span className="sr-only" aria-live="polite">
            {copied ? "Email address copied to clipboard" : ""}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
