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
      <Header />
      <Overview />
      <About />
      <Skills />
      <WorkExp />
      <Projects />
      <Education />
      <Certs />
      <Footer />
    </>
  );
}

export default App;
