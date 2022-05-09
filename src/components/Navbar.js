import * as React from 'react';
import { BottomNavigation, AppBar, Toolbar, IconButton, MenuIcon, StyledFab, Box, SearchIcon, MoreIcon, BottomNavigationAction, Paper, Typography, MenuItem } from '@mui/material';
import { Edit, Home } from '@mui/icons-material';
// import EditIcon from '@mui/icons-material/Edit';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../Theme';
import { styled } from "@mui/material/styles";
import MuiBottomNavigationAction from "@mui/material/BottomNavigationAction";





export default function NavBar() {
  // const [value, setValue] = React.useState('recents');
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const BottomNavigationAction = styled(MuiBottomNavigationAction)(`
  color: white;
  font-size: '1rem';
  &.Mui-selected {
    color: white;
    font-weight: normal;
  }

    
  }
`);

  return (
    <React.Fragment>
    <ThemeProvider theme={Theme}>
      
      <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }}>
        <BottomNavigation  sx={{backgroundColor: '#e76f51', labelColor: 'white', color: "white", 
            paddingTop: .5, paddingBotton: .5 }} showLabels  value={value} onChange={handleChange}>
          
          <BottomNavigationAction component={Link} to="/home" label="Home" icon={<Home sx={{ color: 'white'}} />} />

          <BottomNavigationAction color="white" size="small" label="New Log" component={Link} to="/newlog" icon={<Edit sx={{ color: 'white'}} />} />

          <BottomNavigationAction label="New Trip" component={Link} to="/newtrip" icon={<AirplanemodeActiveIcon sx={{ color: 'white'}} />} />

          <BottomNavigationAction label="Following" component={Link} to="/home/subscriber" icon={<PersonIcon sx={{ color: 'white'}} />} />

        </BottomNavigation>
          
        
      </AppBar>
      </ThemeProvider>
    </React.Fragment>
  );
  // fontWeight: 'medium',
  }
