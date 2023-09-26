import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Wrap } from "./DaysOfWeeksProgress.styled";
import "react-circular-progressbar/dist/styles.css";
import { useDispatch } from "react-redux";
import { useProgress } from "../../hooks/useProgress.jsx";
import { useEffect } from "react";
import { dayOfWeekProgress } from "../../redux/progress/operations.js";

const DaysOfWeeksProgress = () => {
  const dispatch = useDispatch();
  const { daysWithProgress } = useProgress();

  useEffect(() => {
    dispatch(dayOfWeekProgress());
  }, [dispatch]);

  return (
    <Wrap>
      {daysWithProgress.map(({ id, day, progress = 0 }) => (
        <CircularProgressbar
          key={id}
          value={progress}
          text={`${day}`}
          strokeWidth={15}
          styles={buildStyles({
            textSize: "35px",
            pathColor: `rgba(86, 217, 193, 1)`,
            textColor: `rgba(181, 7, 17, 1)`,
            trailColor: `rgba(226, 255, 250, 1)`,
            backgroundColor: `rgba(86, 217, 193, 1)`,
          })}
        />
      ))}
    </Wrap>
  );
};

export default DaysOfWeeksProgress;
