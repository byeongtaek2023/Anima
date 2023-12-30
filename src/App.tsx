import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createClient, SupabaseClient } from '@supabase/supabase-js'; // Supabase에서 createClient 및 SupabaseClient를 가져옵니다.
import './App.css';
import GlobalStyles from 'style/Globalstyles';
import Router from 'shared/Router';

// QueryClient를 생성합니다.
export const supabase = createClient(process.env.REACT_APP_SUPABASE_URL!, process.env.REACT_APP_SUPABASE_ANON_KEY!);
const queryClient = new QueryClient();

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
