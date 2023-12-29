import AniList from 'components/AniList';
import Comment from 'components/Comment';
import CommentInput from 'components/CommentInput';
import React from 'react';

const Home = () => {
  return (
    <div>
      <CommentInput />
      <AniList/>
      <Comment />
    </div>
  );
};

export default Home;
