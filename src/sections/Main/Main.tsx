import About from "../About/About";
import Experience from "../Experience/Experience";
import Intro from "../Intro/Intro";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <div className={classes.container}>
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Skills />
    </div>
  );
};

export default Main;
