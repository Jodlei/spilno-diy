import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  background-color: #f0eded;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.h3`
  font-size: 36px;
  font-weight: 400;
  letter-spacing: -0.54px;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
  margin-top: 10px;
  max-width: 100%;
`;

export const ProgressDescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ProgressDescriptionImageWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
