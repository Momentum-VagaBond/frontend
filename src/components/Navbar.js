import React from 'react';
import { Link } from 'react-router-dom';
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
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import FlightTwoToneIcon from '@mui/icons-material/FlightTwoTone';
import CardTravelTwoToneIcon from '@mui/icons-material/CardTravelTwoTone';
import AddLocationAltTwoToneIcon from '@mui/icons-material/AddLocationAltTwoTone';
import logo from './VagaBond2.png';


export const Navbar = () => {

  const VagaBondLogo = (
    <img src={logo} alt='VagaBondLogo' height='50'/>
  );

  return (
    <AppBar
    position="static"
    title='AppBar'
      sx={{backgroundColor: '#fe8a39'}}
    >
      <Container maxWidth="m">

          <Box 
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
            }}>

              <MenuItem>
                <Link to="/newtrip">
                <FlightTwoToneIcon fontSize='inherit' />
                  New Trip
                </Link>
              </MenuItem>

              <MenuItem>
                <Link to="/profile">
                <AccountCircleTwoToneIcon fontSize='inherit' />
                Profile
                </Link>
              </MenuItem>

              <MenuItem>
                <Link to="/logout">
                <AddLocationAltTwoToneIcon fontSize='inherit' />
                  Logout
                </Link>
              </MenuItem>

              {VagaBondLogo}

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
      </Container>
    </AppBar>
  );
};