import React, { useState } from 'react';

function Toggle(props) {
  const [isToggleOn,setIsToggleOn] = useState(true); // 배열을 하나 뱉어냄 [초기값, 상태변경함수] - 구조분해할당

  // 방법 1. 함수 선언문 사용
  // function handleToggle() {
  //   setIsToggleOn(!isToggleOn);
  // }
  // 방법 2. 화살표 함수 사용
  const handleToggle = () => {
    setIsToggleOn(!isToggleOn);
  }

  return (
    // 이벤트는 카멜 키이스(camelCase)를 사용
    // 함수(이벤트 핸들러)를 바로 전달하면 됨
    // 주의! handleToggle() 로 작성 시 함수가 바로 호출됨
    <button type='button' onClick={handleToggle}>
      {isToggleOn ? '켜짐' : '꺼짐'}
    </button>
  );
}

export default Toggle;