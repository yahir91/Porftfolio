import SectionDivider from "../../components/SectionDivider/SectionDivider";
import { CONTACT } from "./ContactInfo";

const Contact = () => {
  return (
    <div>
      <SectionDivider title="CONTACT" />
      <div>
        {CONTACT.map((item) => (
          <div key={item.id}>
            <img src={item.logo} alt={item.name} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
