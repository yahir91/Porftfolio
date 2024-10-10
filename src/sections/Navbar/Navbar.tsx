import { RefObject, useEffect, useState } from "react";
import classes from "./Navbar.module.css";

type Reference = {
  about: RefObject<HTMLDivElement>;
  experience: RefObject<HTMLDivElement>;
  projects: RefObject<HTMLDivElement>;
  story: RefObject<HTMLDivElement>;
  skills: RefObject<HTMLDivElement>;
  education: RefObject<HTMLDivElement>;
  contact: RefObject<HTMLDivElement>;
};
interface Props {
  reference: Reference;
  handleScroll: (ref: HTMLDivElement) => void;
}

const Navbar = ({ reference, handleScroll }: Props) => {
  const [heightScroll, setHeightScroll] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setHeightScroll(window.scrollY);
    });
  }, [heightScroll]);

  const documentHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );

  const isSection = (
    offset: number | undefined,
    nextOffset: number | undefined
  ) => {
    if (
      offset &&
      nextOffset &&
      heightScroll >= offset - 250 &&
      nextOffset - 250 >= heightScroll
    ) {
      return true;
    }
    return false;
  };

  return (
    <div className={classes.container}>
      <div
        className={classes.option}
        onClick={() => setOpenMenu((prev) => !prev)}
      >
        <img src="icons/menu.png" alt="options" />
      </div>

      <div className={classes.header}>
        <h1>Yahir Cardona</h1>
        <p>Full Stack Engineer</p>
      </div>
      <div
        className={`${openMenu && classes.modal}`}
        onClick={() => setOpenMenu(false)}
      >
        <div
          className={`${classes.sectionsContainer} ${
            !openMenu && classes.displayNone
          }`}
        >
          <div
            className={`${classes.section} ${
              isSection(
                reference.about.current?.offsetTop,
                reference.experience.current?.offsetTop
              ) && classes.highlighted
            }`}
            onClick={() => {
              handleScroll(reference.about.current!);
            }}
          >
            <img src="icons/About.png" alt="About" />
            <span>About</span>
          </div>
          <div
            className={`${classes.section} ${
              isSection(
                reference.experience.current?.offsetTop,
                reference.projects.current?.offsetTop
              ) && classes.highlighted
            }`}
            onClick={() => {
              handleScroll(reference.experience.current!);
            }}
          >
            <img src="icons/Experience.png" alt="Experience" />
            <span>Experience</span>
          </div>
          <div
            className={`${classes.section} ${
              isSection(
                reference.projects.current?.offsetTop,
                reference.story.current?.offsetTop
              ) && classes.highlighted
            }`}
            onClick={() => {
              handleScroll(reference.projects.current!);
            }}
          >
            <img src="icons/Project.png" alt="Projects" />
            <span>Projects</span>
          </div>
          <div
            className={`${classes.section} ${
              isSection(
                reference.story.current?.offsetTop,
                reference.skills.current?.offsetTop
              ) && classes.highlighted
            }`}
            onClick={() => {
              handleScroll(reference.story.current!);
            }}
          >
            <img src="icons/Story.png" alt="Projects" />
            <span>Story</span>
          </div>
          <div
            className={`${classes.section} ${
              isSection(
                reference.skills.current?.offsetTop,
                reference.education.current?.offsetTop
              ) && classes.highlighted
            }`}
            onClick={() => {
              handleScroll(reference.skills.current!);
            }}
          >
            <img src="icons/Skill.png" alt="Skills" />
            <span>Skills</span>
          </div>
          <div
            className={`${classes.section} ${
              isSection(
                reference.education.current?.offsetTop,
                reference.contact.current?.offsetTop
              ) && classes.highlighted
            }`}
            onClick={() => {
              handleScroll(reference.education.current!);
            }}
          >
            <img src="icons/Education.png" alt="Education" />
            <span>Education</span>
          </div>
          <div
            className={`${classes.section} ${
              isSection(reference.contact.current?.offsetTop, documentHeight) &&
              classes.highlighted
            }`}
            onClick={() => {
              handleScroll(reference.contact.current!);
            }}
          >
            <img src="icons/Contact.png" alt="Contact" />
            <span>Contact</span>
          </div>
          <a
            className={classes.link}
            href="https://docs.google.com/document/d/1KklFeEX71Yvbeh-t6AXCqXc9KWpqbss_sFZOVD-6MpQ/edit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={classes.section}>
              <img src="icons/Resume.png" alt="Resume" />
              <span>Resume</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
