import { createGlobalStyle } from "styled-components";
import reset, { Reset } from "styled-reset";
import TodoTemplate from "./components/TodoTemplate";

const GlobalStyle = createGlobalStyle`


body {
  background: #e9ecef;
}
`

function App() {
  return (
    <>
    <Reset />
    <GlobalStyle />
    <TodoTemplate>

    </TodoTemplate>
    
    </>
  );
};

export default App;