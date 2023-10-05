import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from '../../components/Cart/Cart';
import TopBar from '../../components/TopBar';
import { useQuery } from 'react-query';

const getProducts = async () => {
  const response = await fetch('https://my-json-server.typicode.com/benirvingplt/products/products');
  if (!response.ok) {
    throw new Error('Network problem');
  }
  return response.json();
};

function Products() {
  const [cart, setCart] = useState([]);

  const { data, isLoading, error } = useQuery('products', getProducts);
  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

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
    <>
      <TopBar />
      <ProductList products={data} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
    </>
  );
}

export default Products;