import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import classes from "./Experience.module.css";
import { EXPERIENCES } from "./Experiences";

const Experience = () => {
  return (
    <div>
      <div className={classes.header}>
        <h2>EXPERIENCE</h2>
      </div>
      <div className={classes.content}>
        {EXPERIENCES.map((item) => (
          <ExperienceCard job={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
