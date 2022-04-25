import * as React from 'react';
import axios from "axios";
import { useState } from "react";
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
import { Navigate } from "react-router-dom";


export const Login = ({ setAuth, isLoggedIn, token }) => {
    const loginURL = "https://momentum-vagabond.herokuapp.com/auth/token/login";
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

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
            })
            .catch((e) => setError(e.message));
            console.log(username);
            console.log(password);
            // console.log({token});

        if (isLoggedIn) {
            return <Navigate to="/userquestions" />
        }
        
        if (isLoading) {
            return <CircularProgress />
                }
        }
        
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
    <form onSubmit={handleLogin}>
    <div className="usernameInput">
        <label className="usernameLabel">
            Username
        </label>
        <input
            type="text"
            id="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
    </div>
    <div className="passwordDiv">
        <label className="passwordLabel">
            Password
        </label>
        <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <div className="submitButton">
            <button type="submit">
                Log in
            </button>
        </div>
    </form>
    {/* <div className="regButt">
        <Link to='/user'>Register</Link>
    </div> */}
    </Box>
    </Container>
    </div>
    )
    };