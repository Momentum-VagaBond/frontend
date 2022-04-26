import React from 'react';
import { useState } from 'react';
import { Navigate, Link as RouterLink} from 'react-router-dom'
import axios from 'axios';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { AlertTile, TextField, Alert, Container, Typography, Box, Grid, Link, Checkbox, FormControlLabel, CssBaseline, Button, Avatar, CircularProgress } from '@mui/material';;

export const Register = ({ isLoggedIn, setRegisterSuccess, registerSuccess }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [error, setError] = useState("");
    // const [success, setSucess] = useState("");
    const [isRegistered, setIsRegistered] = useState(false);

    const handleRegistration = (e) => {
      console.log("making post");
    e.preventDefault();
    setError("");
    console.log(username, password, email);
      axios
        .post("https://momentum-vagabond.herokuapp.com/auth/users/", {
          firstname: firstName,
          lastname:lastName,
          username: username,
          password: password,
          email: email,
        })
        .then((res) => {
          console.log(res.data);
          setRegisterSuccess(true);
          setIsRegistered(true)
          console.log(registerSuccess)
          
        })
        .catch((e) => setError(e.message))
      }
  if (isLoggedIn) {
    return <Navigate to='/trips' />
  }
  if (isRegistered) {
    console.log("Registered!")
    return <Navigate to='/login' />
  }


  return (
  <div className="Register">
    <Container component="main" sx={{ mt: 4 }} maxWidth="xs">
      {error && <Alert severity="error">{error}. <strong>Please Try Again.</strong></Alert>}
      
    <CssBaseline />
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
          Sign up
      </Typography>
      <Box component="form" noValidate onSubmit={handleRegistration} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
          <TextField
                  value={firstName}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={lastName}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  value={username}
                  label="Select a Username"
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  value={email}
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={password}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-start">
              <Grid item>
                <Link component={RouterLink} to="/login" variant="body2">
                  {"Already have an account? Login here."}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
}