import { STORY } from "../StoriesInfo";
import classes from "./StoryCard.module.css";

interface Props {
  story: STORY;
}

const StoryCard = ({ story }: Props) => {
  return (
    <div className={classes.container}>
      <h2>{story.name}</h2>
      <h3>{story.topic}</h3>
      <a href={story.link} target="_blank" rel="noopener noreferrer">
        Article Link
      </a>
    </div>
  );
};

export default StoryCard;
