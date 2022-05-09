import React from 'react';
import { Link, Router,  } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ColorLogo from "./ColorLogo.png";
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import FlightTwoToneIcon from '@mui/icons-material/FlightTwoTone';
import CardTravelTwoToneIcon from '@mui/icons-material/CardTravelTwoTone';
import AddLocationAltTwoToneIcon from '@mui/icons-material/AddLocationAltTwoTone';

const VBLogo = (
  <img src={ColorLogo} alt='VagaBondLogo' height='65'/>
);

export default function TopBar(isLoggedIn, token, setToken, setUsername, tripTotal) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static"
      // sx={{'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)'}}
    >
      <Container maxWidth="m">
        <Toolbar>
          <Typography
            variant="subtitle2"
            color="secondary"
          >
            VAGABOND
            </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', mx: 'none' } }}>
            {VBLogo}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: 'white'}}>
                <MenuIcon alt="hamburger" color="white" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem component={Link} to="/home/subscriber" onClick={handleCloseUserMenu}>
              Trips Following
            </MenuItem>
            
            <MenuItem component={Link} to="/profile"onClick={handleCloseUserMenu}>
              Profile
            </MenuItem>

            <MenuItem component={Link} to="/contacts"onClick={handleCloseUserMenu}>
              Contacts
            </MenuItem>

            <MenuItem component={Link} to="/logout" onClick={handleCloseUserMenu}>
              Log Out
            </MenuItem>
          

            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};