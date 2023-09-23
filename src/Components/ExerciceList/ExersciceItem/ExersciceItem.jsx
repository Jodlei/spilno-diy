import PropTypes from "prop-types";
import  {
    ListItem,
    Title,
    Description,
    Count,
    Button,
} from "./ExersciceItem.styled";
import VideoYouTubeComponent from "../../GlobalStyle/Video.styled.jsx";

const ExerciceItem = ({title, video, description, repetitionCount}) => {
    return (
        <ListItem>
            <Title>{title}</Title>
            <VideoYouTubeComponent src={video}/>
            <Description>{description}</Description>
            <Count>Кількість повторювань - {repetitionCount}</Count>
            <Button>Виконати</Button>
        </ListItem>
    );
};

ExerciceItem.propTypes = {
    title: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    repetitionCount: PropTypes.number.isRequired,
};

export default ExerciceItem;
