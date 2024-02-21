import ExperienceCard from "./ExperienceCard/ExperienceCard";
import SectionDivider from "../../components/SectionDivider/SectionDivider";
import classes from "./Experience.module.css";
import { EXPERIENCES } from "./Experiences";

const Experience = () => {
  return (
    <div>
      <SectionDivider title="EXPERIENCE" />
      <div className={classes.content}>
        {EXPERIENCES.map((item) => (
          <ExperienceCard job={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
