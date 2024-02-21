import About from "../About/About";
import Experience from "../Experience/Experience";
import Intro from "../Intro/Intro";
import Projects from "../Projects/Projects";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <div className={classes.container}>
      <Intro />
      <About />
      <Experience />
      <Projects />
    </div>
  );
};

export default Main;
