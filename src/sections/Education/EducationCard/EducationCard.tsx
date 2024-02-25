import { Education } from "../EducationInfo";
import classes from "./EducationCard.module.css";

interface Props {
  education: Education;
}

const EducationCard = ({ education }: Props) => {
  return (
    <div className={classes.container}>
      <h2>{education.name}</h2>
      <h3>{education.location}</h3>
      <span>{education.title}</span>
    </div>
  );
};

export default EducationCard;
