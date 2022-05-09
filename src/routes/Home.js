import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import {TripCard} from '../components/TripCard';
import { Container, Card, Box, Grid, CardMedia, CardContent, Typography} from "@mui/material";
import { Theme } from '../Theme';
import { ThemeProvider } from 'styled-components';
import { Link as RouterLink, Navigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { NEWTripDetailCard } from "../components/NEWTripDetailCard";
import CardActionArea from '@mui/material/CardActionArea';
import { StartTripCard } from "../components/StartTripCard";
import logo from './VagaBondLogo.png';
// import Background5 from './Background5.png'



export default function Home ({username, loggedUserPk, token, map, hasCurrentTrip, setHasCurrentTrip, setTripId, tripId, isLoggedIn}) {
  // const [trips, setTrips] = useState([]);
  // const [usernamePk, setUsernamePk] = useState([]);
  // const [tripId, setTripId] = useState([])
  const [tripTitle, setTripTitle] = useState("");
  const [tripLocation, setTripLocation] = useState("")
  const [logNumber, setLogNumber] = useState("")
  const [tripLogs, setTripLogs] = useState([])
  const [currentTripTraveler, setCurrentTripTraveler] = useState([])
  const [futureTripsTraveler, setFutureTripsTraveler] = useState([])   //this gives future trips
  const [pastTripTraveler, setPastTripTraveler] = useState([])   //this gives the 1 Most recent past trip
  // const [showMyTrips, setShowMyTrips] = useState(false)
  // const [showFollowing, setShowFollowing] = useState(false)
  // const [showFollowingTrips, setShowFollowingTrips] = useState(false)
  // let[userTripNumber, setUserTripNumber] = useState(0)
  // let[userFollowNumber, setUserFollowNumber] = useState(0)
  // const [alignment, setAlignment] = React.useState('left');

  const params = useParams()

  const VBLogo = (
    <img src={logo} alt='VBLogo' height='100'/>
  );

  //Getting current trip if one exists

  useEffect(() => {
    axios
    .get("https://momentum-vagabond.herokuapp.com/api/trips/current/user/",
        {headers: {Authorization: `Token ${token}`}
    })
    .then((response) => {
        console.log(response.data[0])
        if (response.data[0]){
          setHasCurrentTrip(true)
          setCurrentTripTraveler(response.data[0])
          setTripId(response.data[0].pk)
          setTripLogs(response.data[0].trip_logs)
          setLogNumber(response.data[0].trip_logs.length)
          setTripLocation(response.data[0].location)
          setTripTitle(response.data[0].title)
          console.log("tripLogs:" + response.data[0].trip_logs)
          console.log(response.data.username)
          console.log("current trip:" + response.data[0].pk)
        } else {
          setHasCurrentTrip(false)
        }
    })
  }, [token, setCurrentTripTraveler, setTripLocation, setTripTitle, setHasCurrentTrip, setTripId])


    //Getting Most recent past trip if one exists

  useEffect(() => {
    if (hasCurrentTrip === false) {
    axios
    .get("https://momentum-vagabond.herokuapp.com/api/trips/past/user/",
        {headers: {Authorization: `Token ${token}`}
    })
    .then((response) => {
        console.log("past trips: " + response.data)
        // if (response.data[0]){
          setPastTripTraveler(response.data[0])
          setTripId(response.data[0].pk)
          console.log(response.data[0].pk)
          console.log("most recent past trip:" + response.data[0].pk)
        // } 
    })
  }
  }, [token, setPastTripTraveler, hasCurrentTrip,  setTripId])

  // get future trips of traveler
  useEffect(() => {
    if (hasCurrentTrip === false) {
    axios
    .get("https://momentum-vagabond.herokuapp.com/api/trips/future/user/",
        {headers: {Authorization: `Token ${token}`}
    })
    .then((response) => {  
        if (response.data){
          setFutureTripsTraveler(response.data)
          setTripId(response.data.pk)
          console.log("future trips" + response.data)
          // console.log("most recent past trip:" + response.data[0].pk)
        } 

    })
  }
  }, [token,  hasCurrentTrip, setFutureTripsTraveler, setTripId])


  if (!isLoggedIn) {
    return <Navigate to="/login" />
} 
  
return (
  <ThemeProvider theme={Theme}>
 
<Container sx={{
            // marginTop: 10,
            // marginBotton: 50,
            // paddingBottom: 15,
            // display: 'flex',
            // flexDirection: 'column',
            // alignItems: 'center',
            // position: 'sticky',
            // backgroundImage: `url(${Background2})`,
            backgroundSize: 'cover',
            height: "100%",
            paddingBottom: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'sticky',
            // backgroundImage: `url(${Background5})`,
            // backgroundSize: 'cover',
            // height: "100vh",
            // scrollMarginBottom: 30,
            // bottom: 5,
            // backgroundColor: '#e9ecef',
            // position: 'absolute',
        }}>
<Container mb={2}>
  {hasCurrentTrip &&
 
  <Box mt={4} mb={4}>
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
            <strong>Current Trip in {tripLocation}</strong>
          </Typography>
          {/* <Typography variant="body2" color="secondary"> <strong>{logNumber}</strong> log(s)</Typography> */}
        </CardContent>
  </Grid>
  </Grid>
  <Typography variant="subtitle2" color="primary">{tripTitle}</Typography>
  <Typography variant="body2" color="secondary"> <strong>{logNumber}</strong> log(s)</Typography>
  {/* <Typography  variant="subtitle2" color="primary"> {tripLocation}</Typography> */}
  

  </Box>
  }
</Container>
<Container maxWidth="sm" align="center">
{hasCurrentTrip ? (
<>
  {tripLogs.map((log) => 
  
    <CardActionArea component={RouterLink} to={`/trips/${tripId}/${log.pk}`}>
    <NEWTripDetailCard
    sx={{
      // display: 'flex',
      // flexDirection: 'column',
      // flex: 1,
      // width: 'auto',
      // height: 'auto',
      // marginTop: 2,
      // marginTop: 8,
      // paddingLeft: 4,
      // marginBottom: 8,
      // width: '100%',
    }}
      logId={log.pk}
      details={log.details}
      location={log.location}
      title={log.title}
      date={log.date_logged}
    />
    </CardActionArea>
  )}
  </>
  ) : (
  <>
    <StartTripCard/>  
  </>
  )
}
</Container>


  
<Container maxWidth="l" align="center">

{(!hasCurrentTrip && (pastTripTraveler === null)) ? 

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
  : '' }

  </Container>
  <Container maxWidth="m" align="center"> 
  <>
  {(!hasCurrentTrip && futureTripsTraveler) ? (
<>
  {futureTripsTraveler.map((futureTripTraveler) => 
    <TripCard
      username={username}
      key={futureTripTraveler.pk}
      title={futureTripTraveler.title}
      location={futureTripTraveler.location}
      // duration={trip.duration}
      trip_user={futureTripTraveler.user}
      trip_username={futureTripTraveler.username}
      trip_user_first={futureTripTraveler.user_first_name}
      trip_user_last={futureTripTraveler.user_last_name}
      begin={futureTripTraveler.begin}
      end={futureTripTraveler.end}
      tripId={futureTripTraveler.pk}
    />
  )}
  </>
  ) : (
  <></>
  )
}
</>
  </Container>


  </Container>
  </ThemeProvider>
  )
}


// export default AllTrips;
