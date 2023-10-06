import React from 'react';
import TopBar from './components/TopBar';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { StaticRoutes } from './routing/Routing';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <TopBar />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <StaticRoutes />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;