import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import {TripCard} from '../components/TripCard';
import Moment from 'react-moment'
import { Container, Box, Button, Typography } from "@mui/material";
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import LaptopIcon from '@mui/icons-material/Laptop';
import TvIcon from '@mui/icons-material/Tv';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Luggage, Visibility} from "@mui/icons-material";
// import {CommentBox} from '../components/CommentBox';

// import {TripDetail} from './TripDetail';
// import { Link } from 'react-router-dom';





export default function AllTrips ({username, loggedUserPk, token, map, id}) {
  const [trips, setTrips] = useState([]);
  const [usernamePk, setUsernamePk] = useState([]);
  const [tripId, setTripId] = useState("")
  const [tripUsername, setTripUsername] = useState([])
  const [showMyTrips, setShowMyTrips] = useState(false)
  const [showFollowing, setShowFollowing] = useState(false)
  // const [showFollowingTrips, setShowFollowingTrips] = useState(false)
  let[userTripNumber, setUserTripNumber] = useState(0)
  let[userFollowNumber, setUserFollowNumber] = useState(0)
  const [alignment, setAlignment] = React.useState('left');


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

  const handleAlignment = (event, newAlignment, setShowFollowing, showFollowing, showMyTrips) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
    // if (showMyTrips === false) {
    //   setShowMyTrips(true);
    // }
    // if (showMyTrips !== false) {
    //   setShowMyTrips(false);
    // }
    // if (showFollowing === false) {
    //   setShowFollowing(true);
    // }
    // if (showFollowing !== false) {
    //   setShowFollowing(false);
    // }
  };

return (
  <>
<Container >
  <h1>Welcome, {username}</h1>
  {/* <h2>This is a test list of ALL trips</h2> */}
  {/* {loggedUserPk}  */}
</Container>
<Stack direction="row" spacing={4}>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="left" aria-label="left aligned">
          <Luggage /> 
        </ToggleButton>
        
        <ToggleButton value="right" aria-label="right aligned">
          <Visibility /> 
        </ToggleButton>
      </ToggleButtonGroup>
  </Stack>
{/* <Container component="main" maxWidth="xs">
  <Button variant="outlined" startIcon={<DeleteIcon />}>
  My Trips
</Button>
  <Button variant="contained" endIcon={<SendIcon />}>
  Trips I'm Following
</Button>
</Container> */}
{/* {showMyTrips && */}
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
{/* } */}

{/* {showFollowing && */}
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
{/* } */}
  </>
  )
}

// export default AllTrips;
