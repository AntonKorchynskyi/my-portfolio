import "./App.css";
import About from "./components/About";
import Certs from "./components/Certs";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExp from "./components/WorkExp";

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Overview />
        <About />
        <Skills />
        <WorkExp />
        <Projects />
        <Education />
        <Certs />
      </main>
      <Footer />
    </>
  );
}

export default App;
