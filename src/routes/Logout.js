import React from 'react';
import axios from "axios";
import { Navigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
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

export const Logout = ({token, setAuth, isLoggedIn}) => {
    const theme = createTheme();

    const handleLogOut = () => {
    const options = {
        method: "POST",
        url: 'https://momentum-vagabond.herokuapp.com/auth/token/logout/',
        headers:{
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        },
        data: {
            token:`${token}`,
            },
        };

        axios
            .request(options)
            .then(function (response) {
                // console.log(response.data);
                console.log(response)
            })
            .catch(function (error) {
                console.error(error);
            });

        localStorage.setItem("username", "");
        localStorage.setItem("token", "");
        setAuth("", "");
        };

        //   .then((res) => {
        //     setAuth(null, null);
        //     localStorage.clear();
        //   })
        //   .catch((e) => {
        //     console.log(e);
        //     setStatus(e.status);
        //     setAuth(null, null);
        //   });
    
    //   if (status === 401) {
    //     setAuth(null, null);
    //   }

    if (!isLoggedIn) {
        return <Navigate to="/login" />
    }

    return (

<ThemeProvider theme={theme}>
    <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
            backgroundImage: 'url(https://source.unsplash.com/random/nature)',
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
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Log Out
            </Typography>
            <Box component="form" noValidate onSubmit={handleLogOut} sx={{ mt: 1 }}>
            <Button className="Logout"
                type="button"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => handleLogOut()}>
                Logout
            </Button>

            <Copyright sx={{ mt: 5 }} />
            </Box>
        </Box>
        </Grid>
    </Grid>
    </ThemeProvider>
    );
}


    // <div className="logout">
        
    // <div className="field-controls">

    // <Container component="main" sx={{ mt: 4 }} maxWidth="xs">
    //     <Box
    //     sx={{
    //         marginTop: 8,
    //         display: 'flex',
    //         flexDirection: 'column',
    //         alignItems: 'center',
    //     }}
    //     >
    //         <h1>Logout</h1>
    //     <Button className="Logout"
    //         type="submit"
    //         fullWidth
    //         variant="contained"
    //         sx={{ mt: 3, mb: 2 }}
    //     onClick={() => handleLogOut()}>
    //         Logout
    //     </Button>
    //     </Box>
    // </Container>
    // </div>
    // </div>
