import About from "../About/About";
import Intro from "../Intro/Intro";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <div className={classes.container}>
      <Intro />
      <About />
    </div>
  );
};

export default Main;
