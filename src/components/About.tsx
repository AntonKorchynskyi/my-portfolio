const About = () => {
  return (
    <section className="section" id="about">
      <p className="section-kicker">About Me</p>
      <h2>Who I Am</h2>
      <div className="about-content">
        <p>
          My journey into software development began at Georgian College, where
          I discovered a strong interest in building reliable web applications
          and digital services. Through academic projects and hands-on work with
          the Ontario Public Service, I gained experience developing production
          systems that support real users across the province.
        </p>
        <p>
          At OPS, I contributed to multiple digital modernization initiatives,
          including the Business Experience Platform and ServiceOntario
          integrations. My work focused on building accessible React and Next.js
          interfaces aligned with WCAG standards, integrating APIs, and
          supporting cloud-based services deployed through modern DevOps
          workflows.
        </p>
        <p>
          I enjoy working across the full web stack, combining frontend
          engineering, backend APIs, and cloud infrastructure to deliver
          practical solutions. Accessibility, usability, and maintainability are
          central to how I approach development, especially when building
          systems used by large and diverse audiences.
        </p>
        <p className="career-goal">
          <strong>What I'm seeking:</strong>{" "}
          <span>
            Full-Stack or Frontend Developer roles where I can contribute to
            building reliable, accessible, and well-designed digital products
            within collaborative teams.
          </span>
        </p>
      </div>
    </section>
  );
};

export default About;
