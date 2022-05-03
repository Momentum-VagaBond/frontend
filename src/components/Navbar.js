import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import FlightTwoToneIcon from '@mui/icons-material/FlightTwoTone';
import CardTravelTwoToneIcon from '@mui/icons-material/CardTravelTwoTone';
import AddLocationAltTwoToneIcon from '@mui/icons-material/AddLocationAltTwoTone';
import { Link } from 'react-router-dom';


export default function Navbar() {

  return (
    <Box
    sx={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#fe8a39',
    }}>
      <CssBaseline />
      <Paper
        elevation={3}
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#fe8a39',
        }}>

        <BottomNavigation>
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

               <MenuItem>
                 <Link to="/trips">
                 <AddLocationAltTwoToneIcon fontSize='inherit' />
                   AllTrips
                 </Link>
               </MenuItem>

        </BottomNavigation>
      </Paper>
    </Box>
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