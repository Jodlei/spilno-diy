import { RotatingLines } from "react-loader-spinner";
import PropTypes from "prop-types";

const ButtonLoader = ({ color, width }) => {
  return (
    <RotatingLines
      strokeColor={color}
      strokeWidth="5"
      animationDuration="0.75"
      width={width}
      visible={true}
    />
  );
};

ButtonLoader.propTypes = {
  color: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

export default ButtonLoader;
