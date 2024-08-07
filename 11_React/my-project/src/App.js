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
      done: false,
    };
    
    
    setTodos(todos.concat(todo));
    nextId.current += 1;
  };
  
  const createdDate = new Date().getTime();

  const onTime = new Date(createdDate);

  const formattedDate = onTime.getFullYear() + '.' + 
  ('0' + (onTime.getMonth() + 1)).slice(-2) + '.' + 
  ('0' + onTime.getDate()).slice(-2);
  

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

  const doingWork = todos.filter(todo => !todo.done).length;

  return (
    <>
      <Reset />
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead doingWork={doingWork !== 0 ? doingWork + '개 입니다! 힘내세요!': '없습니다! 고생했어요!'}/>
        <TodoList todos={todos} onRemove={handleRemove} onToggle={handleToggle} onModal={handleOpenModal} onformat={formattedDate}/>
        <TodoInsert onInsert={handleInsert}/>
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