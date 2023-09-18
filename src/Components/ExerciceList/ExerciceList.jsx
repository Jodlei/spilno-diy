import PropTypes from "prop-types";
import ExerciceItem from "./ExersciceItem/ExersciceItem";
import { List } from "./ExerciceList.styled";

const ExerciceList = ({ exercices }) => {
  return (
    <List>
      {exercices.map(({ id, title, img, description, repetitionCount }) => (
        <ExerciceItem
          key={id}
          title={title}
          img={img}
          description={description}
          repetitionCount={repetitionCount}
        />
      ))}
    </List>
  );
};

ExerciceList.propTypes = {
  exercices: PropTypes.array.isRequired,
};

export default ExerciceList;
