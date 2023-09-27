import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid #e5d1d1;
  background-color: #f0f0f0;
  width: 100%;
  height: 93px;
  padding: 10px;
  gap: 4px;
`;

export const TextBarWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProgressBarText = styled.p`
  font-size: 17px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.015em;
  text-align: left;
`;
