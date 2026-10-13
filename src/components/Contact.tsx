import { useState } from "react";
import type { FormEvent } from "react";
import { config } from "../config";
import { trackEvent } from "../utils/analytics";
import { downloadResume } from "../utils/downloadResume";

type FormStatus = "idle" | "sending" | "success" | "error";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const COPIED_RESET_MS = 2500;

const handleResumeDownload = () => {
  downloadResume(config.resumeUrl, "Anton-Korchynskyi-Resume.pdf");
};

interface ContactFormProps {
  accessKey: string;
}

const ContactForm = ({ accessKey }: ContactFormProps) => {
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", accessKey);
    setStatus("sending");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: formData,
      });
      const data: { success?: boolean } = await response.json();
      if (!data.success) throw new Error("Web3Forms rejected the submission");
      form.reset();
      setStatus("success");
      trackEvent("sent/contact");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="hidden" name="subject" value="New message from your portfolio" />
      <input type="hidden" name="from_name" value="Portfolio contact form" />
      {/* Honeypot: hidden from people, filled in by bots, rejected by Web3Forms. */}
      <input
        type="checkbox"
        name="botcheck"
        className="contact-honeypot"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <label htmlFor="contact-name">Name</label>
      <input id="contact-name" name="name" type="text" autoComplete="name" required />

      <label htmlFor="contact-email">Email</label>
      <input id="contact-email" name="email" type="email" autoComplete="email" required />

      <label htmlFor="contact-message">Message</label>
      <textarea id="contact-message" name="message" rows={5} required />

      <div role="status" aria-live="polite">
        {status === "success" && (
          <p className="form-status form-status-success">
            Thanks, your message is on its way. I'll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="form-status form-status-error">
            Sorry, your message couldn't be sent. Please email me directly at{" "}
            <a href={`mailto:${config.email}`}>{config.email}</a>.
          </p>
        )}
      </div>

      <button type="submit" disabled={status === "sending"} data-track="submit/contact">
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
};

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(config.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), COPIED_RESET_MS);
    } catch {
      // Clipboard blocked (e.g. insecure context): fall back to the mail client.
      window.location.href = `mailto:${config.email}`;
    }
  };

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <p className="section-kicker">Contact</p>
      <h2 id="contact-title">Let's talk</h2>
      <p className="section-intro">
        {config.availability}. {config.location}. I usually reply within one
        business day.
      </p>

      <div className="contact-layout">
        {config.contactFormKey && <ContactForm accessKey={config.contactFormKey} />}

        <div className="contact-direct">
          <h3>Prefer to reach out directly?</h3>
          <p className="contact-email">{config.email}</p>
          <button
            type="button"
            className="cta-button cta-secondary"
            onClick={handleCopyEmail}
            data-track="copy-email/contact"
          >
            {copied ? "Email copied!" : "Copy email address"}
          </button>
          <span className="visually-hidden" aria-live="polite">
            {copied ? "Email address copied to clipboard" : ""}
          </span>
          <a
            className="cta-button cta-secondary"
            href={config.linkedin}
            target="_blank"
            rel="noreferrer"
            data-track="linkedin/contact"
          >
            Message me on LinkedIn
          </a>
          <button
            type="button"
            className="cta-button cta-secondary"
            onClick={handleResumeDownload}
            data-track="resume/contact"
          >
            Download my resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
