import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;

  h1 {
    margin: 0;
    font-size: 32px;
    color: #343a40;
    font-family: "Dongle", sans-serif;
    font-weight: 700;
  }
`;


function TodoList(props) {
  const { todos, onRemove, onToggle, onModal } = props;

  const trueDone = todos.filter((todo) => todo.done)
  const falseDone = todos.filter((todo) => !todo.done)

  return (
    <>
    <TodoListBlock>
      <h1>해야 할 일!</h1>
      {falseDone.map((todo, index) => {
        return <TodoItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} onModal={onModal} />;
      })}
    </TodoListBlock>

    <TodoListBlock>
      <hr />
      <h1>완료!</h1>
      {trueDone.map((todo, index) => {
        return <TodoItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} onModal={onModal} />;
      })}
    </TodoListBlock>
    </>
  );
};

export default TodoList;