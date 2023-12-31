import { supabase } from 'App';
import Comment from 'components/Comment';
import CommentInput from 'components/CommentInput';
import React, { useEffect } from 'react';

const Home = () => {
  // const getUserSession = async () => {
  //   try {
  //     const { data, error } = await supabase.auth.getSession();
  //     console.log(data);
  //     if (error) throw error;
  //     return data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const getUserData = async () => {
    const {
      data: { user }
    } = await supabase.auth.getUser();
    return user;
  };

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
