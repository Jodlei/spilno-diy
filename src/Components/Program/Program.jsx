import PropTypes from "prop-types";
import LinearProgressBar from "../ui/LinearProgressBar/LinearProgressBar";

import {
  Wrap,
  Title,
  Image,
  Description,
  ProgressDescriptionWrap,
  ProgressDescriptionImageWrap,
} from "./Program.styled";

const Program = ({
  title,
  difficulty,
  intensity,
  coordinating,
  description,
  img,
}) => {
  return (
    <Wrap>
      <Title>{title}</Title>
      <ProgressDescriptionImageWrap>
        <Image src={`${img}`}></Image>
        <LinearProgressBar
          difficulty={difficulty}
          intensity={intensity}
          coordinating={coordinating}
        ></LinearProgressBar>
        <Description>{description}</Description>
      </ProgressDescriptionImageWrap>
    </Wrap>
  );
};

Program.propTypes = {
  title: PropTypes.string.isRequired,
  difficulty: PropTypes.number.isRequired,
  intensity: PropTypes.number.isRequired,
  coordinating: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Program;
