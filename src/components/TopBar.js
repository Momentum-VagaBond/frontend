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

export default function TopBar(isLoggedIn, token, setToken, setUsername) {
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
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          > */}
          <Typography
           variant="subtitle2"
           color="secondary"
           >
            VAGABOND
            </Typography>
            {/* <MenuItem>
                <Link to="/newtrip">
                <FlightTwoToneIcon fontSize='inherit' />
                  New Trip
                </Link>
              </MenuItem> */}

              {/* <MenuItem>
                <Link to="/trips">
                <CardTravelTwoToneIcon fontSize='inherit' />
                  All Trips
                </Link>
              </MenuItem> */}

              {/* <MenuItem>
              
                <AccountCircleTwoToneIcon component={Link} to="/profile" fontSize='inherit' />
                Profile
             
              </MenuItem> */}

              {/* <MenuItem>
                <Link to="/newlog">
                <AddLocationAltTwoToneIcon fontSize='inherit' />
                  New Log
                </Link>
              </MenuItem>
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            {VBLogo}
            {/* <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton> */}
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

              {/* <MenuItem>
                <Link to="/newtrip">New Trip</Link>
              </MenuItem> */}

              {/* <MenuItem>
                <Link to="/trips">All Trips</Link>
              </MenuItem> */}

            </Menu>
          </Box>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            VagaBond
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {routes.map((route) => (
              <Button
                key={route}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {route}
              </Button>
            ))} */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="BC" src="/static/images/avatar/2.jpg" />
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