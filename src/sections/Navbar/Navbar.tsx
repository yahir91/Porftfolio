import { RefObject } from "react";
import classes from "./Navbar.module.css";

type Reference = {
  about: RefObject<HTMLDivElement>;
  experience: RefObject<HTMLDivElement>;
  projects: RefObject<HTMLDivElement>;
  skills: RefObject<HTMLDivElement>;
  education: RefObject<HTMLDivElement>;
  contact: RefObject<HTMLDivElement>;
};
interface Props {
  reference: Reference;
  handleScroll: (ref: HTMLDivElement) => void;
}

const Navbar = ({ reference, handleScroll }: Props) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1>Yahir Cardona</h1>
        <p>Full Stack Engineer</p>
      </div>

      <div className={classes.sectionsContainer}>
        <div
          className={classes.section}
          onClick={() => {
            handleScroll(reference.about.current!);
          }}
        >
          <img src="/icons/About.png" alt="About" />
          <span>About</span>
        </div>
        <div
          className={classes.section}
          onClick={() => {
            handleScroll(reference.experience.current!);
          }}
        >
          <img src="/icons/Experience.png" alt="Experience" />
          <span>Experience</span>
        </div>
        <div
          className={classes.section}
          onClick={() => {
            handleScroll(reference.projects.current!);
          }}
        >
          <img src="/icons/Project.png" alt="Projects" />
          <span>Projects</span>
        </div>
        <div
          className={classes.section}
          onClick={() => {
            handleScroll(reference.skills.current!);
          }}
        >
          <img src="/icons/Skill.png" alt="Skills" />
          <span>Skills</span>
        </div>
        <div
          className={classes.section}
          onClick={() => {
            handleScroll(reference.education.current!);
          }}
        >
          <img src="/icons/Education.png" alt="Education" />
          <span>Education</span>
        </div>
        <div
          className={classes.section}
          onClick={() => {
            handleScroll(reference.contact.current!);
          }}
        >
          <img src="/icons/Contact.png" alt="Contact" />
          <span>Contact</span>
        </div>
        <div className={classes.section}>
          <img src="/icons/Resume.png" alt="Resume" />
          <span>Resume</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
