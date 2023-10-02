import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Cart.scss';

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
      >
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price} x
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              {item.quantity}
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>Total: ${getTotalPrice()}</p>
      </Menu>
    </div>
  );
}

export default Cart;
