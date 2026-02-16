const Projects = () => {
  return (
    <section className="section" id="projects">
      <p className="section-kicker">Projects</p>
      <h2>Featured Project</h2>
      <article className="project-card">
        <h3>SoundHouseFun</h3>
        <p>
          Online music store with registration, purchase flows, and downloadable
          content. Implemented Stripe payments, Google authorization, and an
          admin role for catalog management.
        </p>
        <p>
          Tech stack: C#, ASP.NET, MS SQL, Entity Framework, HTML, CSS,
          Bootstrap.
        </p>
        <a href="#" aria-label="Project link placeholder for SoundHouseFun">
          Add project link later
        </a>
      </article>
    </section>
  );
};

export default Projects;
