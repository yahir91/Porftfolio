import classes from "./Intro.module.css";

const Intro = () => {
  return (
    <div className={classes.container}>
      <p className={classes.text}>I want to make <span className={classes.span}>Positive</span> impact wherever I go</p>
      <img className={classes.image} src="images/photo.webp" alt="Photo" />
    </div>
  );
};

export default Intro;
