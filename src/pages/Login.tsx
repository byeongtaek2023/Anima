import React, { useState } from 'react';
import * as St from '../style/LoginStyle';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { getUserSession, loginHandler, supabase } from 'api/supabase/supabase';
// import { get } from 'http';
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // 이메일 정규식
  const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  const pattern = /s/g;

  // const spaceRegexHandler = () => {
  //   if (email.replace(pattern, '') == '') {
  //     return alert('공백은 제출할 수 없습니다.');
  //   } else {
  //     return false;
  //   }
  // };

  // 클릭 했을 때 로그인 정보 가져오기
  const loginClickHandler = async (email: string, password: string) => {
    try {
      const data = await loginHandler(email, password);
      if (data?.user) {
        sessionStorage.setItem('user', JSON.stringify(data.user));
        alert('로그인 완료!');
        navigate('/home');
      } else if (email_regex.test(email) === false) {
        return alert('이메일 형식에 맞춰 이메일을 작성해주세요');
      } else {
        alert('아이디 또는 비밀번호가 틀렸습니다.');
      }
      // if (error) console.error(error);
    } catch (error) {
      console.error('로그인 오류', error);
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
          <St.IdLabel htmlFor="email">이메일</St.IdLabel>
          <St.IdInput
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            autoComplete="off"
            id="email"
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
              loginClickHandler(email, password);
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
              회원이 아니신가요?
            </St.RegisterButton>
          </div>
        </div>
      </St.Form>
    </St.Container>
  );
}
export default Login;
