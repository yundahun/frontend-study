import { useState } from "react";
import Dialog from "./Dialog";

function SignUpDialog() {
  const [login, setLogin] = useState(' ');
  
  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault();
    alert(`Welcome, ${login}` )
  }

  return (
    <Dialog
      title="화성 탐사 프로그램"
      message="당신의 이름은?"
    >
      <input type="text" value={login} onChange={handleLoginChange}/>
      <button type="button" onClick={handleClick}>가입하기</button>
    </Dialog>
  );
};

export default SignUpDialog;