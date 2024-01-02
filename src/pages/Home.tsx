import { getUserData } from 'api/supabase/supabase';
import Replies from 'components/Replies';
import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      <Replies />
    </div>
  );
};

export default Home;
