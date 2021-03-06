import * as React from 'react';
import axios from "axios";
import { useState } from "react";
import { Link as RouterLink, useNavigate, Navigate } from 'react-router-dom'
import { AlertTitle, TextField, Alert, Paper, Typography, Box, Grid, Link, Checkbox, FormControlLabel, CssBaseline, Button, Avatar } from '@mui/material';
import { Theme } from '../Theme';
import { ThemeProvider } from 'styled-components';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="primary" href="https://mui.com/">
        VagaBond
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export const Login = ({ setAuth, isLoggedIn, registerSuccess, setRegisterSuccess, setLoggedUserPk, getLoggedUserPk, VagaBondLogo }) => {
    const loginURL = "https://momentum-vagabond.herokuapp.com/api-token-auth/";
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();


    // const LoginImage = (
    //   <img src={image} alt='LoginImage' height='100' />
    // )

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');
        // setLoggedUserPk("")
        // console.log("original logged user Pk:", loggedUserPk);
        axios
            .post(loginURL, {
                username: username,
                password: password,
            })
            .then((response) => {
                console.log(response.data);
                console.log(response.data.auth_token);
                setAuth(username, response.data.token);
                setIsLoading(false);
                setRegisterSuccess("")
                getLoggedUserPk(response.data.user_id)
                // console.log(loggedUserPk)
                // console.log("token", token); 
                // console.log(isLoggedIn)
            })
            .catch((e) => setError(e.message));
            console.log(error);
          }

        if (isLoggedIn) {
            return <Navigate to="/home" />
        }      

  return (
  <ThemeProvider theme={Theme}>

    <div className="loginDiv">
      <Grid container component="main" >
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
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'absolute',
              backgroundColor: 'primary',
            }}
          >
          <Avatar 
          sx={{ m: 2, bgcolor: 'secondary.main' }}>
            {VagaBondLogo}
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
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: '#424b54',
            }}
            >
          Sign In
        </Button>
        <Grid container>
              <Grid item xs >
              <Link component={RouterLink} to="/register" variant="body2" color="primary">
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
    </div>
    </ThemeProvider>
    )
}