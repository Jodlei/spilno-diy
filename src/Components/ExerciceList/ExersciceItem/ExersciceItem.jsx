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
import { useState } from "react";

const ExerciceItem = ({
  id,
  title,
  video,
  description,
  repetitionCount,
  programId,
  exerciceId,
  toggleModal,
}) => {
  const dispatch = useDispatch();
  const { countExercises, progressAmount } = useProgress();

  const [isCompleted, setIsCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClickWithProgress = async () => {
    setIsLoading(true);

    await dispatch(
      setProgress({
        program_id: programId,
        workout_exercises_id: exerciceId,
      })
    );

    if (progressAmount % 100 === 0) {
      toggleModal(id);
    }
    toast("Виконано");
    setIsLoading(false);
    setIsCompleted(true);
  };

  return (
    <ListItem>
      <Title>{title}</Title>
      <VideoFrame src={video} />
      <Description>{description}</Description>
      <Count>Кількість повторювань - {repetitionCount}</Count>
      <Button disabled={isLoading} onClick={handleClickWithProgress}>
        {isLoading ? (
          <ButtonLoader color="white" width={25} />
        ) : isCompleted ? (
          "Виконано"
        ) : (
          "Виконати"
        )}
      </Button>
    </ListItem>
  );
};

ExerciceItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  repetitionCount: PropTypes.number.isRequired,
  programId: PropTypes.string.isRequired,
  exerciceId: PropTypes.number.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default ExerciceItem;
