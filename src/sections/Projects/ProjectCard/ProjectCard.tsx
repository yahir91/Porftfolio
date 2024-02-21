import { Project } from "../Projects";
import classes from "./ProjectCard.module.css";

interface Props {
  project: Project;
}
const ProjectCard = ({ project }: Props) => {
  return (
    <div className={classes.card}>
      <img src={project.image} alt={project.image} />
      <h1>{project.name}</h1>
      <p>{project.about}</p>
    </div>
  );
};

export default ProjectCard;
