import SectionDivider from "../../components/SectionDivider/SectionDivider";
import ProjectCard from "./ProjectCard/ProjectCard";
import { PROJECTS } from "./Projects";
import classes from "./Projects.module.css";

const Projects = () => {
  return (
    <div>
      <SectionDivider title="PROJECTS" />
      <div className={classes.content}>
        {PROJECTS.map((item) => (
          <ProjectCard project={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
