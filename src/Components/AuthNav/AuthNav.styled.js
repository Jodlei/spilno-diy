import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import background from "../../assets/images/bg.jpg";

export const Container = styled.div`
  width: 375px;
  padding-bottom: 30px;
  margin: 0 auto;
`;

export const BackgroundImg = styled.div`
  background-repeat: no-repeat;
  background-size: 100% auto;
  object-fit: cover;
  height: 702px;
  width: 375px;
  background-image: url(${background});
`;

export const Box = styled.div`
  color: ${(p) => p.theme.colors.secondaryText};
  text-align: center;
  background-color: rgba(255, 255, 255, 1);
  padding: 16px 25px 16px 33px;
  width: 100%;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 9px;

  @media screen and (max-width: 299.98px) {
    flex-wrap: wrap;
  }
`;

export const ListItem = styled.li`
  width: 167px;
  height: 52px;

  :first-child {
    margin-right: 18px;
  }
`;

export const MainButton = styled(motion(Link))`
  font-size: 13px;
  display: block;
  background-color: ${(p) => p.theme.colors.seconButtonBgColor};
  padding: 18px 24px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  height: 100%;
  font-weight: 700;
  letter-spacing: 0.52px;
  text-transform: uppercase;
`;

export const SecondaryButton = styled(motion(Link))`
  font-size: 13px;
  display: block;
  padding: 18px 24px;
  color: ${(p) => p.theme.colors.mainText};
  border-radius: 6px;
  border: 2px solid ${(p) => p.theme.colors.mainText};
  cursor: pointer;
  height: 100%;
  font-weight: 700;
  letter-spacing: 0.52px;
  text-transform: uppercase;
`;
