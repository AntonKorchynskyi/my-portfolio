import { MotionConfig } from "motion/react";
import { useEffect } from "react";
import About from "./components/About";
import Certs from "./components/Certs";
import Contact from "./components/Contact";
import Education from "./components/Education";
import ExperienceTimeline from "./components/ExperienceTimeline";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import SkillsGroups from "./components/SkillsGroups";
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
