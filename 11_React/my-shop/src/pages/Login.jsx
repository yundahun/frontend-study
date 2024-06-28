import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { loginSuccess } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const LoginWrapper = styled.div`
  height: calc(100vh - 176px);
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    margin-bottom: 20px;
  }
`;

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState({
    username: '',
    password: ''
  });

  const handleChangeLoginForm = (e) => {
    const { name, value } = e.target;

    setLoginForm({
      ...loginForm,
      [name]: value
    });
  };

  const handleLogin =async () => {
    try {
    const result = await axios.get(`http://ec2-13-209-77-178.ap-northeast-2.compute.amazonaws.com:8080/login?id=${loginForm.username}&pw=${loginForm.password}`)
    console.log(result);

    // 로그인 성공 시 서버가 내려준 토큰(JWT)과 사용자 정보
    // const { token, user } = result.data;

    //전역 상태에 사용자 정보 저장
      dispatch(loginSuccess({ name: '윤다훈', nickname: 'Inbong Kim', role: 'member'}));
      localStorage.setItem('token', result.data);

      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <LoginWrapper>
      <input 
        type="text"
        name="username"
        value={loginForm.username}
        onChange={handleChangeLoginForm}
      />
      <input 
        type="password"
        name="password"
        value={loginForm.password}
        onChange={handleChangeLoginForm}
      />
      <button type="button" onClick={handleLogin}>로그인</button>
    </LoginWrapper>
  );
};

export default Login;