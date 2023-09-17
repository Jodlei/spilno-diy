// import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import AllProgramInfo from "../../Components/AllProgramInfo/AllProgramInfo";
import ProgramTopPanel from "../../Components/ProgramTopPanel/ProgramTopPanel";

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
    exercice: [
      {
        id: 1,
        name: "Вправа 1",
        img: "",
        description: "Нахили тулуба вліво з розведенням рук",
        repetitionCount: 10,
      },
      {
        id: 2,
        name: "Вправа 2",
        img: "",
        description: "Нахили тулуба вліво з розведенням рук",
        repetitionCount: 10,
      },
      {
        id: 3,
        name: "Вправа 3",
        img: "",
        description: "Нахили тулуба вліво з розведенням рук",
        repetitionCount: 10,
      },
    ],
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
    exercice: [
      {
        id: 1,
        name: "Вправа 1",
        img: "",
        description: "Нахили тулуба вліво з розведенням рук",
        repetitionCount: 10,
      },
      {
        id: 2,
        name: "Вправа 2",
        img: "",
        description: "Нахили тулуба вліво з розведенням рук",
        repetitionCount: 10,
      },
      {
        id: 3,
        name: "Вправа 3",
        img: "",
        description: "Нахили тулуба вліво з розведенням рук",
        repetitionCount: 10,
      },
    ],
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
    exercice: [
      {
        id: 1,
        name: "Вправа 1",
        img: "",
        description: "Нахили тулуба вліво з розведенням рук",
        repetitionCount: 10,
      },
      {
        id: 2,
        name: "Вправа 2",
        img: "",
        description: "Нахили тулуба вліво з розведенням рук",
        repetitionCount: 10,
      },
      {
        id: 3,
        name: "Вправа 3",
        img: "",
        description: "Нахили тулуба вліво з розведенням рук",
        repetitionCount: 10,
      },
    ],
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
    exercice: [
      {
        id: 1,
        name: "Вправа 1",
        img: "",
        description: "Нахили тулуба вліво з розведенням рук",
        repetitionCount: 10,
      },
      {
        id: 2,
        name: "Вправа 2",
        img: "",
        description: "Нахили тулуба вліво з розведенням рук",
        repetitionCount: 10,
      },
      {
        id: 3,
        name: "Вправа 3",
        img: "",
        description: "Нахили тулуба вліво з розведенням рук",
        repetitionCount: 10,
      },
    ],
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
    exercice: [
      {
        id: 1,
        name: "Вправа 1",
        img: "",
        description: "Нахили тулуба вліво з розведенням рук",
        repetitionCount: 10,
      },
      {
        id: 2,
        name: "Вправа 2",
        img: "",
        description: "Нахили тулуба вліво з розведенням рук",
        repetitionCount: 10,
      },
      {
        id: 3,
        name: "Вправа 3",
        img: "",
        description: "Нахили тулуба вліво з розведенням рук",
        repetitionCount: 10,
      },
    ],
  },
];

const ProgramDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  const currentProgram = data.find((item) => (item.id = id));

  return (
    <>
      <ProgramTopPanel BackTo={backLinkHref} id={id} />

      <AllProgramInfo programInfo={currentProgram} />
    </>
  );
};

export default ProgramDetails;
