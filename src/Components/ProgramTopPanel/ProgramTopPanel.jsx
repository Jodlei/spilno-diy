import { Wrap, ActivityLink } from "./ProgramTopPanel.styled";
import BackButton from "../../Components/ui/BackButton/BackButton";
import PropTypes from "prop-types";

const ProgramTopPanel = ({ BackTo, id }) => {
  return (
    <Wrap>
      <BackButton to={BackTo} />

      <ActivityLink to={`/activities`}>Моя активність</ActivityLink>
    </Wrap>
  );
};

ProgramTopPanel.propTypes = {
  BackTo: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProgramTopPanel;
