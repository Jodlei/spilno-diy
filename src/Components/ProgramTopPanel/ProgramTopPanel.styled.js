import styled from "styled-components";
import { NavLink } from "react-router-dom";
// import { ReactComponent as Arrow } from "../../assets/icons/backArrow.svg";
// export const BackArrow = styled(Arrow)``;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const ActivityLink = styled(NavLink)`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
`;
