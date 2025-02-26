import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import logo from '../assets/images/logo.svg';

export default function NavAppBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = (
    <Box
      sx={{ width: 250, mt: 8 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Home', 'New', 'Popular', 'Trending', 'Categories'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <IconButton
        size="large"
        color="inherit"
        aria-label="close"
        sx={{ position: 'absolute', top: 8, right: 8 }}
        onClick={toggleDrawer(false)}
      >
        <CloseIcon />
      </IconButton>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ bgcolor: 'white', color: 'black', boxShadow: 'none' }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box
            component="img"
            src={logo}
            alt="logo"
            sx={{ height: 40, mr: 2 }}
          />
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <Button
              color="inherit"
              sx={{
                textTransform: 'none',
                fontWeight: '400',
                '&:hover': {
                  color: 'hsl(35, 77%, 62%)',
                  backgroundColor: 'white',
                },
              }}
              mx={2}
            >
              Home
            </Button>
            <Button
              color="inherit"
              sx={{
                textTransform: 'none',
                fontWeight: '400',
                textDecoration: 'none',
                '&:hover': {
                  color: 'hsl(35, 77%, 62%)',
                  backgroundColor: 'white',
                },
              }}
              mx={2}
            >
              New
            </Button>
            <Button
              color="inherit"
              sx={{
                textTransform: 'none',
                fontWeight: '400',
                textDecoration: 'none',
                '&:hover': {
                  color: 'hsl(35, 77%, 62%)',
                  backgroundColor: 'white',
                },
              }}
              mx={2}
            >
              Popular
            </Button>
            <Button
              color="inherit"
              sx={{
                textTransform: 'none',
                fontWeight: '400',
                textDecoration: 'none',
                '&:hover': {
                  color: 'hsl(35, 77%, 62%)',
                  backgroundColor: 'white',
                },
              }}
              mx={2}
            >
              Trending
            </Button>
            <Button
              color="inherit"
              sx={{
                textTransform: 'none',
                fontWeight: '400',
                textDecoration: 'none',
                '&:hover': {
                  color: 'hsl(35, 77%, 62%)',
                  backgroundColor: 'white',
                },
              }}
              mx={2}
            >
              Categories
            </Button>
          </Box>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 2, display: { xs: 'flex', sm: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
    </Box>
  );
}
