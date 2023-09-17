import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./Components/GlobalStyle/GlobalStyle";
import { theme } from "./theme/theme";
import { lazy } from "react";
import styled from "styled-components";
import Container from "../src/Components/ui/Container/Container.styled";

const Programs = lazy(() => import("../src/pages/Programs/Programs"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>
        <Wrapper>
          <Container>
            <Routes>
              <Route index path="/" element={<Programs />} />
              <Route path="/programs/:id">
                <Route path={"progress"}></Route>
              </Route>
            </Routes>
          </Container>
        </Wrapper>
      </main>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: 100vh;
`;

export default App;
