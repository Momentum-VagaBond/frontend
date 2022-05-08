import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Card, Container, Box, Grid, Typography, Paper } from '@mui/material/';
import { ThemeProvider } from "styled-components";
import { Theme } from "../Theme";

export const ContactsCard = ({firstName, lastName, email}) => {

    return(
<ThemeProvider theme={Theme}>
    <CssBaseline />


    <Container
        sx={{
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#e9ecef',
            width: '85%',
            // position: 'relative',
        }}>

    <Grid container component="main">
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
    <Box
    sx={{
        marginTop: 2,
        //marginRight: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }}
    >
        <b><p>{firstName} {lastName}</p></b>
        <p>{email}</p>
    </Box>
    </Grid>
    </Grid>
    </Container>
</ThemeProvider>
    )
}