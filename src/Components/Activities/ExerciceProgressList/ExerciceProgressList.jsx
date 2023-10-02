import ExerciceListItem from "../ExerciceProgressList/ExerciceListItem/ExerciceListItem";
import { List } from "./ExerciceProgressList.styled";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { programs } from "../../../redux/program/operations";
import { useProgram } from "../../../hooks/useProgram.jsx";

const ExerciceProgressList = () => {
  const programsProgress = [
    {
      id: 1,
      title: "Програма 1",
      progress: 45,
      exercices: [{ 1: "Вправа 1", 2: "Вправа 2", 3: "Вправа 3" }],
    },
    {
      id: 2,
      title: "Програма 2",
      progress: 10,
      exercices: [{ 1: "Вправа 1", 2: "Вправа 2", 3: "Вправа 3" }],
    },
    {
      id: 3,
      title: "Програма 3",
      progress: 60,
      exercices: [{ 1: "Вправа 1", 2: "Вправа 2", 3: "Вправа 3" }],
    },
  ];

  const dispatch = useDispatch();
  const { listProgram } = useProgram();

  useEffect(() => {
    if (listProgram.length === 0) {
      dispatch(programs());
    }
  }, [dispatch, listProgram.length]);

  return (
    <List>
      {programsProgress.map(({ id, title, progress, exercices }) => (
        <ExerciceListItem
          key={id}
          title={title}
          progress={progress}
          exercices={exercices}
        />
      ))}
    </List>
  );
};

export default ExerciceProgressList;
