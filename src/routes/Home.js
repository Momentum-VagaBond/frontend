import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import {TripCard} from '../components/TripCard';
import { Container } from "@mui/material";
import { Theme } from '../Theme';
import { ThemeProvider } from 'styled-components';
import { Link as Navigate } from 'react-router-dom'



export default function Home ({username, loggedUserPk, token, map, getTripId, isLoggedIn}) {
  // const [trips, setTrips] = useState([]);
  // const [usernamePk, setUsernamePk] = useState([]);
  const [tripId, setTripId] = useState([])
  // const [tripUsername, setTripUsername] = useState([])
  const [currentTripTraveler, setCurrentTripTraveler] = useState([])
  // const [showMyTrips, setShowMyTrips] = useState(false)
  // const [showFollowing, setShowFollowing] = useState(false)
  // const [showFollowingTrips, setShowFollowingTrips] = useState(false)
  // let[userTripNumber, setUserTripNumber] = useState(0)
  // let[userFollowNumber, setUserFollowNumber] = useState(0)
  // const [alignment, setAlignment] = React.useState('left');



  useEffect(() => {
    axios
    .get("https://momentum-vagabond.herokuapp.com/api/trips/current/user/",
        {headers: {Authorization: `Token ${token}`}
    })
    .then((response) => {
        console.log(response.data)
        setCurrentTripTraveler(response.data[0])
        setTripId(response.data[0].pk)
        console.log(response.data[0].username)
        console.log("current trip:" + response.data[0].pk)

    })
  }, [token, setCurrentTripTraveler, setTripId])

  if (!isLoggedIn) {
    return <Navigate to="/login" />
} 
  

return (
  <ThemeProvider theme={Theme}>
  <>
<Container >
  <h1>Welcome, {username}</h1>
  
  </Container>


<Container component="main" maxWidth="sm">

<h2>Bon Voyage!</h2>


  {/* <Grid item xs={6} direction="column" key={id}> */}
  {currentTripTraveler && (
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
    // </Grid>
    )}

     {/* {userTripNumber === 0 && (
{tripId}
    {/* {userTripNumber === 0 && (
    <h1>No trips yet! Ready to start one?</h1>
  */}
  </Container>
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
