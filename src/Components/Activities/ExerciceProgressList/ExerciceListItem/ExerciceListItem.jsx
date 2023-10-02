import {
  ListItem,
  ProgressBarWrapper,
  Title,
  Text,
  TextWrapper,
} from "./ExerciceListItem.styled";
import CircleProgressBar from "../../../ui/CircleProgressBar/CircleProgressBar";
import PropTypes from "prop-types";

const ExerciceListItem = ({ title, progress, exercices }) => {
  const exercisesValuesArray = exercices.map((exerciseObject) => {
    const exerciseValues = Object.values(exerciseObject);
    return exerciseValues.join(", ");
  });
  const exercisesString = exercisesValuesArray.join("\n");

  return (
    <ListItem>
      <ProgressBarWrapper>
        <CircleProgressBar
          progressAmount={progress}
          normilizedProgressAmount={progress}
          strokeWidth={15}
          textSize={"15px"}
          pathColor={`rgba(86, 217, 138, 1)`}
          textColor={`#101828`}
          trailColor={`rgba(214, 241, 225, 1)`}
          backgroundColor={`rgba(86, 217, 193, 1)`}
        />
      </ProgressBarWrapper>

      <TextWrapper>
        <Title>{title}</Title>

        <Text>{exercisesString}</Text>
      </TextWrapper>
    </ListItem>
  );
};

ExerciceListItem.propTypes = {
  title: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  exercices: PropTypes.array.isRequired,
};

export default ExerciceListItem;
