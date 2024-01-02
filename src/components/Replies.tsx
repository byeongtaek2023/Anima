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

  useEffect(() => {
    getUserData();
    getCommentList();
    getUesrNickname();
  }, []);

  const getCommentList = async () => {
    const commentListData = await getComment();
    console.log(commentListData.data);
    if (!commentListData.error && commentListData.data) {
      setCommentList(commentListData.data);
      console.log(commentListData);
    } else {
      setCommentList([]);
    }
  };

  const getUesrNickname = async () => {
    let { data: users } = await supabase.from('users').select('nickname');
    console.log(users);
  };

  return (
    <div>
      <CommentInput getCommentList={getCommentList} />
      <Comment commentList={commentList} getCommentList={getCommentList} />
    </div>
  );
};

export default Replies;
