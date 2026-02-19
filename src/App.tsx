import "./App.css";
import Education from "./components/Education";
import Form from "./components/Form";
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
      <Skills />
      <WorkExp />
      <Projects />
      <Education />
      <Form />
    </>
  );
}

export default App;
