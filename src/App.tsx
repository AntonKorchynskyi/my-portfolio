import { MotionConfig } from "motion/react";
import { useEffect } from "react";
import About from "./components/about/About";
import Certs from "./components/certifications/Certs";
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import ExperienceTimeline from "./components/experience/ExperienceTimeline";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import SkillsGroups from "./components/skills/SkillsGroups";
import { startEngagementTracking } from "./utils/analytics";

function App() {
  useEffect(() => startEngagementTracking(), []);

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Projects />
        <About />
        <ExperienceTimeline />
        <SkillsGroups />
        <Education />
        <Certs />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}

export default App;
