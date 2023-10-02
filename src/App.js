import React, { useState, useEffect } from 'react';
import ProductList from './pages/ProductList/ProductList';
import Cart from './components/Cart/Cart';
import TopBar from './components/TopBar';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/benirvingplt/products/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);
  console.log('products', products)

  const addToCart = (product) => {
    const updatedCart = [...cart];
    const index = updatedCart.findIndex(item => item.id === product.id);

    if (index !== -1) {
      updatedCart[index].quantity++;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setCart(updatedCart);
  };

  return (
    <div className="App">
      <TopBar />
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
    </div>
  );
}

export default App;