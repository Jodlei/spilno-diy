import PropTypes from "prop-types";
import { Description, Image, Title, Wrap } from "./AllProgramInfo.styled";
import LinearProgressBar from "../../Components/ui/LinearProgressBar/LinearProgressBar";

const AllProgramInfo = ({ programInfo }) => {
  const { title, difficulty, intensity, coordinating, description, img } =
    programInfo;
  return (
    <Wrap>
      <Image src={img} />

      <Title>{title}</Title>

      <LinearProgressBar
        difficulty={difficulty}
        intensity={intensity}
        coordinating={coordinating}
      />

      <Description>{description}</Description>
    </Wrap>
  );
};

AllProgramInfo.propTypes = {
  programInfo: PropTypes.object.isRequired,
};

export default AllProgramInfo;
