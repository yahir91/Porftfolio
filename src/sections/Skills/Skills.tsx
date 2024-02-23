import SectionDivider from "../../components/SectionDivider/SectionDivider";
import SkillCard from "./SkillCard/SkillCard";
import classes from "./Skills.module.css";
import { SKILLS } from "./SkillsInfo";

const Skills = () => {
  return (
    <div>
      <SectionDivider title="SKILLS" />
      <div className={classes.content}>
        {SKILLS.map((item) => (
          <SkillCard skill={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
