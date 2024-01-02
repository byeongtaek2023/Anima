import { getComment, getUserData } from 'api/supabase/supabase';
import Comment from 'components/Comment';
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
  }, []);

  const getCommentList = async () => {
    const commentListData = await getComment();
    console.log(commentListData.data);
    if (!commentListData.error && commentListData.data) {
      setCommentList(commentListData.data);
    } else {
      setCommentList([]);
    }
  };

  return (
    <div>
      <CommentInput getCommentList={getCommentList} />
      <Comment commentList={commentList} />
    </div>
  );
};

export default Replies;
