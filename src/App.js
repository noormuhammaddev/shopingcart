import React from 'react';
import TopBar from './components/TopBar';
import Products from './pages/ProductList/Products';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <TopBar />
      <QueryClientProvider client={queryClient}>
        <Products />
      </QueryClientProvider>
    </div>
  );
}

export default App;