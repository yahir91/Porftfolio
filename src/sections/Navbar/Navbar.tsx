import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1>Yahir Cardona</h1>
        <p>Full Stack Engineer</p>
      </div>

      <div className={classes.sectionsContainer}>
        <div className={classes.section}>
          <img src="/About.png" alt="About" />
          <span>About</span>
        </div>
        <div className={classes.section}>
          <img src="/Experience.png" alt="Experience" />
          <span>Experience</span>
        </div>
        <div className={classes.section}>
          <img src="/Project.png" alt="Projects" />
          <span>Projects</span>
        </div>
        <div className={classes.section}>
          <img src="/Skill.png" alt="Skills" />
          <span>Skills</span>
        </div>
        <div className={classes.section}>
          <img src="/Education.png" alt="Education" />
          <span>Education</span>
        </div>
        <div className={classes.section}>
          <img src="/Contact.png" alt="Contact" />
          <span>Contact</span>
        </div>
        <div className={classes.section}>
          <img src="/Resume.png" alt="Resume" />
          <span>Resume</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
