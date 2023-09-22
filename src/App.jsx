import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./Components/GlobalStyle/GlobalStyle";
import { theme } from "./theme/theme";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "./redux/auth/operations";

import Programs from "./pages/Programs/Programs";
import ProgramDetail from "./pages/ProgramDetails/ProgramDetails";
import Activities from "./pages/Activities/Activities";
import SignUp from ".//pages/SignUp/SignUp";
import LoginPage from "./pages/Login/LoginPage";
import AuthNavPage from "./pages/AuthNavPage/AuthNavPage";
import PrivateRoute from "./Components/routes/PrivateRoute";
import RestrictedRoute from "./Components/routes/RestrictedRoute";
import Toast from "./Components/ui/Toast/Toast";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Routes>
        <Route
          index
          element={
            <RestrictedRoute component={<AuthNavPage />} redirectTo="/main" />
          }
        />

        <Route
          path="/signup"
          element={
            <RestrictedRoute component={<SignUp />} redirectTo="/main" />
          }
        />

        <Route
          path="/login"
          element={
            <RestrictedRoute component={<LoginPage />} redirectTo="/main" />
          }
        />

        <Route
          path="/main"
          element={<PrivateRoute component={<Programs />} redirectTo="/" />}
        ></Route>

        <Route
          path="/programs/:id"
          element={
            <PrivateRoute component={<ProgramDetail />} redirectTo="/" />
          }
        ></Route>

        <Route
          path="/activities"
          element={<PrivateRoute component={<Activities />} redirectTo="/" />}
        ></Route>

        {/* <Route path="/main" element={<Programs />} />
        <Route path="/programs/:id" element={<ProgramDetail />} />
        <Route path={"activities"} element={<Activities />} /> */}
      </Routes>

      <Toast />
    </ThemeProvider>
  );
}

export default App;
