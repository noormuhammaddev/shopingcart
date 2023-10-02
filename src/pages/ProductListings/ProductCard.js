import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ProductCard(
  {productName, 
  productImg,
  productPrice,
  productQty}
) {
  return (
    <Card>
      <CardMedia
        sx={{ height: 430 }}
        image={productImg}
        title={productName}
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
          {productName}
        </Typography>

        <Typography align="center" className="mt-2" margin="normal"  sx={{ mt: 3 }}>
          Price: <strong>${productPrice}</strong>
        </Typography>

        {/* <Typography align="center" className="mt-2" margin="normal"  sx={{ mt: 1 }}>
          Qty: <strong>{productQty}</strong>
        </Typography> */}
      </CardContent>
      <CardActions sx={{display: 'flex', justifyContent: 'center', paddingBottom: '18px'}}>
        <Button variant="contained"  endIcon={<ShoppingCartIcon />}>
          Add to Car
        </Button>
      </CardActions>
    </Card>
  );
}