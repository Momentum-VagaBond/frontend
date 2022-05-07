import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import {TripCard} from '../components/TripCard';
import { Container, Card, Box} from "@mui/material";
import { Theme } from '../Theme';
import { ThemeProvider } from 'styled-components';
import { Link as RouterLink, Navigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { NEWTripDetailCard } from "../components/NEWTripDetailCard";
import CardActionArea from '@mui/material/CardActionArea';




export default function Home ({username, loggedUserPk, token, map, setTripId, tripId, isLoggedIn}) {
  // const [trips, setTrips] = useState([]);
  // const [usernamePk, setUsernamePk] = useState([]);
  // const [tripId, setTripId] = useState([])
  const [tripLogs, setTripLogs] = useState([])
  const [currentTripTraveler, setCurrentTripTraveler] = useState([])
  const [hasCurrentTrip, setHasCurrentTrip] = useState(false)
  const [pastTripTraveler, setPastTripTraveler] = useState([])   //this gives the 1 Most recent past trip
  // const [showMyTrips, setShowMyTrips] = useState(false)
  // const [showFollowing, setShowFollowing] = useState(false)
  // const [showFollowingTrips, setShowFollowingTrips] = useState(false)
  // let[userTripNumber, setUserTripNumber] = useState(0)
  // let[userFollowNumber, setUserFollowNumber] = useState(0)
  // const [alignment, setAlignment] = React.useState('left');

  const params = useParams()

  //Getting current trip if one exists

  useEffect(() => {
    axios
    .get("https://momentum-vagabond.herokuapp.com/api/trips/current/user/",
        {headers: {Authorization: `Token ${token}`}
    })
    .then((response) => {
        console.log(response.data[0])
        setCurrentTripTraveler(response.data[0])
        setTripId(response.data[0].pk)
        setTripLogs(response.data[0].trip_logs)
        console.log("tripLogs:" + response.data[0].trip_logs)
        console.log(response.data.username)
        console.log("current trip:" + response.data[0].pk)

    })
  }, [token, setCurrentTripTraveler, setTripId])

  // if (currentTripTraveler) {
  //   setHasCurrentTrip(true)
  // }

  // if (!currentTripTraveler) {
  //   setHasCurrentTrip(false)
  // }


    //Getting Most recent past trip if one exists

  useEffect(() => {
    if (!currentTripTraveler) {
    axios
    .get("https://momentum-vagabond.herokuapp.com/api/trips/past/user/",
        {headers: {Authorization: `Token ${token}`}
    })
    .then((response) => {
        // console.log(response.data)

        setPastTripTraveler(response.data[0])
        setTripId(response.data[0].pk)
        console.log(response.data[0].username)
        console.log("most recent past trip:" + response.data[0].pk)

    })
  }
  }, [token, setPastTripTraveler, pastTripTraveler, currentTripTraveler, setTripId])


  if (!isLoggedIn) {
    return <Navigate to="/login" />
} 
  

return (
  <ThemeProvider theme={Theme}>
  <>
<Container >
  <h1>Welcome, {username}</h1>
  </Container>

  {tripLogs.map((log) => 
    <CardActionArea component={RouterLink} to={`/trips/${tripId}/${log.pk}`}>
    <NEWTripDetailCard
 
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
    </CardActionArea>
    )}


{/* <h2>Bon Voyage! Current trip to {currentTripTraveler.location} </h2> 
  {currentTripTraveler && (
    <CardActionArea component={RouterLink} to={`/trips/${tripId}`}>
    <TripCard
      username={username}
      key={currentTripTraveler.pk}
      title={currentTripTraveler.title}
      location={currentTripTraveler.location}
      // duration={trip.duration}
      trip_user={currentTripTraveler.user}
      trip_username={currentTripTraveler.username}
      trip_user_first={currentTripTraveler.user_first_name}
      trip_user_last={currentTripTraveler.user_last_name}
      begin={currentTripTraveler.begin}
      end={currentTripTraveler.end}
      tripId={currentTripTraveler.pk}
    />
    </CardActionArea>
  )}  */}
{/* <Container component="main"
    sx={{
      marginBottom: 10,
      backgroundColor: '#e9ecef',
      position: 'absolute',
    }}
    > */}

  {/* <Card
  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 2,
  }}
  >
  </Card> */}

  

{/* <h2>Traveler's 1 most Recent past trip {pastTripTraveler.location} </h2>
{pastTripTraveler && (
    <TripCard
      username={username}
      key={pastTripTraveler.pk}
      title={pastTripTraveler.title}
      location={pastTripTraveler.location}
      // duration={trip.duration}
      trip_user={pastTripTraveler.user}
      trip_username={pastTripTraveler.username}
      trip_user_first={pastTripTraveler.user_first_name}
      trip_user_last={pastTripTraveler.user_last_name}
      begin={pastTripTraveler.begin}
      end={pastTripTraveler.end}
      tripId={pastTripTraveler.pk}
    />
)} */}

  {/* <Grid item xs={6} direction="column" key={id}> */}

     {/* {userTripNumber === 0 && (
pm {tripId}
    {/* {userTripNumber === 0 && (
    <h1>No trips yet! Ready to start one?</h1>
  */}
  {/* </Container> */}
{/* } */}
{/* {showFollowing && */}
  {/* <Container component="main" maxWidth="sm">
    <h2>Trips I'm Following</h2>
  </Container> */}

  </>
  </ThemeProvider>
  )
}


// export default AllTrips;
