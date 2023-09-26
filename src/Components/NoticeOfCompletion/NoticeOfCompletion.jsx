import {
  Wrap,
  Image,
  Title,
  Text,
  TextBold,
  Button,
} from "./NoticeOfCompletion.styled";
import image from "../../assets/images/modal1.png";
import { useNavigate } from "react-router-dom";
const NoticeOfCompletion = (id) => {
  const navigate = useNavigate();

  const buttonClickHandler = () => {
    navigate("/main");
  };

  return (
    <Wrap>
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

export default NoticeOfCompletion;
