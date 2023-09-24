import PropTypes from "prop-types";
import {
  ListItem,
  Title,
  Description,
  Count,
  Button,
} from "./ExersciceItem.styled";
import VideoFrame from "../../ui/VideoFrame/VideoFrame";
import { useProgress } from "../../../hooks/useProgress.jsx";
import ButtonLoader from "../../ui/ButtonLoader/ButtonLoader.jsx";
import { useDispatch } from "react-redux";
import { setProgress } from "../../../redux/progress/operations.js";
import { toast } from "react-toastify";

const ExerciceItem = ({
  title,
  video,
  description,
  repetitionCount,
  programId,
  exerciceId,
}) => {
  const dispatch = useDispatch();
  const { isLoading, countExercises, progressAmount } = useProgress();

  const handleClickWithProgress = async () => {
    await dispatch(
      setProgress({
        program_id: programId,
        workout_exercises_id: exerciceId,
      })
    );
  };

  return (
    <ListItem>
      <Title>{title}</Title>
      <VideoFrame src={video} />
      <Description>{description}</Description>
      <Count>Кількість повторювань - {repetitionCount}</Count>
      <Button disabled={isLoading} onClick={handleClickWithProgress}>
        {isLoading ? <ButtonLoader color="white" width={25} /> : "Виконати"}
      </Button>
    </ListItem>
  );
};

ExerciceItem.propTypes = {
  title: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  repetitionCount: PropTypes.number.isRequired,
  programId: PropTypes.string.isRequired,
  exerciceId: PropTypes.number.isRequired,
};

export default ExerciceItem;
