import styled from "styled-components";

export const Wrap = styled.div`
  position: relative;
  padding-bottom: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Name = styled.p`
  text-align: center;
  font-size: 50px;
  font-weight: 400;
  line-height: 57px;
  letter-spacing: -0.015em;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
`;

export const ButtonContinue = styled.button`
  display: flex;
  width: 178px;
  height: 51px;
  padding: 16px 32px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border: 0px;

  margin-bottom: 10px;
  border-radius: 8px;
  background-color: #2f742d;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`;

export const ButtonCompetition = styled.button`
  display: flex;
  width: 178px;
  height: 51px;
  padding: 16px 32px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border: 0px;

  margin-bottom: 10px;
  border-radius: 8px;
  background-color: #ff9e2d;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`;

export const ProgresBarWrappper = styled.div`
  width: 182px;
  height: 182px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;

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
