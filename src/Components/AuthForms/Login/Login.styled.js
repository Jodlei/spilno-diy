import { Form, Field } from "formik";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const Container = styled.div`
  ${(p) => p.theme.flexCentered}
  max-width: 375px;
  flex-direction: column;
  padding: 100px 20px 150px 20px;
  margin: 0 auto;
  height: 100vh;
  width: 100vw;
`;

export const Box = styled.div`
  background-color: ${(p) => p.theme.colors.mainBackground};
  color: ${(p) => p.theme.colors.mainText};
  padding: 28px 32px;
  width: 335px;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
`;

export const BoxTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 31px;
`;

export const Heading = styled.h1`
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: 1.16;
  letter-spacing: -0.02em;
`;

export const FormBox = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  :not(:last-of-type) {
    margin-bottom: 10px;
  }
`;

export const IconBox = styled.div`
  height: 25px;
`;

export const Input = styled(Field)`
  width: 100%;
  max-width: 400px;
  height: 52px;
  padding: 12px 0 12px 40px;
  color: ${(p) => p.theme.colors.mainText};
  background-color: transparent;
  border: 2px solid ${(p) => p.theme.colors.mainText};
  border-radius: 6px;

  ::placeholder {
    ${(p) => p.theme.colors.mainText};
  }

  ${(p) =>
    p.$error &&
    css`
      border-color: ${(p) => p.theme.colors.inputErrorColor};
    `}
  ${(p) =>
    p.$success &&
    css`
      border-color: ${(p) => p.theme.colors.inputSuccessColor};
    `}
    ${(p) =>
    p.$notSecure &&
    css`
      border-color: ${(p) => p.theme.colors.inputNotSecureColor};
    `}
`;

export const Button = styled(motion.button)`
  display: block;
  padding: 12px 50px;
  height: 52px;
  color: ${(p) => p.theme.colors.secondaryText};
  background: ${(p) => p.theme.colors.accentColor};
  border-radius: 6px;
  border: none;
  cursor: pointer;
`;

export const Link = styled(motion(NavLink))`
  color: ${(p) => p.theme.colors.mainText};
  text-decoration: underline;
  margin-top: 15px;
  font-size: 14px;
`;
export const Error = styled.p`
  color: ${(p) => p.theme.colors.inputErrorColor};
  font-size: 11px;
  line-height: 1.5;
`;

export const ErrorLast = styled.p`
  color: ${(p) => p.theme.colors.inputErrorColor};
  font-size: 11px;
  line-height: 1.5;

  :last-of-type {
    margin-bottom: 15px;
  }

  ${(p) =>
    p.$notSecure &&
    css`
      color: ${(p) => p.theme.colors.inputNotSecureColor};
    `}
`;
