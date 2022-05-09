import * as React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { Card, CardMedia, CardContent, Box, CardActions, Avatar, Typography, Grid, CardItem, ImageList, ImageListItem } from "@mui/material";
import Container from '@mui/material/Container';
import logo from './VagaBondLogo.png';
import { CurrentTripCard } from '../components/CurrentTripCard';
import { FutureTripCard } from '../components/FutureTripCard';
import { PastTripCard } from '../components/PastTripCard';
import { ContactsCard } from '../components/ContactsCard';
import { Theme } from '../Theme';
import { ThemeProvider } from 'styled-components';
import {TripCard} from '../components/TripCard';
import { Link as RouterLink, Navigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { NEWTripDetailCard } from "../components/NEWTripDetailCard";
import CardActionArea from '@mui/material/CardActionArea';


const Profile = ({username, token, loggedUserPk, hasCurrentTrip, contact, firstName, lastName, email, id, isLoggedIn }) => {

  const [trip, setTrip] = useState([]);
  const [begin, setBegin] = useState([]);
  const [trips, setTrips] = useState([]);
  const [usernamePk, setUsernamePk] = useState([]);
  const [tripId, setTripId] = useState("")
  const [tripUsername, setTripUsername] = useState([])
  const [first, setFirst] = useState("")
  const [last, setLast] = useState("")
  const [bio, setBio] = useState("")
  const [tripTotal, setTripTotal] = useState("")


  const VBLogo = (
    <img src={logo} alt='VBLogo' height='100'/>
  );

    useEffect(() => {
      axios
      .get("https://momentum-vagabond.herokuapp.com/api/auth/me",
        {headers: {Authorization: `Token ${token}`}
      })
      .then((response) => {
        setFirst(response.data.trips[0].user_first_name)
        setLast(response.data.trips[0].user_last_name)
        setTripTotal(response.data.trips.length)
        setBio(response.data.bio)
        console.log(response.data)
        setTrips(response.data.trips)
      })
    }, [token, loggedUserPk, setTripTotal, setBio, setLast, setFirst, setTrips])

    // useEffect(() => {
    //   axios
    //     .get("https://momentum-vagabond.herokuapp.com/api/trips",
    //     {headers: {Authorization: `Token ${token}`}
    //     })
  
    //     .then((response) => {
    //       console.log(response.data)
    //       setTrips(response.data)
    //       setUsernamePk(response.data.pk)
    //       setTripId(response.data.pk)
    //       setTripUsername(response.data.username)
    //       console.log("loggedUserPk: " + loggedUserPk)
    //       console.log(response.data.username)
    //       // console.log("tripId" + setTripId)
    //     })
    // }, [loggedUserPk, tripId, token, tripUsername])
  


    // useEffect(() => {
    //   axios
    //   .get("https://momentum-vagabond.herokuapp.com/api/trips/current/user/",
    //       {headers: {Authorization: `Token ${token}`}
    //   })
    //   .then((response) => {
    //       console.log(response.data)
    //       setTrip(response.data)
    //       setBegin(response.data.begin)
    //   })
    // }, [token, loggedUserPk, setTrip, setBegin])


    // useEffect(() => {
    //   axios
    //   .get("https://momentum-vagabond.herokuapp.com/api/trips/future/user/",
    //       {headers: {Authorization: `Token ${token}`}
    //     })
    //   .then((response) => {
    //     console.log(response.data)
    //     setTrip(response.data)
    //     setBegin(response.data.begin)
    //   })
    // }, [token, loggedUserPk, setTrip, setBegin])


    // useEffect(() => {
    //   axios
    //   .get("https://momentum-vagabond.herokuapp.com/api/trips/past/user/",
    //       {headers: {Authorization: `Token ${token}`}
    //     })
    //   .then((response) => {
    //     console.log(response.data)
    //     setTrip(response.data)
    //     setBegin(response.data.begin)
    //   })
    // }, [token, loggedUserPk, setTrip, setBegin])


    if (!token) {
      return <Navigate to="/login" />
  } 

  return (
    <ThemeProvider theme={Theme}>
  
      <Container
      sx={{
         marginTop: 4,
              // marginBotton: 50,
              paddingBottom: 15,
              // display: 'flex',
              // flexDirection: 'column',
              // alignItems: 'center',
              position: 'sticky',
      
      }}
      >
  
    <Card className='ProfileCard'>
      <Grid container spacing={2}>
    <Grid item xs={4}>
      <CardMedia className='ProfileCardMedia'>
        {VBLogo}
      </CardMedia>
    </Grid>
    <Grid item xs={8}>
      <CardContent>
          <Typography variant="h5" component="div">
            {username}
          </Typography>
          <Typography component="div" color="secondary">
              <strong>{tripTotal}</strong> trips
            </Typography>
          </CardContent>
    </Grid>
    </Grid>
      <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {first} {last}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {bio}
          </Typography>
        </CardContent>
        
        <CardActions >
              
        </CardActions>
      {/* </Box> */}
      </Card>
  
    
      {/* <Box>
        <h3>{bio}</h3>
      <h1>
        {username}'s Trips!
      </h1>
      </Box> */}
      <Container maxWidth="xs">
      <h5>My trips...</h5>
      <Container component="main" align="center" maxWidth="xs">
      
      {trips.map((trip) =>
          <TripCard
          username={username}
          key={trip.pk}
          title={trip.title}
          location={trip.location}
          // duration={trip.duration}
          trip_user={trip.user}
          trip_username={trip.username}
          trip_user_first={trip.user_first_name}
          trip_user_last={trip.user_last_name}
          begin={trip.begin}
          end={trip.end}
          tripId={trip.pk}
        />
          )}
      </Container>
      </Container>
  
      {/* <Container maxWidth="sm" align="center">
  {hasCurrentTrip ? (
  <>
    {trip.map((log) => 
      <TripCard
      sx={{
        marginTop: 8,
        paddingLeft: 4,
        marginBottom: 8,
      }}
        logId={log.pk}
        details={log.details}
        location={log.location}
        title={log.title}
        date={log.date_logged}
      />
  //   )}
  //   </>
  //   ) : (
  //   <>  </>
  //   )
  // }
  </Container>
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
    </Container> */}
  
    </Container>
  </ThemeProvider>
    )
  };
  
  export default Profile