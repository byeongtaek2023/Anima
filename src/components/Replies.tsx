import { getComment, getUserData, supabase } from 'api/supabase/supabase';
import Comment from 'components/Comments';
import CommentInput from 'components/CommentInput';
import React, { useEffect, useState } from 'react';

interface commentParams {
  id: string;
  created_at: string;
  content: string;
  nickname: string;
}

const Replies = () => {
  const [commentList, setCommentList] = useState<commentParams[]>([]);

  const user = () => {
    const tokenString = localStorage.getItem('sb-mrzjkibhsbvwscaesazp-auth-token');
    if (tokenString) {
      // 문자열을 JSON 객체로 변환합니다.
      const tokenObj = JSON.parse(tokenString);
      // `user` 객체에서 `email` 속성을 찾습니다.
      const email = tokenObj?.user?.email;
      console.log(email);
      return email;
    }
    return null; // 토큰이 없거나 `email` 정보가 없는 경우 null 반환
  };

  useEffect(() => {
    getUserData();
    getCommentList();
    user();
  }, []);

  const getCommentList = async () => {
    const commentListData = await getComment();
    if (!commentListData.error && commentListData.data) {
      setCommentList(commentListData.data);
    } else {
      setCommentList([]);
    }
  };

  return (
    <div>
      <CommentInput getCommentList={getCommentList} />
      <Comment commentList={commentList} getCommentList={getCommentList} />
    </div>
  );
};

export default Replies;
