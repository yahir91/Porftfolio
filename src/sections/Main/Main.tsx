import { useRef } from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Intro from "../Intro/Intro";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import classes from "./Main.module.css";
import Navbar from "../Navbar/Navbar";
import Story from "../Stories/Story";

const Main = () => {
  const about = useRef<HTMLDivElement>(null);
  const experience = useRef<HTMLDivElement>(null);
  const projects = useRef<HTMLDivElement>(null);
  const story = useRef<HTMLDivElement>(null);
  const skills = useRef<HTMLDivElement>(null);
  const education = useRef<HTMLDivElement>(null);
  const contact = useRef<HTMLDivElement>(null);

  const handleScroll = (ref: HTMLDivElement) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={classes.container}>
      <Navbar
        reference={{
          about,
          experience,
          projects,
          story,
          skills,
          education,
          contact,
        }}
        handleScroll={handleScroll}
      />
      <div>
        <Intro />
      </div>
      <div ref={about}>
        <About />
      </div>
      <div ref={experience}>
        <Experience />
      </div>
      <div ref={projects}>
        <Projects />
      </div>
      <div ref={story}>
        <Story />
      </div>
      <div ref={skills}>
        <Skills />
      </div>
      <div ref={education}>
        <Education />
      </div>
      <div ref={contact}>
        <Contact />
      </div>
    </div>
  );
};

export default Main;
