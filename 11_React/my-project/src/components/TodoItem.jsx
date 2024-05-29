import styled, { css } from "styled-components";
import { MdDone, MdDelete, MdEdit } from 'react-icons/md';



const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color:  #ff6b6b;
  }
  display: none;
`;

const Edit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color:  #4c5af4;
  }
  display: none;
`;

const Time = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #616b74;
  font-size: 15px;
  cursor: pointer;
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
    ${Edit} {
      display: initial;
    }
    ${Time} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #1729f6;
      color: #1729f6;
    `}
`;

const Text = styled.div`
  font-family: "Dongle", sans-serif;
  flex: 1;
  font-size: 32px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

function TodoItem(props) {
  const { todo: {id, text, done}, onRemove, onToggle, onModal, onformat } = props;

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={() => onToggle(id)}>
        {done && <MdDone />}
        </CheckCircle>
      <Text done={done}>{text}</Text>
      <Time >{onformat}</Time>
      <Edit onClick={() => onModal(id)}>
        <MdEdit />
      </Edit>
      <Remove onClick={() => onRemove(id)}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
};

export default TodoItem;