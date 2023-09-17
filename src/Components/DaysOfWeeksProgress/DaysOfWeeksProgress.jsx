import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Wrap } from "./DaysOfWeeksProgress.styled";
import "react-circular-progressbar/dist/styles.css";

const daysWithProgress = [
  { id: "1", day: "Пн", progress: 34 },
  { id: "2", day: "Вт", progress: 1 },
  { id: "3", day: "Ср", progress: 78 },
  { id: "4", day: "Чт", progress: 0 },
  { id: "5", day: "Пт", progress: 55 },
  { id: "6", day: "Сб", progress: 35 },
  { id: "7", day: "Нд", progress: 74 },
];

const DaysOfWeeksProgress = () => {
  return (
    <Wrap>
      {daysWithProgress.map(({ id, day, progress }) => (
        <CircularProgressbar
          key={id}
          value={progress}
          text={`${day}`}
          strokeWidth={15}
          styles={buildStyles({
            textSize: "35px",

            // Colors
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
