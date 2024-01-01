import { getUserSession, handleLogout } from 'api/supabase/supabase';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const Header = () => {
  useEffect(() => {
    getUserSession().then((result) => {
      if (result) {
        console.log(result);
        setIsLoggin(true);
      }
    });
  }, []);

  const navigate = useNavigate();
  const [Isloggin, setIsLoggin] = useState(false);

  const login = () => {
    navigate('/login');
  };

  // const getUserSession = async () => {
  //   const { data, error } = await supabase.auth.getSession();
  //   console.log(data);
  //   if (error) throw error;
  //   return data;
  // };

  // const handleLogout = async () => {
  //   try {
  //     const { error } = await supabase.auth.signOut();
  //     if (error) throw error;

  //     setIsLoggin(false);
  //     navigate('/'); // 로그아웃 후 홈페이지로 이동
  //   } catch (error) {
  //     console.error('로그아웃 실패:', error);
  //   }
  // };

  return (
    <Container>
      <LoginBox>
        {Isloggin ? (
          <div>
            <button
              onClick={() => {
                handleLogout();
                setIsLoggin(false);
                navigate('/'); // 로그아웃 후 홈페이지로 이동
              }}
            >
              로그아웃
            </button>
          </div>
        ) : (
          <div>
            <button onClick={login}>로그인/가입</button>
          </div>
        )}
      </LoginBox>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  max-width: 1200px;
  margin: 0 auto;
`;
const LoginBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;
