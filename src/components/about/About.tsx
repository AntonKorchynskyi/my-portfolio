import Reveal from "../ui/Reveal";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="sec" aria-labelledby="about-title">
      <div className="sec-rule split">
        <div>
          <p className="kicker">02 · About</p>
          <h2 id="about-title" className="h2">
            A bit about me
          </h2>
        </div>
        <Reveal className="about-body">
          <p className="about-lead">
            I got into software at Georgian College, where I discovered how much
            I enjoy building applications that people can actually use.
          </p>
          <p>
            Through co-op placements and a subsequent role at the Ontario Public
            Service, I contributed to digital services used across the province.
            Working in a regulated enterprise environment taught me the
            importance of building secure, reliable, and maintainable software
            that meets real-world requirements.
          </p>
          <p>
            Outside work, I keep building, from an AI-powered data visualization
            application to a Chrome extension. Every project is an opportunity
            to solve problems, explore new technologies, and grow as a
            developer.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
