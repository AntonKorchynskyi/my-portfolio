import { useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Certs from "./components/Certs";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExp from "./components/WorkExp";
import { startEngagementTracking } from "./utils/analytics";

function App() {
  useEffect(() => startEngagementTracking(), []);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Overview />
        <WorkExp />
        <Projects />
        <About />
        <Skills />
        <Education />
        <Certs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
