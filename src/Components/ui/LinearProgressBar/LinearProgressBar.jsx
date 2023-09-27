import PropTypes from "prop-types";
import { Wrap, ProgressBarText, TextBarWrap } from "./LinearProgressBar.styled";
import LinearBarComponent from "./LinearBarComponent/LinearBarComponent";

const LinearProgressBar = ({ difficulty, intensity, coordinating }) => {
  return (
    <Wrap>
      <TextBarWrap>
        <ProgressBarText>Складність</ProgressBarText>
        <LinearBarComponent
          percent={difficulty}
          colorGradient={"linear-gradient(to right, #f5a6ab, #e77a7a)"}
        />
      </TextBarWrap>

      <TextBarWrap>
        <ProgressBarText>Інтенсивність</ProgressBarText>
        <LinearBarComponent
          percent={intensity}
          colorGradient={"linear-gradient(to right, #f5edb5, #e6ee8e)"}
        />
      </TextBarWrap>

      <TextBarWrap>
        <ProgressBarText>Координація</ProgressBarText>
        <LinearBarComponent
          percent={coordinating}
          colorGradient={"linear-gradient(to right, #cefdc6, #87f077)"}
        />
      </TextBarWrap>
    </Wrap>
  );
};

LinearProgressBar.propTypes = {
  difficulty: PropTypes.number.isRequired,
  intensity: PropTypes.number.isRequired,
  coordinating: PropTypes.number.isRequired,
};

export default LinearProgressBar;
