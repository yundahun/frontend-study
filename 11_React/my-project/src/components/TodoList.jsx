import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList(props) {
  const { todos, onRemove, onToggle, onModal } = props;

  return (
    <TodoListBlock>
      {todos.map((todo, index) => {
        return <TodoItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} onModal={onModal} />;
      })}
    </TodoListBlock>
  );
};

export default TodoList;