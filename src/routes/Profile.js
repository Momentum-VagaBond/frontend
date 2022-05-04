import * as React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { Box } from '@mui/system';
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import Container from '@mui/material/Container';
import { TripCard } from '../components/TripCard';
import logo from './VBLogo.png';
import { CurrentTripCard } from '../components/CurrentTripCard';
import { FutureTripCard } from '../components/FutureTripCard';
import { PastTripCard } from '../components/PastTripCard';
import { Theme } from '../Theme';
import { ThemeProvider } from 'styled-components';


const Profile = ({username, token, loggedUserPk, id, bio }) => {
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
      .get("https://momentum-vagabond.herokuapp.com/api/trip/future/user/",
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
      .get("https://momentum-vagabond.herokuapp.com/api/trip/past/user/",
          {headers: {Authorization: `Token ${token}`}
        })
      .then((response) => {
        console.log(response.data)
        setTrip(response.data)
        setBegin(response.data.begin)
      })
    }, [token, loggedUserPk, setTrip, setBegin])


return (
  <ThemeProvider theme={Theme}>
  <Box
  sx={{
    backgroundColor:'#e9ecef',
    marginBottom: 6,
    paddingBottom: 2,
  }}
  >
  <Container component="main" maxWidth="l" 
    sx={{
      paddingTop: 0,
    }}
  >

  <Card className='ProfileCard'
    sx={{
        // borderRadius: 0,
        // // transition: '0.3s',
        // // boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
        // width: '105%',
        // height: '50%',
        // maxHeight: 125,
        // position: 'static',
        // maxWidth: 600,
        // marginLeft: 0,
        // marginRight: 0,
        // marginTop: 0,
        // // overflow: 'visible',
        // background: '#ffffff',
        // display: 'flex',
        // // flexDirection: 'column',
        // alignItems: 'center',
        // padding: 0,
        // paddingTop: 0,
        // paddingBottom: 10,
        // // boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
    }}
    >

    <CardMedia
        className='ProfileCardMedia'
    >
      {VBLogo}
      </CardMedia>
    <Box className='cardContentBox'
    sx={{
    }}
    >
    <CardContent className='MuiCardContent-root'
    sx={{
        // textAlign: 'left',
        // padding: 1,
        // position: 'relative',
    }}
    >
        <Typography className='MuiTypography--date' variant='overline'>

        </Typography>

    </CardContent>
    </Box>
    </Card>

    <Box>
    <h2>This is {username}'s Profile</h2>
      <h3>{bio}</h3>
    <h1>
      {username}'s Trips!
    </h1>
    </Box>

    <Box>
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

    <Box>
      <h3>FutureTripCard</h3>
      {trip.map((trip, pk) => {
        return (
          <FutureTripCard
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

    <Box>
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
        </Box>
</ThemeProvider>
  )
};

export default Profile