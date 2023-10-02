
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { Box, Container, Divider, Grid, Typography } from '@mui/material';

const ProductListings = () =>{
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/benirvingplt/products/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  console.log('Products: ', products);

  useEffect(() => {
    if (selectedColor) {
      const filtered = products.filter(product => product.colour === selectedColor);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [selectedColor, products]);

  return (
    <div>
      <Container maxWidth="lg" sx={{marginTop: '30px'}}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '8px',
          alignItems: 'center'
        }}>
          <Typography variant="h5" sx={{margin: '0'}} fontWeight="bold">Product List</Typography>

          <Box sx={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center'
          }}>
            Filter by: 
            <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
              <option value="">All Colors</option>

              <option value="Black">Black</option>
              <option value="Stone">Stone</option>
              <option value="Red">Red</option>
            </select>
          </Box>
        </Box>

        <Divider sx={{margin: '20px 0'}} light />

        <Grid container spacing={2}>
          {filteredProducts.map(product => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <ProductCard 
                productName={product.name}
                productImg={product.img}
                productPrice={product.price}
                productQty={'2'}
              />
            </Grid> 
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default ProductListings;