import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import './Cart.scss';
import { IconButton } from '@mui/material';

function Cart({ cart, removeFromCart, updateQuantity }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-wrapper">
      <Button
        id="basic-button"
        sx={{color: '#fff'}}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <ShoppingCartIcon color="inherit" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}  
        className="cart-menu"
      >
        <ul className="selected-products">
          {cart.map(item => (
            <li key={item.id}>
              <div class="product-name">{item.name}</div>
              <div className="actions">
                ${item.price} x
                <Button variant="outlined" size="small" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                  -
                </Button>
                {item.quantity}
                <Button variant="outlined" size="small" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                  +
                </Button>
                <IconButton aria-label="delete" size="small" onClick={() => removeFromCart(item.id)}>
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              </div>
            </li>
          ))}
        </ul>

        <div className="total">
          <span>Total:</span> 
          <span>${getTotalPrice()}</span>
        </div>
      </Menu>
    </div>
  );
}

export default Cart;
