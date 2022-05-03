import * as React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import Container from '@mui/material/Container';
import { TripCard } from '../components/TripCard';
import logo from './VBLogo.png';
// import { CurrentTripCard } from '../components/CurrentTripCard';


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
    paddingTop: 10,
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
        marginRight: 1,
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
        // component='img'
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
        padding: 1,
        position: 'relative',
    }}
    >
        <Typography className='MuiTypography--date' variant='overline'>
      <h2>This is {username}'s Profile</h2>
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

{/* <CurrentTripCard /> */}

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
            trip_username={trip.username}
            begin={trip.begin}
            end={trip.end}
            username={username}
            />
      )}
        )}
    </Box>
        </Container>
        </Box>
  )
};

export default Profile