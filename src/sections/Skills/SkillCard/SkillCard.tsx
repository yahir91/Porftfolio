import { Skills } from "../SkillsInfo";
import classes from "./SkillCard.module.css";

interface Props {
  skill: Skills;
}

const SkillCard = ({ skill }: Props) => {
  return (
    <div className={classes.container}>
      <h2>{skill.title}</h2>
      <div className={classes.skillsContainer}>
        {skill.skills.map((item) => (
          <div className={classes.skill} key={`${skill.id}-${item.name}`}>
            <img src={item.logo} alt={item.name} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
