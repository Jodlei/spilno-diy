import PropTypes from "prop-types";
import ExerciceItem from "./ExersciceItem/ExersciceItem";
import { List } from "./ExerciceList.styled";

const ExerciceList = ({ exercices, programId }) => {
  return (
    <List>
      {exercices.map(({ id, title, video, description, repetitionCount }) => (
        <ExerciceItem
          key={id}
          title={title}
          video={video}
          description={description}
          repetitionCount={repetitionCount}
          programId={programId}
          exerciceId={id}
        />
      ))}
    </List>
  );
};

ExerciceList.propTypes = {
  exercices: PropTypes.array.isRequired,
  programId: PropTypes.string.isRequired,
};

export default ExerciceList;
