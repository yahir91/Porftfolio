import { useState } from "react";
import { Project } from "../ProjectsInfo";
import classes from "./ProjectCard.module.css";

interface Props {
  project: Project;
}
const ProjectCard = ({ project }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    // <a
    //   className={classes.link}
    //   href={project.link}
    //   target="_blank"
    //   rel="noopener noreferrer"
    // >
    <div className={classes.card}>
      {open ? (
        <>
          <div className={classes.accomplishments}>
            <h2>Accomplishments</h2>
            <ul>
              {project.accomplishments.map((item) => (
                <li key={`${project.id}-${item}`}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={classes.links}>
            <img src="icons/github.png" alt="github" />
            <img src="icons/github.png" alt="github" />
          </div>
          <div
            onClick={() => {
              setOpen(false);
            }}
            className={classes.link}
          >
            <img
              className={classes.icon}
              src="icons/close-icon.png"
              alt="close"
            />
          </div>
        </>
      ) : (
        <div>
          <img
            onClick={() => {
              setOpen(true);
            }}
            className={classes.link}
            src={project.image}
            alt={project.image}
          />
          <div className={classes.content}>
            <h1>{project.name}</h1>
            <p>{project.about}</p>
          </div>
        </div>
      )}
    </div>
    // </a>
  );
};

export default ProjectCard;
