import SectionDivider from "../../components/SectionDivider/SectionDivider";
import classes from "./Education.module.css";
import EducationCard from "./EducationCard/EducationCard";
import { EDUCATION } from "./EducationInfo";

const Education = () => {
  return (
    <div>
      <SectionDivider title="EDUCATION" />
      <div className={classes.content}>
        {EDUCATION.map((item) => (
          <EducationCard education={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Education;
