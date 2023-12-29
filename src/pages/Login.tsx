import React, { useState } from 'react';
import * as St from '../style/LoginStyle';
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const loginClickHandler = () => {};

  return (
    <St.Container>
      <St.Form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <St.LoginTitleWrapper>
          <St.LoginTitle>로그인 또는</St.LoginTitle>
          <St.RegisterTitle
            onClick={() => {
              navigate('/register');
            }}
          >
            회원가입
          </St.RegisterTitle>
        </St.LoginTitleWrapper>

        <St.IdInputBox>
          <St.IdLabel htmlFor="id">이메일</St.IdLabel>
          <St.IdInput
            onChange={(e) => {
              setId(e.target.value);
            }}
            autoComplete="off"
            id="id"
            value={id}
            placeholder="이메일을 입력해주세요."
            type="text"
          />
        </St.IdInputBox>

        <St.PasswordInputBox>
          <St.PasswordLabel htmlFor="password">비밀번호</St.PasswordLabel>
          <St.PasswordInput
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id="password"
            value={password}
            placeholder="비밀번호를 입력해주세요."
            type="password"
          />
        </St.PasswordInputBox>

        <>
          <St.LoginButton
            onClick={() => {
              loginClickHandler();
            }}
          >
            로그인
          </St.LoginButton>
        </>

        <div>
          <p>소셜 로그인</p>
          <ul>
            <li>페이스북</li>
            <li>트위터</li>
            <li>카카오톡</li>
            <li>구글</li>
          </ul>

          <div>
            <St.RegisterButton
              onClick={() => {
                navigate('/register');
              }}
            >
              👉 회원이 아니신가요?
            </St.RegisterButton>
          </div>
        </div>
      </St.Form>
    </St.Container>
  );
}

export default Login;
