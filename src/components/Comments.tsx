import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getComment, getUserSession, supabase } from 'api/supabase/supabase';
import Comment from './Comment';

interface commentParams {
  id: string;
  created_at: string;
  content: string;
  nickname: string;
}

const Comments = ({ commentList, getCommentList }: { commentList: commentParams[]; getCommentList: any }) => {
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    checkCurrentUser();
  }, []);

  const checkCurrentUser = async () => {
    // 현재 로그인된 사용자의 정보를 가져옵니다.
    const data = await getUserSession();
    // console.log(data);
    setCurrentUser(data);
  };

  return (
    <div>
      <ul>
        {commentList.map((item) => {
          return <Comment item={item} currentUser={currentUser} getCommentList={getCommentList} />;
        })}
      </ul>
    </div>
  );
};

export default Comments;
