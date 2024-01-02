import { getUserData } from 'api/supabase/supabase';
import AniList from 'components/main/AniList';
import ScrollToTop from 'components/scrolltop/ScrollToTop';
import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <AniList />
      <ScrollToTop />
    </>
  );
};

export default Home;
