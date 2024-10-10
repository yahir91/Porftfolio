import SectionDivider from "../../components/SectionDivider/SectionDivider";
import { STORY } from "./StoriesInfo";
import StoryCard from "./StoryCard/StoryCard";
import classes from "./Story.module.css";

const Story = () => {
  return (
    <div>
      <SectionDivider title="ARTICLES" />
      <div className={classes.content}>
        {STORY.map((item) => (
          <StoryCard story={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Story;
