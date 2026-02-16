import "./App.css";
import Education from "./components/Education";
import Form from "./components/Form";
import Header from "./components/Header";
import Links from "./components/Links";
import Now from "./components/Now";
import Overview from "./components/Overview";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExp from "./components/WorkExp";

function App() {
  return (
    <>
      <Header />
      <Overview />
      <Skills />
      <WorkExp />
      <Projects />
      <Education />
      <Now />
      <Links />
      <Form />
    </>
  );
}

export default App;
