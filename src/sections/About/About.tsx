import SectionDivider from "../../components/SectionDivider/SectionDivider";
import classes from "./About.module.css";

const About = () => {
  return (
    <div>
      <SectionDivider title="ABOUT" />
      <div className={classes.content}>
        <p>
          My passion is building excellent software that improves the lives of
          those around me.
        </p>
        <br />
        <p>
          I’ve always sought out opportunities and challenges that are
          meaningful to me. Although my professional path has taken many twists
          and turns - from having success in several civil engineer projects to
          leading a hardware store company. I've never stopped engaging my
          passion to help others and solve problems. As a web developer, I enjoy
          using my obsessive attention to detail, my unequivocal love for making
          things, and my mission-driven work ethic to literally change the
          world. That's why I’m excited to make a big impact at a high growth
          company.
        </p>
      </div>
    </div>
  );
};

export default About;
