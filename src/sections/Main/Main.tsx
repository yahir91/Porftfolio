import About from "../About/About";
import Experience from "../Experience/Experience";
import Intro from "../Intro/Intro";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <div className={classes.container}>
      <Intro />
      <About />
      <Experience />
    </div>
  );
};

export default Main;
