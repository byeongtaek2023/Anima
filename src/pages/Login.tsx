import React, { useState } from 'react';
import * as St from '../style/LoginStyle';
import { useNavigate } from 'react-router-dom';
import { supabase } from 'App';
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

  const loginClickHandler = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      if (email_regex.test(email) === false) {
        return alert('이메일 형식이 올바르지 않습니다.');
      } else {
        return alert('로그인 완료!'), navigate('/login');
      }
    } catch (error) {
      console.error(error);
    }
  };

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
              setEmail(e.target.value);
            }}
            autoComplete="off"
            id="id"
            value={email}
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
