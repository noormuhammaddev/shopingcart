import React, { useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, Container, Divider, Grid, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CardMedia from '@mui/material/CardMedia';

function ProductList({ products, addToCart }) {
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const filteredProducts = selectedColor === ''
    ? products
    : products.filter(product => product.colour === selectedColor);

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
            <label>
              Filter by Color:
              <select value={selectedColor} onChange={handleColorChange}>
                <option value="">All</option>
                <option value="Red">Red</option>
                <option value="Black">Black</option>
                <option value="Stone">Stone</option>
              </select>
            </label>
          </Box>
        </Box>
        
        <Divider sx={{margin: '20px 0'}} light />

        <Grid container spacing={2}>
          {filteredProducts.map(product => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Card key={product.id}>
                <CardMedia 
                  sx={{ height: 430 }}
                  image={product.img}
                  title={product.name}
                />
                <CardContent>
                  <Typography 
                    gutterBottom 
                    variant="h3" 
                    component="div"
                    align="center" 
                    fontWeight="bold"
                    style={{fontSize: '16px', height: '34px'}}
                  >
                    {product.name}
                  </Typography>

                  <Typography align="center" className="mt-2" margin="normal"  sx={{ mt: 3 }}>
                    Price: <strong>${product.price}</strong>
                  </Typography>
                </CardContent>

                <CardActions sx={{display: 'flex', justifyContent: 'center', paddingBottom: '18px'}}>
                  <Button variant="contained"  endIcon={<ShoppingCartIcon />} onClick={() => addToCart(product)}>
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid> 
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default ProductList;