import * as React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from 'react-router-dom';
import { Box, Item } from '@mui/system';
import { Card, CardMedia, CardContent, Typography, ImageList, ImageListItem } from "@mui/material";
import Container from '@mui/material/Container';
import { Grid, GridItem } from '@mui/material';
import logo from './VBLogo.png';
import { CurrentTripCard } from '../components/CurrentTripCard';
import { FutureTripCard } from '../components/FutureTripCard';
import { PastTripCard } from '../components/PastTripCard';
import { ContactsCard } from '../components/ContactsCard';
import { Theme } from '../Theme';
import { ThemeProvider } from 'styled-components';


const Profile = ({username, token, loggedUserPk, contact, firstName, lastName, email, id, bio, isLoggedIn }) => {
  const [trips, setTrips] = useState([]);
  const [trip, setTrip] = useState([]);
  const [begin, setBegin] = useState([]);

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


    useEffect(() => {
      axios
      .get("https://momentum-vagabond.herokuapp.com/api/trips/current/user/",
          {headers: {Authorization: `Token ${token}`}
      })
      .then((response) => {
          console.log(response.data)
          setTrip(response.data)
          setBegin(response.data.begin)
      })
    }, [token, loggedUserPk, setTrip, setBegin])


    useEffect(() => {
      axios
      .get("https://momentum-vagabond.herokuapp.com/api/trips/future/user/",
          {headers: {Authorization: `Token ${token}`}
        })
      .then((response) => {
        console.log(response.data)
        setTrip(response.data)
        setBegin(response.data.begin)
      })
    }, [token, loggedUserPk, setTrip, setBegin])


    useEffect(() => {
      axios
      .get("https://momentum-vagabond.herokuapp.com/api/trips/past/user/",
          {headers: {Authorization: `Token ${token}`}
        })
      .then((response) => {
        console.log(response.data)
        setTrip(response.data)
        setBegin(response.data.begin)
      })
    }, [token, loggedUserPk, setTrip, setBegin])


    if (!token) {
      return <Navigate to="/login" />
  } 

return (
  <ThemeProvider theme={Theme}>

    <Container
    sx={{
      position: 'absolute'
    }}
    >

  <Card className='ProfileCard'>
    <CardMedia className='ProfileCardMedia'>
      {VBLogo}
    </CardMedia>

    <Box className='cardContentBox'>
    <CardContent className='MuiCardContent-root'
    sx={{
        textAlign: 'left',
        padding: 1,
        position: 'relative',
    }}
    >
        <Typography className='MuiTypography--date' variant='overline'>
        <h2>This is {username}'s Profile</h2>
        </Typography>

    </CardContent>
    </Box>
    </Card>

  <Container>
    <Box>
      <h3>{bio}</h3>
    <h1>
      {username}'s Trips!
    </h1>
    </Box>

    <Box
    sx={{
      marginBottom: 50,
    }}
    >
      <h3>CurrentTripCard</h3>
      {trip.map((trip, pk) => {
        return (
          <CurrentTripCard
            key={pk}
            tripId={trip.pk}
            title={trip.title}
            user={trip.user}
            location={trip.location}
            begin={trip.begin}
            end={trip.end}
          />
        )}
      )}
    </Box>

    <Box
    sx={{
      marginBottom: 50,
    }}
    >
      <h3>FutureTripCard</h3>
      {trips.map((trip, pk) => {
        return (
          <FutureTripCard
            key={pk}
            tripId={trip.pk}
            title={trip.title}
            user={trip.user}
            location={trip.location}
            begin={trip.begin}
            end={trip.end}
            img={trip.img}
          />
        )}
      )}
    </Box>

    <Box
    sx={{
      marginBottom: 50,
    }}
    >
    <h3>PastTripCard</h3>
      {trips.map((trip, pk) => {
        return (
          <PastTripCard
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
  </Container>
</ThemeProvider>
  )
};

export default Profile