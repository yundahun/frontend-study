import { createGlobalStyle } from "styled-components";
import reset, { Reset } from "styled-reset";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoInsert from "./components/TodoInsert";

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
    <TodoHead />
    <TodoList />
    <TodoInsert />
    </TodoTemplate>
    </>
  );
};

export default App;