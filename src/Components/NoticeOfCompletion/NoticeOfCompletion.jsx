import PropTypes from "prop-types";
import image from "../../assets/images/modal1.png";
import { useNavigate } from "react-router-dom";
import {
  Wrap,
  Image,
  Title,
  Text,
  TextBold,
  Button,
  CloseButton,
} from "./NoticeOfCompletion.styled";

const NoticeOfCompletion = ({ toggleModal }) => {
  const navigate = useNavigate();

  const buttonClickHandler = () => {
    navigate("/main");
  };

  return (
    <Wrap>
      <CloseButton
        onClick={() => {
          toggleModal();
        }}
      >
        Закрити
      </CloseButton>
      <Image src={image} />
      <Title>Вітаємо!</Title>
      <Text>Ти успішно завершив денну норму активності!</Text>
      <Text>
        Це великий крок у поліпшенні свого здоров'я та зміцненні свого тіла.
      </Text>
      <TextBold>Чекаємо тебе завтра!</TextBold>
      <Button onClick={buttonClickHandler}>ЗАВЕРШИТИ</Button>
    </Wrap>
  );
};

NoticeOfCompletion.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};
export default NoticeOfCompletion;
