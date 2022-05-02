import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import {TripCard} from '../components/TripCard';
// import {CommentBox} from '../components/CommentBox';

// import {TripDetail} from './TripDetail';
// import { Link } from 'react-router-dom';

import Container from '@mui/material/Container';



const AllTrips = ({username, loggedUserPk, token, map, id}) => {
  const [trips, setTrips] = useState([]);
  const [usernamePk, setUsernamePk] = useState([]);
  const [tripId, setTripId] = useState("")
  const [tripUsername, setTripUsername] = useState([])
  const [mytrips, setMyTrips] = useState([])
  const [followingTrips, setFollowingTrips] = useState([])
  let[userTripNumber, setUserTripNumber] = useState(0)
  let[userFollowNumber, setUserFollowNumber] = useState(0)


  useEffect(() => {
    axios
      .get("https://momentum-vagabond.herokuapp.com/api/trips")

      .then((response) => {
        console.log(response.data)
        setTrips(response.data)
        setUsernamePk(response.data.pk)
        setTripId(response.data.pk)
        setTripUsername(response.data.username)
        console.log("loggedUserPk: " + loggedUserPk)
        console.log(response.data.username)
        // console.log("tripId" + setTripId)
      })
  }, [loggedUserPk, tripId, tripUsername])

  // useEffect(() => {
  //   const resultsFromSearch = trip.filter((trip: any) =>
  //         trip.title.toLowerCase().includes(username)
  //       );
  //   setSearchResults(resultsFromSearch);
  //   }, [items])

return (
  <>
<Container maxWidth="xs">
  <h1>Welcome, {username}</h1>
  {/* <h2>This is a test list of ALL trips</h2> */}
  {/* {loggedUserPk}  */}
</Container>

<Container component="main" maxWidth="xs">
<h2>My trips</h2>

{trips.map((trip) => {
    if (username === trip.username) {
      while (userTripNumber < 1) {
      setUserTripNumber((userTripNumber += 1))
      console.log(userTripNumber)
      }
    return (
      
      // <div key={id}>
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
    // </div>
    )
  }
  } )}
    {userTripNumber === 0 && (
    <h1>No trips yet! Ready to start one?</h1>
  )
  }
  </Container>

  <Container component="main" maxWidth="xs">
<h2>Trips I'm Following</h2>

{trips.map(trip => {
    if (username !== trip.username) {
      while (userFollowNumber < 1) {
        setUserFollowNumber((userFollowNumber += 1))
        console.log(userFollowNumber)
        }
      
    return (
      
      // <div key={id}>
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
    // </div>
    )

    
  }
  } )}
   {userFollowNumber === 0 && (
    <h1>Not following any trips yet</h1>
  )
  }
  </Container>
  </>
  )
  }

export default AllTrips;



// <Card sx={{
    //   mt: 8,
    //   pl: 4,
      // display: 'flex',
      // flexDirection: 'column',
      // // alignItems: 'center', 
      // border: 1
    // }}>
