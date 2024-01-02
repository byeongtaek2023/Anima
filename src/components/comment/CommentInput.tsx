import React, { useEffect, useState } from 'react';
import Button from './Button';
import { commentInsert, supabase } from 'api/supabase/supabase';
import * as St from './CommentInputStyle';

interface CommentInputProps {
  getCommentList: () => Promise<void>;
}

const CommentInput: React.FC<CommentInputProps> = ({ getCommentList }) => {
  const [text, setText] = useState<string>('');
  const [currentUser, setCurrentUser] = useState<any>(null);
  // console.log(currentUser);
  useEffect(() => {
    checkCurrentUser();
    getCommentList();
  }, []);

  const checkCurrentUser = async () => {
    // 현재 로그인된 사용자의 정보를 가져옵니다.
    try {
      const { data } = await supabase.auth.getSession();
      // console.log(data);
      setCurrentUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await commentInsert(text);

    // window.location.reload();
  };

  return (
    <St.Container onSubmit={onSubmitHandler}>
      <St.Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="댓글을 남겨보세요"
        maxLength={1000}
      ></St.Textarea>
      <St.Footer>
        <Button text={'취소'} />
        <Button text={'작성'} />
      </St.Footer>
    </St.Container>
  );
};

export default CommentInput;
