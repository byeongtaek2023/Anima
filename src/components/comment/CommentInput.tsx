import React, { useEffect, useState } from 'react';
import Button from './Button';
import { commentInsert, supabase } from 'api/supabase/supabase';
import * as St from './CommentInputStyle';

interface CommentInputProps {
  getCommentList: () => Promise<void>;
}
interface CommentInputProps {
  getCommentList: () => Promise<void>;
}
const CommentInput: React.FC<CommentInputProps> = ({ getCommentList }) => {
  const [text, setText] = useState<string>('');
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await commentInsert(text);
    setText('');
    getCommentList();
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
