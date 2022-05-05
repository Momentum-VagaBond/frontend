import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
  
export default function Header() {
  return (
      <AppBar position="static" color="primary">
        <Toolbar>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
  
          <Typography variant="h6"
            color="secondary"
            component="div"
            sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent:'center',
            }}
            >
              <Button
              variant="h6"
              color="secondary"
              >VagaBond</Button>
          </Typography>

          {/* <MenuItem component={Link} to="/profile">
                <Link to="/profile">
                <AccountCircleTwoToneIcon fontSize='inherit' />
                Profile
                </Link>
              </MenuItem> */}
        </Toolbar>
      </AppBar>
  );
}