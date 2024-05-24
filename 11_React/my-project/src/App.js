import styled, { createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoInsert from "./components/TodoInsert";
import { v4 as uuidv4 } from "uuid";
import { useRef, useState } from "react";
import Modal from "./components/Modal";

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

  const handleRemove = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggle = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo,done: !todo.done } : todo));
  };

  const [showModal, setShowModal] = useState(false);
  const [editTodo, setEditTodo] = useState({});

  const handleOpenModal = (id) => {
    setEditTodo(todos.find(todo => todo.id === id));
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    setEditTodo({
      ...editTodo,
      text: e.target.value
    });
  };
  const handleEdit = () => {
    setTodos(todos.map(todo => todo.id === editTodo.id ? editTodo : todo));
    handleCloseModal();
  }

  return (
    <>
      <Reset />
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList todos={todos} onRemove={handleRemove} onToggle={handleToggle} onModal={handleOpenModal}/>
        <TodoInsert onInsert={handleInsert} />
      </TodoTemplate>
      
      {showModal && ( 
        <Modal
        title="Todo 수정🛠"
        onCloseModal={handleCloseModal}
        onEdit={handleEdit}
        >
          <input type="text" value={editTodo.text} onChange={handleChange}></input>
        </Modal>
      )}  
    </>
  );
};

export default App;