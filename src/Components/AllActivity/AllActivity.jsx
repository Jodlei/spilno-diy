import {
  Wrap,
  ActivityWrap,
  CircleProgressWrap,
  NumberOfExercises,
  ActivityTitle,
} from "./AllActivity.styled";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {currentProgress} from "../../redux/progress/operations.js";
import {useProgress} from "../../hooks/useProgress.jsx";

const AllActivity = () => {
    const dispatch = useDispatch();
    const { countExercises, progressAmount, isLoading } = useProgress();
    useEffect(() => {
            dispatch(currentProgress());
    }, [dispatch]);

  return (
    <Wrap>
      <CircleProgressWrap>
        <CircularProgressbar
          value={progressAmount}
          text={`${progressAmount}%`}
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
