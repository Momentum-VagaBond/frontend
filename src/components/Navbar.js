import * as React from 'react';
import { BottomNavigation, AppBar, Toolbar, IconButton, MenuIcon, StyledFab, Box, SearchIcon, MoreIcon, BottomNavigationAction, Paper, Typography, MenuItem } from '@mui/material';
import { Edit, Home } from '@mui/icons-material';
// import EditIcon from '@mui/icons-material/Edit';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../Theme';




export default function NavBar() {
  // const [value, setValue] = React.useState('recents');
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <React.Fragment>
    <ThemeProvider theme={Theme}>
      
       <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <BottomNavigation  sx={{backgroundColor: '#e76f51', labelColor: 'white', color: "white", 
            paddingTop: .5, paddingBotton: .5 }} showLabels  value={value} onChange={handleChange}>
          
          <BottomNavigationAction component={Link} to="/home" label="Home" icon={<Home sx={{ color: 'white'}} />} />

          <BottomNavigationAction color="white" label="New Log" component={Link} to="/newlog" icon={<Edit sx={{ color: 'white'}} />} />

          <BottomNavigationAction label="New Trip" component={Link} to="/newtrip" icon={<AirplanemodeActiveIcon sx={{ color: 'white'}} />} />

          <BottomNavigationAction label="Profile" component={Link} to="/profile" icon={<PersonIcon sx={{ color: 'white'}} />} />

        </BottomNavigation>
          
        
      </AppBar>
      </ThemeProvider>
    </React.Fragment>
  );
  // fontWeight: 'medium',
  }
      
      {/* <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
    <BottomNavigation 
    // showLabels
    color='#FFFFFF'
    sx={{
      width: '100%',
      // width: 'auto'
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: 0,
      marginTop: 10,
      position: 'fixed',
      fontWeight: 'medium',
      paddingBottom: 1,
      top: 'auto',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#e76f51',
    }} 
    value={value} onChange={handleChange}>

        <BottomNavigationAction component={Link} to="/home" label="Home" icon={<Home sx={{ color: 'white'}} />} />

        <BottomNavigationAction label="New Log" component={Link} to="/newlog" icon={<Edit sx={{ color: 'white'}} />} />

        <BottomNavigationAction label="New Trip" component={Link} to="/newtrip" icon={<AirplanemodeActiveIcon sx={{ color: 'white'}} />} />

      <BottomNavigationAction label="Profile" component={Link} to="/profile" icon={<PersonIcon sx={{ color: 'white'}} />} />

    </BottomNavigation>
    </Paper> */}
    // </ThemeProvider>
  









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