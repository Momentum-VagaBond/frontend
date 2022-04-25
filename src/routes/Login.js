import * as React from 'react';
import axios from "axios";
import { useState } from "react";
import { Link as RouterLink, useNavigate, Navigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { createTheme, ThemeProvider } from '@mui/material/styles';



export const Login = ({ setAuth, isLoggedIn, token }) => {
    const loginURL = "https://momentum-vagabond.herokuapp.com/auth/token/login";
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');
        axios
            .post(loginURL, {
                username: username,
                password: password,
            })
            .then((response) => {
                console.log(response.data);
                console.log(response.data.auth_token);
                setAuth(username, response.data.auth_token);
                setIsLoading(false);
                console.log(token);
                console.log(isLoggedIn)
            })
            .catch((e) => setError(e.message));
            console.log(error);
            

        navigate("/trips")
        }

        if (isLoggedIn) {
            return <Navigate to="/trips" />
        }
      //had to disable isLoading because it was getting stuck when navigating here after loging out
        // if (isLoading) {
        //   return <CircularProgress />
        //     }
        
        
  return (
    <div className="loginDiv">
    <Container component="main" maxWidth="xs">
      {error && <div className="errorDiv">{error}</div>}
      <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 2, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
    <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1}}>
        <TextField 
            margin="normal"
            required
            fullWidth
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            name="password"
            autoComplete="password"
            autoFocus
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
        />
        <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            >
          Sign In
        </Button>
        <Grid container>
              <Grid item xs >
              <Link componenet={RouterLink} to="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
              <Grid item>
                
              </Grid>
            </Grid>
    </Box>
    {/* <div className="reg">
        <Link to='/user'>Register</Link>
    </div> */}
    </Box>
    </Container>
    </div>
    )
    };