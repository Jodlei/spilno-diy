import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./Components/GlobalStyle/GlobalStyle";
import { theme } from "./theme/theme";
import { lazy } from "react";
import Container from "../src/Components/ui/Container/Container.styled";
import ProgramDetail from "./pages/ProgramDetails/ProgramDetails";

const Programs = lazy(() => import("../src/pages/Programs/Programs"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>
        <Container>
          <Routes>
            <Route index path="/" element={<Programs />} />
            <Route path="/programs/:id" element={<ProgramDetail />}>
              <Route path={"progress"}></Route>
            </Route>
          </Routes>
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default App;
