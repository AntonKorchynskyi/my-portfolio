const certs = [
  {
    name: "AZ-900",
    description: "Microsoft Azure Fundamentals",
    company: "Microsoft",
    credentialLink:
      "https://www.credly.com/badges/ac384499-f563-4af0-81bc-fe408a144cd8",
  },
  {
    name: "AI-900",
    description: "Microsoft Azure AI Fundamentals",
    company: "Microsoft",
    credentialLink:
      "https://www.credly.com/badges/bbc393dc-f817-40a6-b9ec-ad63619e3b21",
  },
  {
    name: "SC-900",
    description: "Microsoft Security, Compliance, and Identity Fundamentals",
    company: "Microsoft",
    credentialLink:
      "https://www.credly.com/badges/f0fe8bbc-b6eb-42a8-8c92-127a624fd645",
  },
  {
    name: "DP-900",
    description: "Microsoft Azure Data Fundamentals",
    company: "Microsoft",
    credentialLink:
      "https://www.credly.com/badges/e45ee0b1-b25b-4c8a-b07a-296499744284",
  },
  {
    name: "Azure DevOps for Beginners",
    description: "Azure DevOps for Beginners",
    company: "LinkedIn Learning",
    credentialLink:
      "https://www.linkedin.com/learning/certificates/5f3595e3399efdd961529b63689a691d7b0723f0c3b40fe145b4f898c6488899?u=2175986",
  },
  {
    name: "Career Essentials in Data Analysis",
    description: "Career Essentials in Data Analysis",
    company: "LinkedIn Learning & Microsoft",
    credentialLink:
      "https://www.linkedin.com/learning/certificates/062f5ba939df3beb8efdebb631b97355fb1435567083e4fab2633b21ea42442b?u=2175986",
  },
  {
    name: "Complete Guide to Databricks for Data Engineering",
    description: "Complete Guide to Databricks for Data Engineering",
    company: "LinkedIn Learning",
    credentialLink:
      "https://www.linkedin.com/learning/certificates/ad2c4abf68a1b2529c1230b7c140a0a60f1ff2142b956f031eadfe2814b6d4da?u=2175986",
  },
];

const Certs = () => {
  return (
    <section className="section" id="education">
      <p className="section-kicker">Education</p>
      <h2>Certifications</h2>
      <div className="grid-cards footer-links">
        {certs.map((cert) => (
          <article className="card">
            <h3>{cert.name}</h3>
            <p>{cert.description}</p>
            <p>{cert.company}</p>
            <a
              href={cert.credentialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Credential
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certs;
