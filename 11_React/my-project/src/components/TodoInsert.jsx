import { useState } from "react";
import { BiSolidCalendarCheck } from "react-icons/bi";
import styled from "styled-components";
import Modal2 from "./Modal2";

const TodoInsertWrapper = styled.form`
  display: flex;
  background-color: #1729f6;
  border-radius: 0px 0px  16px 16px;
`;

const StyledInput = styled.input`
  font-family: "Dongle", sans-serif;
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.75rem;
  line-height: 1.5;
  color: white;
  flex: 1;
  &::placeholder {
    color: #dee2e6;
  }
`;

const StyledButton = styled.button`
  border: none;
  background: #4c5af4;
  color: white;
  padding: 0 1rem;
  font-size: 1.75rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.2s background ease-in;
  border-radius:  0px 0px 16px;
  font-family: "Dongle", sans-serif;

  &:hover {
    background: #6873ef;
  }
`;

function TodoInsert({ onInsert }) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const [modalOn, setModalOn] = useState(false);

  const handleSubmit = (e) => {

      e.preventDefault();
  
      if (!value) {
        setModalOn(true);
        return;
      }

      onInsert(value);
      setValue('');
  };

  const handleCloseModal = () => {
    setModalOn(false);
  };


  

  return (
    <TodoInsertWrapper onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        value={value}
        placeholder="일정을 입력한 후, Enter 누르세요."
        onChange={handleChange}
        />
      <StyledButton type="submit">
        <BiSolidCalendarCheck />
      </StyledButton>
      {modalOn && (<Modal2 onCloseModal={handleCloseModal} />)}
    </TodoInsertWrapper>
);
}

export default TodoInsert;