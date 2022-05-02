import * as React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import Container from '@mui/material/Container';
import { ProfileCard } from "../components/ProfileCard";
import { TripCard } from '../components/TripCard';
import Moment from 'react-moment';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Item } from '@mui/material';
import logo from './VBLogo.png';

// import { PictureAsPdfOutlined } from '@mui/icons-material';


const Profile = ({username, token, loggedUserPk, id, bio }) => {
  const [trips, setTrips] = useState([]);

  const VBLogo = (
    <img src={logo} alt='VBLogo' height='100'/>
  );

    useEffect(() => {
      axios
      .get("https://momentum-vagabond.herokuapp.com/api/auth/me",
        {headers: {Authorization: `Token ${token}`}
      })
      .then((response) => {
        console.log(response.data)
      setTrips(response.data.trips)
      })
    }, [token, loggedUserPk, setTrips])

return (
<Box
sx={{
  backgroundColor:'#e9ecef',
}}
>
<Container component="main" maxWidth="l"
  sx={{
    paddingTop: 3,
  }}
>

<Card className='ProfileCard'
    sx={{
        borderRadius: 10,
        transition: '0.3s',
        boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
        width: '90%',
        height: '90%',
        maxHeight: 125,
        position: 'relative',
        maxWidth: 600,
        marginLeft: 2,
        marginRight: 2,
        marginTop: 0,
        overflow: 'visible',
        background: '#ffffff',
        display: 'flex',
        // flexDirection: 'column',
        alignItems: 'center',
        padding: 0,
        paddingTop: 10,
        paddingBottom: 10,
        // boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
    }}
    >

    <CardMedia
        className='ProfileCardMedia'
        component='text'
        //need to connect log photopk here in the image field//
        sx={{
            flexShrink: 0,
            position: 'static',
            width: '30%',
            maxwidth: 200,
            paddingTop: 3,
            paddingBottom: 3,
            paddingLeft: 3,
            transform: "translateX(-10%)",
            // boxShadow: '7px 4px 30px 2px rgba(252, 56, 56, 0.2)',
            borderRadius: 10, // 16px
            backgroundSize: 'constrain',
            backgroundImage: '#fe8a39',
            backgroundColor: '#fe8a39',
            overflow: 'initial',
            // '&:after': {
            //     content: '" "',
            //     // position: 'absolute',
            //     top: 0,
            //     left: 0,
            //     // width: '100%',
            //     // height: '100%',
            //     borderRadius: 2,
            // },
        }}
    >
      {VBLogo}
      </CardMedia>
    <Box className='cardContentBox'
    sx={{
    }}
    >
    <CardContent className='MuiCardContent-root'
    sx={{
        textAlign: 'left',
        p: 2,
        position: 'relative',
    }}
    >
        <Typography className='MuiTypography--date' variant='overline'>
        <p><i>-currently under construction, we thank you for your patience-</i></p>
      <h2>This is {username}'s Profile</h2>
      <p>User Bio, name, etc will be located here</p>
      <h3>{bio}</h3>
        </Typography>

    </CardContent>

    </Box>

    </Card>

    <Box>
    <h1>
      {username}'s Trips!
    </h1>
    </Box>

    <Box>
      {trips.map((trip, pk) => {
        return (
          <TripCard
            key={pk}
            tripId={trip.pk}
            title={trip.title}
            location={trip.location}
            firstName={trip.user_first_name}
            lastName={trip.user_last_name}
            username={trip.username}
            />
      )}
        )}
    </Box>
        </Container>
        </Box>
  )
};




  {/* <CssBaseline />
    <Box sx={{
          marginTop: 7,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent:'center',
          maxWidth: 'auto',
        }}
    >
      <Card
      sx={{
        padding: 10,
        borderRadius: 10,
        transition: '0.3s',
        boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
        backgroundImage: 'linear-gradient(150deg, #fe8a39 30%, #fd3838 85%)',
        backgroundColor: '#0000',
        maxWidth: 500,
      }}
      >
        <Avatar sx={{ backgroundColor: '#2af1b5' }}>A</Avatar>
      <h2>This is {username}'s Profile</h2>
      {bio}
      </Card>
    </Box>


    <Box component="main" maxwidth="m">
      {trips.map((trip, pk) => {
        return (
          <TripCard key={pk}
            tripId={trip.pk}
            title={trip.title}
            location={trip.location}
            firstName={trip.user_first_name}
            lastName={trip.user_last_name}
            username={trip.username}
            />
      )}
        )}
    </Box> */}


export default Profile