import styled from "styled-components";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  font-family: "Dongle", sans-serif;
  font-weight: 700;
  
  h1 {
    margin: 0;
    font-size: 65px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 45px;
  }
  .tasks-left {
    color: #1729f6;
    font-size: 42px;
    margin-top: 25px;
    font-weight: bold;
  }
`
;

function TodoHead() {
  return (
    <TodoHeadBlock>
      <h1>2024년 5월 22일</h1>
      <div className="day">수요일</div>
      <div className="tasks-left">🏃‍♂️남은 일정 X개🏃‍♀️</div>
    </TodoHeadBlock>
  );
};

export default TodoHead;