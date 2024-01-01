import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import { commentInsert, supabase } from 'api/supabase/supabase';

const CommentInput = () => {
  const [text, setText] = useState<string>('');
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    checkCurrentUser();
  }, []);

  //왜 로그인해도 세션이 널이지?ㅠㅠㅠㅠㅠㅠㅠㅠ
  const checkCurrentUser = async () => {
    // 현재 로그인된 사용자의 정보를 가져옵니다.
    const { data } = await supabase.auth.getSession();
    console.log(data);
    setCurrentUser(data);
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await commentInsert(text);
    window.location.reload();
  };

  return (
    <Container onSubmit={onSubmitHandler}>
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="댓글을 남겨보세요"
        maxLength={1000}
      ></Textarea>
      <Footer>
        <Button text={'취소'} />
        <Button text={'작성'} />
      </Footer>
    </Container>
  );
};

export default CommentInput;

const Container = styled.form`
  width: 600px;
`;
const Footer = styled.footer`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
const Textarea = styled.textarea`
  box-sizing: border-box;
  resize: none;
  width: 100%;
  border-radius: 0.25rem;
  padding: 0.75rem 1rem 0.688rem;
  height: 2.75rem;
`;
