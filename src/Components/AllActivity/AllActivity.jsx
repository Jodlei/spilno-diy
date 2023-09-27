import {
  Wrap,
  ActivityWrap,
  CircleProgressWrap,
  NumberOfExercises,
  ActivityTitle,
} from "./AllActivity.styled";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { currentProgress } from "../../redux/progress/operations.js";
import { useProgress } from "../../hooks/useProgress.jsx";

const AllActivity = () => {
  const dispatch = useDispatch();
  const { countExercises, progressAmount } = useProgress();
  useEffect(() => {
    dispatch(currentProgress());
  }, [dispatch]);

  const normilizedProgressAmount = Math.round(progressAmount);

  return (
    <Wrap>
      <CircleProgressWrap>
        <CircularProgressbar
          value={progressAmount}
          text={`${normilizedProgressAmount}%`}
          strokeWidth={15}
          styles={buildStyles({
            textSize: "15px",
            pathColor: `rgba(86, 217, 138, 1)`,
            textColor: `#101828`,
            trailColor: `rgba(214, 241, 225, 1)`,
            backgroundColor: `rgba(86, 217, 193, 1)`,
          })}
        />
      </CircleProgressWrap>

      <ActivityWrap>
        <ActivityTitle>Активність</ActivityTitle>

        <NumberOfExercises>{countExercises} вправи</NumberOfExercises>
      </ActivityWrap>
    </Wrap>
  );
};

export default AllActivity;
