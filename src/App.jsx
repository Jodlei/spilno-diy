import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./Components/GlobalStyle/GlobalStyle";
import { theme } from "./theme/theme";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "./redux/auth/operations";
import { useAuth } from "./hooks/useAuth";
// import { useProgram } from "./hooks/useProgram";

import Programs from "./pages/Programs/Programs";
import ProgramDetail from "./pages/ProgramDetails/ProgramDetails";
import Activities from "./pages/Activities/ActivitiesPage";
import SignUp from ".//pages/SignUp/SignUp";
import LoginPage from "./pages/Login/LoginPage";
import AuthNavPage from "./pages/AuthNavPage/AuthNavPage";
import PrivateRoute from "./Components/routes/PrivateRoute";
import RestrictedRoute from "./Components/routes/RestrictedRoute";
import Toast from "./Components/ui/Toast/Toast";
import Loader from "./Components/ui/Loader/Loader";
import ConfirmEmailRedirect from "./pages/ConfirmEmailRedirect/ConfirmEmailRedirect";
import PsychologicalSupportPage from "./pages/PsychologicalSupport/PsychologicalSupportPage";

function App() {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  // const { isLoading } = useProgram();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
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
          path="/signup/verify-email"
          element={
            <RestrictedRoute
              component={<ConfirmEmailRedirect />}
              redirectTo="/main"
            />
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

        <Route
          path="/psychological-support"
          element={
            <PrivateRoute
              component={<PsychologicalSupportPage />}
              redirectTo="/"
            />
          }
        ></Route>
      </Routes>

      <Toast />
    </ThemeProvider>
  );
}

export default App;
