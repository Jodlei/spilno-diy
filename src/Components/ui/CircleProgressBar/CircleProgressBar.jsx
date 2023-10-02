import PropTypes from "prop-types";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircleProgressBar = ({
  progressAmount,
  normilizedProgressAmount,
  strokeWidth,
  textSize,
  pathColor,
  textColor,
  trailColor,
  backgroundColor,
}) => {
  return (
    <CircularProgressbar
      value={progressAmount}
      text={`${normilizedProgressAmount}%`}
      strokeWidth={strokeWidth}
      styles={buildStyles({
        textSize: textSize,
        pathColor: pathColor,
        textColor: textColor,
        trailColor: trailColor,
        backgroundColor: backgroundColor,
      })}
    />
  );
};

CircleProgressBar.propTypes = {
  progressAmount: PropTypes.number.isRequired,
  normilizedProgressAmount: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  textSize: PropTypes.string.isRequired,
  pathColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  trailColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default CircleProgressBar;
