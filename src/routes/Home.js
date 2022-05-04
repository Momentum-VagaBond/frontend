// import React from "react";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import {TripCard} from '../components/TripCard';
// import Moment from 'react-moment'
// import { Container,Grid, Stack, Box, Button, Typography } from "@mui/material";
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// import { Luggage, Visibility} from "@mui/icons-material";
// import { Theme } from '../Theme';
// import { ThemeProvider } from 'styled-components';
// // import {CommentBox} from '../components/CommentBox';

// // import {TripDetail} from './TripDetail';
// // import { Link } from 'react-router-dom';


// export default function Home ({username, loggedUserPk, token, map, getTripId}) {
//   const [trips, setTrips] = useState([]);
//   const [usernamePk, setUsernamePk] = useState([]);
//   const [tripId, setTripId] = useState("")
//   const [tripUsername, setTripUsername] = useState([])
//   const [currentTripTraveler, setCurrentTripTraveler] = useState([])
//   const [showMyTrips, setShowMyTrips] = useState(false)
//   const [showFollowing, setShowFollowing] = useState(false)
//   // const [showFollowingTrips, setShowFollowingTrips] = useState(false)
//   let[userTripNumber, setUserTripNumber] = useState(0)
//   let[userFollowNumber, setUserFollowNumber] = useState(0)
//   const [alignment, setAlignment] = React.useState('left');


//   useEffect(() => {
//     axios
//       .get("https://momentum-vagabond.herokuapp.com/api/trips/current/user/",
//       {headers: {Authorization: `Token ${token}`}
//       })

//       .then((response) => {
//         console.log(response.data)
//         setCurrentTripTraveler(response.data[0])
//         setUsernamePk(response.data.pk)
//         getTripId(response.data[0].pk)
//         setTripUsername(response.data.username)
//         console.log("loggedUserPk: " + loggedUserPk)
//         console.log(response.data[0].pk)
//         // console.log("tripId" + setTripId)
//       })
//   }, [loggedUserPk, tripId, token, getTripId])

//   //All TRIPS- leaving in until we get the other new endpoints here
//   // useEffect(() => {
//   //   axios
//   //     .get("https://momentum-vagabond.herokuapp.com/api/trips",
//   //     {headers: {Authorization: `Token ${token}`}
//   //     })

//   //     .then((response) => {
//   //       console.log(response.data)
//   //       setTrips(response.data)
//   //       setUsernamePk(response.data.pk)
//   //       setTripId(response.data.pk)
//   //       setTripUsername(response.data.username)
//   //       console.log("loggedUserPk: " + loggedUserPk)
//   //       console.log(response.data.username)
//   //       // console.log("tripId" + setTripId)
//   //     })
//   // }, [loggedUserPk, tripId, token, tripUsername])

//   // useEffect(() => {
//   //   const resultsFromSearch = trip.filter((trip: any) =>
//   //         trip.title.toLowerCase().includes(username)
//   //       );
//   //   setSearchResults(resultsFromSearch);
//   //   }, [items])

//   const handleAlignment = (event, newAlignment, setShowFollowing, showFollowing, showMyTrips) => {
//     if (newAlignment !== null) {
//       setAlignment(newAlignment);
//     }
//     // if (showMyTrips === false) {
//     //   setShowMyTrips(true);
//     // }
//     // if (showMyTrips !== false) {
//     //   setShowMyTrips(false);
//     // }
//     // if (showFollowing === false) {
//     //   setShowFollowing(true);
//     // }
//     // if (showFollowing !== false) {
//     //   setShowFollowing(false);
//     // }
//   };

// return (
//   <ThemeProvider theme={Theme}>
//   <>
// <Container >
//   <h1>Welcome, {username}</h1>
//   {/* <h2>This is a test list of ALL trips</h2> */}
//   {/* {loggedUserPk}  */}

// <Stack direction="row" spacing={4}>
//       <ToggleButtonGroup
//         value={alignment}
//         exclusive
//         onChange={handleAlignment}
//         aria-label="text alignment"
//       >
//         <ToggleButton value="left" aria-label="left aligned">
//           <Luggage /> 
//         </ToggleButton>
        
//         <ToggleButton value="right" aria-label="right aligned">
//           <Visibility /> 
//         </ToggleButton>
//       </ToggleButtonGroup>
//   </Stack>
//   </Container>
// {/* <Container component="main" maxWidth="xs">
//   <Button variant="outlined" startIcon={<DeleteIcon />}>
//   My Trips
// </Button>
//   <Button variant="contained" endIcon={<SendIcon />}>
//   Trips I'm Following
// </Button>
// </Container> */}
// {/* {showMyTrips && */}

// <Container component="main" maxWidth="sm">

// <h2>Bon Voyage!</h2>


//   {/* <Grid item xs={6} direction="column" key={id}> */}
//   {currentTripTraveler && (
//     <TripCard
//       username={username}
//       key={currentTripTraveler.pk}
//       title={currentTripTraveler.title}
//       location={currentTripTraveler.location}
//       // duration={trip.duration}
//       trip_user={currentTripTraveler.user}
//       trip_username={currentTripTraveler.username}
//       trip_user_first={currentTripTraveler.user_first_name}
//       trip_user_last={currentTripTraveler.user_last_name}
//       begin={currentTripTraveler.begin}
//       end={currentTripTraveler.end}
//       tripId={currentTripTraveler.pk}
//     />
//     // </Grid>
//     )}
// {tripId}
//      {/* {userTripNumber === 0 && (
//     <h1>No trips yet! Ready to start one?</h1>
//   */}
//   </Container>
// {/* } */}
// {/* {showFollowing && */}
//   <Container component="main" maxWidth="sm">
//     <h2>Trips I'm Following</h2>
//   </Container>
//   </>
//   </ThemeProvider>
//   )
// }

// // export default AllTrips;
