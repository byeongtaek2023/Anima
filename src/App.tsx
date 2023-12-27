import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import GlobalStyles from 'style/Globalstyles';
import Router from 'shared/Router';

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
