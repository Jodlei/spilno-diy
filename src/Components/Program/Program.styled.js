import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 228px;
  padding: 10px;
  border-radius: 8px;
  background-color: #f0eded;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.h3`
  font-size: 36px;
  font-weight: 400;
  letter-spacing: -0.54px;
  margin-bottom: 5px;
`;

export const Image = styled.img`
  max-width: 100%;
  height: 162px;
  border-radius: 8px;
`;

export const Description = styled.p`
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.195px;
  font-family: Roboto;
  margin-top: 5px;
  margin-right: 10px;
  max-width: 100%;
`;

export const ProgressDescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ProgressDescriptionImageWrap = styled.div`
  display: flex;
  flex-direction: row;
`;
