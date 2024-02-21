import { Experience } from "../../sections/Experience/Experiences";
import classes from "./ExperienceCard.module.css";

interface Props {
  job: Experience;
}
const ExperienceCard = ({ job }: Props) => {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <div>
          <img src={job.logo} alt={job.logo} />
          <span className={classes.companyName}>{job.company}</span>
        </div>
        <span className={classes.position}>{job.position}</span>
      </header>
      <section className={classes.content}>
        <p>{job.companyInformation}</p>
        {job.responsibilities.map((item) => (
          <div key={`${job.id}-${item.title}`}>
            <h3>{item.title}</h3>
            <ul>
              {item.bullets.map((bullet) => (
                <li key={`${job.id}-${bullet}`}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <footer className={classes.footer}>
        <span>{`${job.jobDate} | ${job.location}`}</span>
      </footer>
    </div>
  );
};

export default ExperienceCard;
