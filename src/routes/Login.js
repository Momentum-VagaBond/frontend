import * as React from 'react';
import axios from "axios";
import { useState } from "react";
import { Link as RouterLink, useNavigate, Navigate } from 'react-router-dom'

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { AlertTitle, TextField, Alert, Paper, Typography, Box, Grid, Link, Checkbox, FormControlLabel, CssBaseline, Button, Avatar, CircularProgress } from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export const Login = ({ setAuth, isLoggedIn, token, registerSuccess, setRegisterSuccess }) => {
    const loginURL = "https://momentum-vagabond.herokuapp.com/auth/token/login";
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const theme = createTheme();

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
                setRegisterSuccess("")
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
      <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
      {error && <div className="errorDiv">{error}</div>}
      {registerSuccess && 
        <Alert severity="success">
          <AlertTitle>Registration Succesful!</AlertTitle>
            Please login below to get started!
        </Alert>}
      <CssBaseline />
      <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
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
              <Link component={RouterLink} to="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
              <Grid item>
                
              </Grid>
            </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Box>
      </Box>
    </Grid>
    </Grid>
    </ThemeProvider>
    </div>
    )
}