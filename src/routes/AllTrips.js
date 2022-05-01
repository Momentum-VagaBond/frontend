import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import {TripCard} from '../components/TripCard';
// import {CommentBox} from '../components/CommentBox';

// import {TripDetail} from './TripDetail';
// import { Link } from 'react-router-dom';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField'
// // import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';



const AllTrips = ({username, loggedUserPk, token, map, id}) => {
  const [trips, setTrips] = useState([]);
  const [usernamePk, setUsernamePk] = useState([]);
  const [tripId, setTripId] = useState("")


  useEffect(() => {
    axios
      .get("https://momentum-vagabond.herokuapp.com/api/trips")
      .then((response) => {
        console.log(response.data)
        setTrips(response.data)
        setUsernamePk(response.data.pk)
        setTripId(response.data.pk)
        console.log("loggedUserPk" + loggedUserPk)
        console.log("tripId" + setTripId)
      })
  }, [loggedUserPk, tripId])

return (
  <>
<Container maxWidth="xs">
  <h1>Welcome, {username}</h1>
  <h2>This is a test list of ALL trips</h2>
  {/* {loggedUserPk}  */}
</Container>

<Container component="main" maxWidth="xs">
  {trips.map(trip => {
    return (
      <div key={id}>
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
    </div>
    )
  }
    )}
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
