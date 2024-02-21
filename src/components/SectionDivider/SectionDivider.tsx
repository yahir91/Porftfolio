import classes from "./SectionDivider.module.css";

interface Props {
  title: string;
}
const SectionDivider = ({ title }: Props) => {
  return (
    <div className={classes.header}>
      <h2>{title}</h2>
    </div>
  );
};

export default SectionDivider;
