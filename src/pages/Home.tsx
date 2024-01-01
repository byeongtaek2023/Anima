import { getUserData } from 'api/supabase/supabase';
import Comment from 'components/Comment';
import CommentInput from 'components/CommentInput';
import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      <CommentInput />
      <Comment />
    </div>
  );
};

export default Home;
