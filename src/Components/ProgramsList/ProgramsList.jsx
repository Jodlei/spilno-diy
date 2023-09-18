import Program from "../Program/Program";
import { Link } from "react-router-dom";
import { Wrap, List, ListItem } from "./ProgramsList.styled";

const data = [
  {
    id: 1,
    title: "Програма 1",
    difficulty: 100,
    intensity: 15,
    coordinating: 22,
    description:
      "Протезування являє собою важливий етап процесу соціально-трудової реабілітації людини, яка втратила кінцівки, або страждає захворюваннями опорно-рухового апарату",
    img: "https://res.cloudinary.com/ddem4litw/image/upload/v1694901927/%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%B0_1_1_wsh9y6.jpg",
  },
  {
    id: 2,
    title: "Програма 2",
    difficulty: 32,
    intensity: 10,
    coordinating: 22,
    description:
      "Протезування являє собою важливий етап процесу соціально-трудової реабілітації людини, яка втратила кінцівки, або страждає захворюваннями опорно-рухового апарату",
    img: "https://res.cloudinary.com/ddem4litw/image/upload/v1694901927/%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%B0_1_1_wsh9y6.jpg",
  },
  {
    id: 3,
    title: "Програма 3",
    difficulty: 78,
    intensity: 44,
    coordinating: 22,
    description:
      "Протезування являє собою важливий етап процесу соціально-трудової реабілітації людини, яка втратила кінцівки, або страждає захворюваннями опорно-рухового апарату",
    img: "https://res.cloudinary.com/ddem4litw/image/upload/v1694901927/%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%B0_1_1_wsh9y6.jpg",
  },
  {
    id: 4,
    title: "Програма 4",
    difficulty: 66,
    intensity: 77,
    coordinating: 37,
    description:
      "Протезування являє собою важливий етап процесу соціально-трудової реабілітації людини, яка втратила кінцівки, або страждає захворюваннями опорно-рухового апарату",
    img: "https://res.cloudinary.com/ddem4litw/image/upload/v1694901927/%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%B0_1_1_wsh9y6.jpg",
  },
  {
    id: 5,
    title: "Програма 5",
    difficulty: 17,
    intensity: 54,
    coordinating: 48,
    description:
      "Протезування являє собою важливий етап процесу соціально-трудової реабілітації людини, яка втратила кінцівки, або страждає захворюваннями опорно-рухового апарату",
    img: "https://res.cloudinary.com/ddem4litw/image/upload/v1694901927/%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%B0_1_1_wsh9y6.jpg",
  },
];

const ProgramsList = () => {
  return (
    <Wrap>
      <List>
        {data.map(
          ({
            id,
            title,
            difficulty,
            intensity,
            coordinating,
            description,
            img,
          }) => (
            <ListItem key={id}>
              <Link to={`/programs/${id}`}>
                <Program
                  title={title}
                  difficulty={difficulty}
                  intensity={intensity}
                  coordinating={coordinating}
                  description={description}
                  img={img}
                ></Program>
              </Link>
            </ListItem>
          )
        )}
      </List>
    </Wrap>
  );
};

export default ProgramsList;
