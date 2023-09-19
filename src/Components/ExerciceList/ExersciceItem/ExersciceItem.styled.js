import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 25px;
  position: relative;
`;

export const Title = styled.h3`
  margin-bottom: 3px;
  text-align: center;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.45px;
`;

export const Image = styled.img`
  margin-bottom: 10px;
`;

export const Description = styled.p`
  margin-bottom: 10px;
`;

export const Count = styled.p`
  margin-bottom: 10px;
`;

export const Button = styled.button`
  display: flex;
  width: 178px;
  height: 52px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 1);
  color: rgba(255, 255, 255, 1);
  border-radius: 8px;
  border: 0;

  &::after {
    content: "";
    width: 240px;
    height: 4px;
    background-color: #d9d9d9;
    border-radius: 2px;
    position: absolute;
    bottom: 0px;
    left: 55px;
  }
`;
