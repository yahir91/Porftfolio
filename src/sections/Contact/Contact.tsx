import SectionDivider from "../../components/SectionDivider/SectionDivider";
import { CONTACT } from "./ContactInfo";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={classes.container}>
      <SectionDivider title="CONTACT" />
      <div className={classes.content}>
        {CONTACT.map((item) => (
          <a className={classes.link} href={item.link}>
            <div className={classes.card} key={item.id}>
              <img src={item.logo} alt={item.name} />
              <span>{item.name}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
