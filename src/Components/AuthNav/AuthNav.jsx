import { useTheme } from "styled-components";
import {
  Box,
  BackgroundImg,
  List,
  ListItem,
  MainButton,
  SecondaryButton,
  Container,
} from "./AuthNav.styled";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const AuthNav = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [checkToken, setCheckToken] = useState(true);
  const theme = useTheme();

  const param = searchParams.get("auth");

  useEffect(() => {
    if (checkToken && param) {
      setCheckToken(false);
    }
  }, [dispatch, param, checkToken]);

  return (
    <Container>
      <BackgroundImg />
      <Box>
        <List>
          <ListItem>
            <SecondaryButton
              whileHover={{
                backgroundColor: theme.colors.accentColor,
                borderColor: theme.colors.accentColor,
                color: theme.colors.secondaryText,
              }}
              to="/login"
            >
              Вхід
            </SecondaryButton>
          </ListItem>
          <ListItem>
            <MainButton
              whileHover={{
                backgroundColor: theme.colors.mainText,
              }}
              to="/signup"
            >
              Реєстрація
            </MainButton>
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default AuthNav;
