const profileLinks = [
  { href: "https://github.com/example", icon: "GH", label: "GitHub" },
  { href: "https://linkedin.com/in/example", icon: "in", label: "LinkedIn" },
  { href: "mailto:anton@example.com", icon: "@", label: "Email" },
];

const Overview = () => {
  return (
    <section className="section section-overview" id="overview">
      <div
        className="overview-photo-slot"
        aria-label="Profile photo placeholder"
      >
        <span>Photo</span>
      </div>
      <div className="overview-content">
        <p className="section-kicker">Overview</p>
        <h1>I Build Web Apps That Are Fast, Accessible, and Reliable.</h1>
        <p>
          I am Anton Korchynskyi, a full-stack developer focused on clean UI,
          practical architecture, and delivery in real production environments.
        </p>
        <p>
          Background: Georgian College graduate, Ontario Public Service project
          delivery (SOAB, EDR, BXP), and ongoing portfolio/product work.
        </p>
        <div className="overview-highlights">
          <span>React + TypeScript</span>
          <span>Cloud + DevOps</span>
          <span>AODA/WCAG</span>
        </div>
        <div className="overview-links" id="overview-links">
          {profileLinks.map((link) => (
            <a
              className="overview-link"
              href={link.href}
              key={link.label}
              target="_blank"
              rel="noreferrer"
            >
              <span aria-hidden="true" className="overview-link-icon">
                {link.icon}
              </span>
              <span className="overview-link-label">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
