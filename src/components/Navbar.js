import * as React from 'react';
import { Box } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import { BottomNavigation } from '@mui/material';
import { Paper } from '@mui/material';
import { MenuItem } from '@mui/material';
import { AccountCircleTwoTone } from '@mui/icons-material';
import FlightTwoToneIcon from '@mui/icons-material/FlightTwoTone';
import CardTravelTwoToneIcon from '@mui/icons-material/CardTravelTwoTone';
import AddLocationAltTwoToneIcon from '@mui/icons-material/AddLocationAltTwoTone';
import { Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../Theme';


export default function NavBar() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={Theme}>
    <BottomNavigation 
    color='secondary'
    sx={{
      width: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: 0,
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#e76f51',
     }} 
     value={value} onChange={handleChange}>
          <MenuItem>
            <Link to="/newtrip">
              <FlightTwoToneIcon fontSize='inherit' />
                New Trip
            </Link>
          </MenuItem>

          <MenuItem>
            <Link to="/profile">
              <AccountCircleTwoTone fontSize='inherit' />
                Profile
            </Link>
          </MenuItem>

               <MenuItem>
                 <Link to="/logout">
                 <AddLocationAltTwoToneIcon fontSize='inherit' />
                   Logout
                 </Link>
               </MenuItem>

               <MenuItem>
                 <Link to="/trips">
                 <AddLocationAltTwoToneIcon fontSize='inherit' />
                   AllTrips
                 </Link>
               </MenuItem>
    </BottomNavigation>
    </ThemeProvider>
  );
}









// import React from 'react';
// import { Link } from 'react-router-dom';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
// import FlightTwoToneIcon from '@mui/icons-material/FlightTwoTone';
// import CardTravelTwoToneIcon from '@mui/icons-material/CardTravelTwoTone';
// import AddLocationAltTwoToneIcon from '@mui/icons-material/AddLocationAltTwoTone';
// import logo from './VagaBond2.png';


// export const Navbar = () => {

//   const VagaBondLogo = (
//     <img src={logo} alt='VagaBondLogo' height='50'/>
//   );

//   return (
//     <AppBar
//     title='AppBar'
//       sx={{
//         backgroundColor: '#fe8a39'
//       }}
//     >
//       <Container maxWidth="m">

//           <Box 
//             sx={{
//               flexGrow: 1,
//               display: { xs: 'flex', md: 'none' },
//             }}>

//               <MenuItem>
//                 <Link to="/newtrip">
//                 <FlightTwoToneIcon fontSize='inherit' />
//                   New Trip
//                 </Link>
//               </MenuItem>

//               <MenuItem>
//                 <Link to="/profile">
//                 <AccountCircleTwoToneIcon fontSize='inherit' />
//                 Profile
//                 </Link>
//               </MenuItem>

//               <MenuItem>
//                 <Link to="/logout">
//                 <AddLocationAltTwoToneIcon fontSize='inherit' />
//                   Logout
//                 </Link>
//               </MenuItem>

//               {VagaBondLogo}
//           </Box>

//       </Container>
//     </AppBar>
//   );
// };