import styled from "styled-components";

export const Wrap = styled.div`
  position: relative;
  padding-bottom: 30px;
`;

export const Image = styled.img`
  border-radius: 8px;
  margin-bottom: 15px;
`;

export const Title = styled.h2`
  margin-bottom: 22px;
`;

export const Description = styled.p`
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: -0.33px;
  margin-top: 22px;

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
