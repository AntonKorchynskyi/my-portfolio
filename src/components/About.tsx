import { config } from "../config";

const About = () => {
  return (
    <section className="section" id="about">
      <p className="section-kicker">About Me</p>
      <h2>Who I Am</h2>
      <div className="about-content">
        <p>
          My journey started at Georgian College, where I discovered my passion for building 
          scalable web applications. Through hands-on projects and real-world experience at 
          Ontario Public Service, I've developed expertise in full-stack development with a 
          strong focus on accessibility and cloud infrastructure.
        </p>
        <p>
          I specialize in bridging the gap between frontend excellence and cloud infrastructure, 
          with a strong focus on accessibility compliance. My experience spans from building 
          accessible React components aligned with AODA/WCAG standards to architecting 
          cloud microservices and deployment pipelines.
        </p>
        <p>
          When I'm not coding, I enjoy staying current with the latest web technologies and 
          contributing to open-source projects. I'm passionate about creating inclusive digital 
          experiences that work for everyone.
        </p>
        <p className="career-goal">
          <strong>What I'm seeking:</strong> {config.careerGoal}
        </p>
      </div>
    </section>
  );
};

export default About;
