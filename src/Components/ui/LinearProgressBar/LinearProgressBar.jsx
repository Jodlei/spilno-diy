import PropTypes from "prop-types";
import { Wrap, ProgressBarText } from "./LinearProgressBar.styled";

const LinearProgressBar = ({ difficulty, intensity, coordinating }) => {
  return (
    <Wrap>
      <ProgressBarText>Складність{difficulty}</ProgressBarText>
      <ProgressBarText>Інтенсивність{intensity}</ProgressBarText>
      <ProgressBarText>Координація{coordinating}</ProgressBarText>
    </Wrap>
  );
};

LinearProgressBar.propTypes = {
  difficulty: PropTypes.number.isRequired,
  intensity: PropTypes.number.isRequired,
  coordinating: PropTypes.number.isRequired,
};

export default LinearProgressBar;
