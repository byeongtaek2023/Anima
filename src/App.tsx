import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import GlobalStyles from 'style/Globalstyles';
import Router from 'shared/Router';
import { queryClient } from 'api/supabase/supabase';

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <Router />
      </QueryClientProvider>
    </>
  );
}

export default App;
