import { Project } from "../ProjectsInfo";
import classes from "./ProjectCard.module.css";

interface Props {
  project: Project;
}
const ProjectCard = ({ project }: Props) => {
  return (
    <a className={classes.link} href={project.link}>
    <div className={classes.card}>
      <img src={project.image} alt={project.image} />
      <div className={classes.content}>
        <h1>{project.name}</h1>
        <p>{project.about}</p>
      </div>
    </div>
    </a>
  );
};

export default ProjectCard;
