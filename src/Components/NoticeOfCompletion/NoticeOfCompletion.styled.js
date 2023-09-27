import styled from "styled-components";

export const Wrap = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 344px;
  height: 558px;
  background-color: ${(p) => p.theme.colors.mainBackground};
  border-radius: 10px;
  box-shadow: 1px 0px 2px 2px rgba(0, 0, 0, 0.25);
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 50px;
`;
export const Image = styled.img`
  width: 122px;
  height: 124px;
  margin-bottom: 12px;
`;
export const Title = styled.h2`
  color: ${(p) => p.theme.colors.mainText};
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 33px;
`;
export const Text = styled.p`
  color: #667;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 15px;
`;
export const TextBold = styled.b`
  color: ${(p) => p.theme.colors.mainText};
  margin-bottom: 42px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 178px;
  height: 51px;
  padding: 14px 26px;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  border: 0px;
  background-color: ${(p) => p.theme.colors.seconButtonBgColor};
  color: ${(p) => p.theme.colors.secondaryText};
`;

export const CloseButton = styled.button`
  position: absolute;
  color: ${(p) => p.theme.colors.mainText};
  background-color: transparent;
  display: flex;
  justify-content: center;
  border: 0;
  top: 15px;
  left: 15px;
`;
