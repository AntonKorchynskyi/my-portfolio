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
            I got into software at Georgian College, where building things real people use
            quickly became the part I cared about most.
          </p>
          <p>
            At the Ontario Public Service I spent around two years on digital services used
            across the province. Working to WCAG and AODA standards taught me that a feature is
            only done when it works with a keyboard and a screen reader too.
          </p>
          <p>
            Outside work I keep building, from a charting playground to a Chrome extension,
            mostly to learn something new each time.
          </p>
          <div className="about-seeking">
            <p className="about-seeking-label mono">What I'm looking for</p>
            <p className="about-seeking-text">
              A Full-Stack or Frontend role, remote or hybrid, on a team that solves tough
              technical challenges and ships well-built products.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
