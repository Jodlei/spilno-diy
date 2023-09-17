import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-bottom: 43px;
  position: relative;

  &::after {
    content: "";
    width: 240px;
    height: 4px;
    background-color: #d9d9d9;
    border-radius: 2px;
    position: absolute;
    top: 63px;
    left: 55px;
  }
`;
