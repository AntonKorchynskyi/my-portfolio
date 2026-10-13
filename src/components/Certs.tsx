import { toSlug } from "../utils/analytics";

interface Cert {
  title: string;
  issuer: string;
  summary: string;
  url: string;
}

const certs: Cert[] = [
  {
    title: "AZ-900",
    issuer: "Microsoft",
    summary: "Microsoft Azure Fundamentals",
    url: "https://www.credly.com/badges/ac384499-f563-4af0-81bc-fe408a144cd8",
  },
  {
    title: "AI-900",
    issuer: "Microsoft",
    summary: "Microsoft Azure AI Fundamentals",
    url: "https://www.credly.com/badges/bbc393dc-f817-40a6-b9ec-ad63619e3b21",
  },
  {
    title: "SC-900",
    issuer: "Microsoft",
    summary: "Microsoft Security, Compliance, and Identity Fundamentals",
    url: "https://www.credly.com/badges/f0fe8bbc-b6eb-42a8-8c92-127a624fd645",
  },
  {
    title: "DP-900",
    issuer: "Microsoft",
    summary: "Microsoft Azure Data Fundamentals",
    url: "https://www.credly.com/badges/e45ee0b1-b25b-4c8a-b07a-296499744284",
  },
  {
    title: "Azure DevOps for Beginners",
    issuer: "LinkedIn Learning",
    summary: "Azure DevOps for Beginners",
    url: "https://www.linkedin.com/learning/certificates/5f3595e3399efdd961529b63689a691d7b0723f0c3b40fe145b4f898c6488899?u=2175986",
  },
  {
    title: "Career Essentials in Data Analysis",
    issuer: "LinkedIn Learning & Microsoft",
    summary: "Career Essentials in Data Analysis",
    url: "https://www.linkedin.com/learning/certificates/062f5ba939df3beb8efdebb631b97355fb1435567083e4fab2633b21ea42442b?u=2175986",
  },
  {
    title: "Complete Guide to Databricks for Data Engineering",
    issuer: "LinkedIn Learning",
    summary: "Complete Guide to Databricks for Data Engineering",
    url: "https://www.linkedin.com/learning/certificates/ad2c4abf68a1b2529c1230b7c140a0a60f1ff2142b956f031eadfe2814b6d4da?u=2175986",
  },
];

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const Certs = () => {
  return (
    <section className="section certs-section" id="certifications">
      <p className="section-kicker">Credentials</p>
      <h2>Certifications</h2>
      <div className="certs-grid">
        {certs.map((cert) => (
          <article className="cert-card" key={cert.url}>
            <div className="cert-card__body">
              <h3 className="cert-card__title">{cert.title}</h3>
              {cert.summary !== cert.title && (
                <p className="cert-card__summary">{cert.summary}</p>
              )}
              <span className="cert-card__issuer">{cert.issuer}</span>
            </div>
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card__cta"
              aria-label={`View credential for ${cert.title}`}
              data-track={`credential/${toSlug(cert.title)}`}
            >
              View credential
              <ExternalLinkIcon />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certs;
