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

const AllActivity = () => {
  const data = {
    progress: 80,
    allExercice: 62,
  };

  return (
    <Wrap>
      <CircleProgressWrap>
        <CircularProgressbar
          value={data.progress}
          text={`${data.progress}%`}
          strokeWidth={15}
          styles={buildStyles({
            textSize: "15px",

            // Colors
            pathColor: `rgba(86, 217, 138, 1)`,
            textColor: `#101828`,
            trailColor: `rgba(214, 241, 225, 1)`,
            backgroundColor: `rgba(86, 217, 193, 1)`,
          })}
        />
      </CircleProgressWrap>

      <ActivityWrap>
        <Link to={`/activities`}>
          <ActivityTitle>Активність</ActivityTitle>
          <NumberOfExercises>{data.allExercice} вправи</NumberOfExercises>
        </Link>
      </ActivityWrap>
    </Wrap>
  );
};

export default AllActivity;
