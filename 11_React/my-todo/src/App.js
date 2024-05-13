import { createGlobalStyle } from "styled-components";
import reset, { Reset } from "styled-reset";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

// 패키지 설치
// npm install styled-components styled-reset react-icons

// 글로벌(공통) 스타일 적용과 reset css적용
// createGlobalStyle을 이용하여 글로벌 스타일 컴포넌트를 만들고가장 첫번째로 렌더링하면 됨
const GlobalStyle = createGlobalStyle`
/* reset css */
${reset} // 둘중에 하나만 1번

/* 글로벌(공통) 스타일 */
body {
  background: #e9ecef;
}
`;

function App() {
  return (
    <>
      {/* 둘중에 하나만 2번 */}
      <Reset />
      <GlobalStyle />
      <TodoTemplate>
        <TodoInsert />
        <TodoList />
      </TodoTemplate>
    </>
  );
};

export default App;