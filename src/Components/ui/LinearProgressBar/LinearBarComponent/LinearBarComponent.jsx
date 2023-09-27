import PropTypes from "prop-types";

import {
  EmptyProgressBar,
  FillingProgressBar,
  MainProgressBarDiv,
} from "./LinearBarComponent.styled";

const LinearBarComponent = ({ percent, colorGradient }) => {
  return (
    <MainProgressBarDiv>
      <EmptyProgressBar style={{ width: "100%" }}>
        <FillingProgressBar
          style={{
            left: percent - 100 + "%",
            transition: "1s",
            backgroundImage: colorGradient,
          }}
        />
      </EmptyProgressBar>
    </MainProgressBarDiv>
  );
};

LinearBarComponent.propTypes = {
  percent: PropTypes.number.isRequired,
  colorGradient: PropTypes.string.isRequired,
};

export default LinearBarComponent;
