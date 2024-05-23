import { createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoInsert from "./components/TodoInsert";
import { v4 as uuidv4 } from "uuid";
import { useRef, useState } from "react";

const GlobalStyle = createGlobalStyle`

body {
  background: #e9ecef;
}
`

function App() {
  const [todos, setTodos] = useState([]);

const nextId = useRef(4);

  const handleInsert = (text) => {
    const todo = {
      id: uuidv4(),
      text,
      done: false
    };

    setTodos(todos.concat(todo));
    nextId.current += 1;
  };

  return (
    <>
      <Reset />
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList todos={todos} />
        <TodoInsert onInsert={handleInsert} />
      </TodoTemplate>
    </>
  );
};

export default App;