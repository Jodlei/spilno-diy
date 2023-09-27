import styled from "styled-components";

export const EmptyProgressBar = styled.div`
  background-color: #f0f0f0;
  border-radius: 3px;
  border: 1px solid #e5d1d1;
  height: 15px;
  overflow: hidden;
  position: relative;
`;

export const FillingProgressBar = styled.div`
  border-radius: 3px;
  height: 100%;
  width: 100%;
  position: absolute;
`;

export const MainProgressBarDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  width: 162px;
`;
