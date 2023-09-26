import styled from "styled-components";
import {motion} from "framer-motion";
import {NavLink} from "react-router-dom";


export const Link = styled(motion(NavLink))`
  color: ${(p) => p.theme.colors.mainText};
  display: flex;
  height: 52px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 1);
  color: rgba(255, 255, 255, 1);
  border-radius: 8px;
  border: 0;
  text-decoration: none;
  margin: 20px auto;
`;
