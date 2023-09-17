import PropTypes from "prop-types";
import { BackLink } from "./BackButton.styled";

const BackButton = ({ to }) => {
  return <BackLink to={to}>Назад</BackLink>;
};

BackButton.propTypes = {
  to: PropTypes.string.isRequired,
};

export default BackButton;
