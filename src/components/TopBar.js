import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Stack } from '@mui/material';

export default function TopBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div" sx={{marginRight: '50px'}}> 
            ShopintCart
          </Typography>

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <Link href="/" sx={{color: '#fff'}}>Products</Link>
            <Link href="/about"  sx={{color: '#fff'}}>About Us</Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}