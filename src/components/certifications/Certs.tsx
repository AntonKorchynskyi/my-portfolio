import { ArrowUpRightIcon } from "../ui/Icons";
import "./Certs.css";

const credlyCerts = [
  {
    slug: "az-900",
    code: "AZ-900",
    name: "Azure Fundamentals",
    url: "https://www.credly.com/badges/ac384499-f563-4af0-81bc-fe408a144cd8",
  },
  {
    slug: "ai-900",
    code: "AI-900",
    name: "Azure AI Fundamentals",
    url: "https://www.credly.com/badges/bbc393dc-f817-40a6-b9ec-ad63619e3b21",
  },
  {
    slug: "sc-900",
    code: "SC-900",
    name: "Security, Compliance, Identity",
    url: "https://www.credly.com/badges/f0fe8bbc-b6eb-42a8-8c92-127a624fd645",
  },
  {
    slug: "dp-900",
    code: "DP-900",
    name: "Azure Data Fundamentals",
    url: "https://www.credly.com/badges/e45ee0b1-b25b-4c8a-b07a-296499744284",
  },
];

const linkedInCerts = [
  {
    slug: "azure-devops-for-beginners",
    name: "Azure DevOps for Beginners",
    url: "https://www.linkedin.com/learning/certificates/5f3595e3399efdd961529b63689a691d7b0723f0c3b40fe145b4f898c6488899?u=2175986",
  },
  {
    slug: "career-essentials-in-data-analysis",
    name: "Career Essentials in Data Analysis",
    url: "https://www.linkedin.com/learning/certificates/062f5ba939df3beb8efdebb631b97355fb1435567083e4fab2633b21ea42442b?u=2175986",
  },
  {
    slug: "databricks-for-data-engineering",
    name: "Databricks for Data Engineering",
    url: "https://www.linkedin.com/learning/certificates/ad2c4abf68a1b2529c1230b7c140a0a60f1ff2142b956f031eadfe2814b6d4da?u=2175986",
  },
];

const CertLink = ({ cert }: { cert: (typeof linkedInCerts)[number] }) => (
  <a
    className="certs-inline-link"
    href={cert.url}
    target="_blank"
    rel="noreferrer"
    data-track={`cert/${cert.slug}`}
  >
    {cert.name}
  </a>
);

const Certs = () => {
  const [devops, dataAnalysis, databricks] = linkedInCerts;

  return (
    <section id="certifications" className="sec certs" aria-labelledby="certs-title">
      <div className="split">
        <div>
          <p className="kicker certs-kicker">06 · Certifications</p>
          <h2 id="certs-title" className="h2-small">
            Certifications
          </h2>
        </div>
        <div>
          <ul className="certs-grid">
            {credlyCerts.map((cert) => (
              <li key={cert.slug}>
                <a
                  className="link-btn cert-tile"
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  data-track={`cert/${cert.slug}`}
                >
                  <span className="cert-code mono">{cert.code}</span>
                  <span className="cert-name">{cert.name}</span>
                  <span className="cert-arrow">
                    <ArrowUpRightIcon />
                  </span>
                  <span className="sr-only"> (view credential on Credly)</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="certs-more">
            Also from LinkedIn Learning: <CertLink cert={devops} />,{" "}
            <CertLink cert={dataAnalysis} />, and <CertLink cert={databricks} />.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certs;
