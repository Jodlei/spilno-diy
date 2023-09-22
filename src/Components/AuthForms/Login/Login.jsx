import ButtonLoader from "../../../Components/ui/ButtonLoader/ButtonLoader";

import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { login } from "../../../redux/auth/operations";
import { LoginSchema } from "../../../helpers/validations";
import { useAuth } from "../../../hooks/useAuth";
import { useEffect, useState } from "react";
import {
  Container,
  Box,
  BoxTitle,
  Button,
  Error,
  ErrorLast,
  FormBox,
  Heading,
  IconBox,
  Input,
  Label,
  Link,
} from "./Login.styled";

const Login = () => {
  const dispatch = useDispatch();
  const { isLoading, status } = useAuth();
  const [data, setData] = useState();

  useEffect(() => {
    if (status) {
      dispatch(login(data));
    }
  }, [status, dispatch, data]);

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <Container>
      <Box>
        <BoxTitle>
          <Heading>{"Вхід"}</Heading>
        </BoxTitle>
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={(credentials) => {
            dispatch(login(credentials));
            setData(credentials);
          }}
        >
          {({ errors, touched }) => {
            const emailError = errors.email && touched.email;
            const emailSucces = !errors.email && touched.email;
            const passwordError = errors.password && touched.password;
            const passwordSucces = !errors.password && touched.password;
            return (
              <FormBox>
                <Label htmlFor="email">
                  <Input
                    autoComplete="off"
                    name="email"
                    type="email"
                    placeholder="Електронна пошта"
                    $success={emailSucces}
                    $error={emailError}
                  />
                  <IconBox>
                    {emailError ? <Error>{errors.email}</Error> : null}
                  </IconBox>
                </Label>

                <Label htmlFor="password">
                  <Input
                    autoComplete="off"
                    name="password"
                    type="password"
                    placeholder="Пароль"
                    $error={passwordError}
                    $success={passwordSucces}
                    $notSecure={errors.password?.includes("secure")}
                  />

                  <IconBox>
                    {passwordError ? (
                      <ErrorLast
                        $notSecure={errors.password?.includes("secure")}
                      >
                        {errors.password}
                      </ErrorLast>
                    ) : null}
                  </IconBox>
                </Label>

                <Button disabled={isLoading} type="submit">
                  {isLoading ? (
                    <ButtonLoader color="white" width={25} />
                  ) : (
                    "Ввійти"
                  )}
                </Button>
              </FormBox>
            );
          }}
        </Formik>
      </Box>
      <Link to={"/signup"}>Реєстрація</Link>
    </Container>
  );
};

export default Login;
