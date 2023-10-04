import { Wrap, Button } from "./LogoutButton.styled";
import { logOut } from "../../../redux/auth/operations";
import { useDispatch } from "react-redux";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const buttonclickHandler = () => {
    dispatch(logOut());
  };

  return (
    <Wrap>
      <Button onClick={buttonclickHandler}>Вийти з акаунту</Button>
    </Wrap>
  );
};

export default LogoutButton;
