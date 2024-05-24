import styled from "styled-components";

const TodoHeadBlock = styled.div`
  padding-top: 16px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  font-family: "Dongle", sans-serif;
  font-weight: 700;
  
  h1 {
    margin: 0;
    font-size: 36px;
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
const today = new Date();
const dateString = today.toLocaleDateString('ko-Kr', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

const dayName = today.toLocaleDateString('ko-Kr', { weekday: 'long'});


function TodoHead() {
  return (
    <TodoHeadBlock>
      <h1>{dateString}<div className="day">{dayName}</div></h1>
      <div className="tasks-left">남은 일정 X개입니다! 힘내세요! </div>
    </TodoHeadBlock>
  );
};

export default TodoHead;