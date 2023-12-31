import React, { useState } from 'react';
import * as St from '../style/RegisterStyle';
import { useNavigate } from 'react-router-dom';
import { supabase } from 'App';
import { StringDecoder } from 'string_decoder';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // 이메일 정규식
  const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  // 영문 + 숫자 조합으로 5~8글자 제한
  const pattern = new RegExp('^[a-zA-Z][0-9a-zA-Z]{4,7}$');

  // const emailValidChk = (email: string) => {
  //   if (email_regex.test(email) === false) {
  //     return alert('이메일 형식이 올바르지 않습니다.');
  //   } else {
  //     return true;
  //   }
  // };
  const passwordValidChk = () => {
    if (pattern.test(password) === false) {
      alert('비밀번호는 5~8글자 영문 + 숫자 형식으로 입력해주세요 ');
    }
  };

  // 회원가입 버튼 눌렀을 때, supabase.auth에 저장
  const registerClickHandler = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password
      });
      if (email_regex.test(email) === false) {
        return alert('이메일 형식이 올바르지 않습니다.');
      } else if (data?.user) {
        return console.log('회원가입 성공'), alert('회원가입 성공!'), navigate('/login');
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
          <St.LoginTitle>회원가입 또는</St.LoginTitle>
          <St.RegisterTitle
            onClick={() => {
              navigate('/login');
            }}
          >
            로그인
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
              registerClickHandler(email, password);
            }}
          >
            회원가입
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
                navigate('/login');
              }}
            >
              🤔 이미 회원이신가요?
            </St.RegisterButton>
          </div>
        </div>
      </St.Form>
    </St.Container>
  );
};

export default Register;
