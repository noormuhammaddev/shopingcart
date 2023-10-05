import React from 'react';
import TopBar from './components/TopBar';
import Products from './pages/ProductList/Products';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Products />
    </div>
  );
}

export default App;