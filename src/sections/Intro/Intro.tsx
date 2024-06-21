import classes from "./Intro.module.css";

const Intro = () => {
  return (
    <div className={classes.container}>
      <p className={classes.text}>Lorem Ipsum indolore Lorem Ipsum Indlore LOrem Ipsum Indlolre</p>
      <img className={classes.image} src="images/photo.webp" alt="Photo" />
    </div>
  );
};

export default Intro;
