import React, { useEffect, useState } from 'react';
import * as St from '../style/LoginStyle';
import { useNavigate } from 'react-router-dom';

import { supabase } from 'App';
// import { useSetRecoilState } from 'recoil';
// import { TokenAtom } from 'recoil/acccessToken';
import { useSetRecoilState } from 'recoil';
import { TokenAtom } from 'recoil/acccessToken';
import { loginHandler, supabase } from 'api/supabase/supabase';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const setAccessToken = useSetRecoilState(TokenAtom);
  // 이메일 정규식
  const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  const pattern = /s/g;


  const setAccessToken = useSetRecoilState(TokenAtom);

  // 이메일 정규식
  const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  const pattern = /s/g;


  const spaceRegexHandler = () => {
    if (email.replace(pattern, '') == '') {
      return alert('공백은 제출할 수 없습니다.');
    } else {
      return false;
    }
  };

  // 클릭 했을 때 로그인 정보 가져오기
  const loginClickHandler = async (email: string, password: string) => {
    try {
      const { data } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      if (email_regex.test(email) === false) {
        return alert('형식이 올바르지 않습니다.');
      }
      // 회원 가입할 때 데이터와 로그인 데이터가 일치했을 때 홈 화면 이동
      else if (data?.user) {
        return console.log('로그인 성공'), alert('로그인 완료!'), navigate('/home');
      } else {
        return console.log(data), alert('아이디 또는 비밀번호가 틀렸습니다. 다시 시도해주세요!');


  // 클릭 했을 때 로그인 정보 가져오기
  const loginClickHandler = async (email: string, password: string) => {
    try {
      const data = await loginHandler(email, password);
      if (data?.user) {
        alert('로그인 완료!');
        navigate('/home');
      } else {
        alert('아이디 비밀번호 확인 필요');

      }
      // if (error) console.error(error);

      // if (email_regex.test(email) === false) {
      //   return alert('형식이 올바르지 않습니다.');
      // }

      // 회원 가입할 때 데이터와 로그인 데이터가 일치했을 때 홈 화면 이동
      //     else if (data?.user) {
      //       return console.log('로그인 성공'), alert('로그인 완료!'), navigate('/home');
      //     } else {
      //       return  alert('아이디 또는 비밀번호가 틀렸습니다. 다시 시도해주세요!');
      //     }
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
              👉 회원이 아니신가요?
            </St.RegisterButton>
          </div>
        </div>
      </St.Form>
    </St.Container>
  );
}
export default Login;
