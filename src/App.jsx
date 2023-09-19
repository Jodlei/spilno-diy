import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./Components/GlobalStyle/GlobalStyle";
import { theme } from "./theme/theme";
import { lazy } from "react";
import Container from "../src/Components/ui/Container/Container.styled";
import ProgramDetail from "./pages/ProgramDetails/ProgramDetails";
import Activities from "./pages/Activities/Activities";

const Programs = lazy(() => import("../src/pages/Programs/Programs"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>
        <Container>
          <Routes>
            <Route index path="/" element={<Programs />} />
            <Route path="/programs/:id" element={<ProgramDetail />} />
            <Route path={"activities"} element={<Activities />} />
          </Routes>
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default App;
