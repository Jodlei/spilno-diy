import PropTypes from "prop-types";
import {
  ListItem,
  Title,
  Image,
  Description,
  Count,
} from "./ExersciceItem.styled";

const ExerciceItem = ({ title, img, description, repetitionCount }) => {
  return (
    <ListItem>
      <Title>{title}</Title>
      <Image src={img} />
      <Description>{description}</Description>
      <Count>Кількість повторювань - {repetitionCount}</Count>
    </ListItem>
  );
};

ExerciceItem.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  repetitionCount: PropTypes.number.isRequired,
};

export default ExerciceItem;
