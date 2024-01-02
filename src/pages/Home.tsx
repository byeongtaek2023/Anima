import { getUserData } from 'api/supabase/supabase';
import Replies from 'components/Replies';
import AniList from 'components/main/AniList';
import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    getUserData();
  }, []);

  return <AniList />;
};

export default Home;
