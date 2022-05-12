import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import TripCard from '../components/TripCard';
import { Container, Card, Box, Typography} from "@mui/material";
import { Theme } from '../Theme';
import { ThemeProvider } from 'styled-components';
import { Link as RouterLink, Navigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { NEWTripDetailCard } from "../components/NEWTripDetailCard";
import CardActionArea from '@mui/material/CardActionArea';
import { StartTripCard } from "../components/StartTripCard";
// import Background2 from './Background2.png'



export default function SubscriberHome ({username, loggedUserPk, token, setSubscriberHasCurrent, subscriberHasCurrent, setTripId, tripId, isLoggedIn}) {
  // const [trips, setTrips] = useState([]);
  // const [usernamePk, setUsernamePk] = useState([]);
  // const [tripId, setTripId] = useState([]);
  const [tripLogs, setTripLogs] = useState([]);
  const [currentTripsSubscriber, setCurrentTripsSubscriber] = useState([]);
  const [futureTripsSubscriber, setFutureTripsSubscriber] = useState([]);   //this gives future trips
  const [pastTripsSubscriber, setPastTripsSubscriber] = useState([]);   //this gives the most recent past trips
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
    .get(`https://momentum-vagabond.herokuapp.com/api/user/current/subscribed`,
        {headers: {Authorization: `Token ${token}`}
    })
    .then((response) => {
        console.log(response.data)
        if (response.data.length !== 0){
          setSubscriberHasCurrent(true)
          setCurrentTripsSubscriber(response.data)
          setTripId(response.data.pk)
          setTripLogs(response.data.trip_logs)
          console.log("tripLogs:" + response.data.trip_logs)
          console.log(response.data.username)
          console.log("current trip:" + response.data.pk)
        } else {
          setSubscriberHasCurrent(false)
        }
    })
  }, [token, setSubscriberHasCurrent, setCurrentTripsSubscriber, loggedUserPk, setTripLogs, setTripId])

  console.log(subscriberHasCurrent)

    //Getting Most recent past trip if one exists

  useEffect(() => {
    if (subscriberHasCurrent === false) {
    axios
    .get(`https://momentum-vagabond.herokuapp.com/api/user/past/subscribed/`,
        {headers: {Authorization: `Token ${token}`}
    })
    .then((response) => {
        console.log("past trips: " + response.data)
        if (response.data.length !== 0){
          setPastTripsSubscriber(response.data)
          setTripId(response.data.pk)
          console.log(response.data.pk)
          console.log(subscriberHasCurrent)
        } 
    })
  }
  }, [token, setPastTripsSubscriber, subscriberHasCurrent, loggedUserPk, setTripId])

  // get future trips of traveler
  useEffect(() => {
    if (subscriberHasCurrent === false) {
    axios
    .get(`https://momentum-vagabond.herokuapp.com/api/user/future/subscribed`,
        {headers: {Authorization: `Token ${token}`}
    })
    .then((response) => {  
        if (response.data.length !== 0){
          setFutureTripsSubscriber(response.data)
          setTripId(response.data.pk)
          console.log("future trips" + response.data)
          // console.log("most recent past trip:" + response.data[0].pk)
        } 

    })
  }
  }, [token, subscriberHasCurrent, setFutureTripsSubscriber, loggedUserPk, setTripId])


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
            // scrollMarginBottom: 30,
            // bottom: 5,
            // backgroundColor: '#e9ecef',
            // position: 'absolute',
        }}>
{/* <Typography mb={2} mt={4} variant="h5" align="center"><strong>Welcome, {username}! <br /> How's your trip?</strong></Typography> */}
  
<Container maxWidth="sm" align="center">
{subscriberHasCurrent ? (
  <>
  <Typography mb={2} mt={4} variant="h5" align="center"><strong>Follow along...</strong></Typography>

  {currentTripsSubscriber.map((current) => 
  
    <CardActionArea component={RouterLink} to={`/trips/${tripId}/${current.pk}`}>
    <NEWTripDetailCard
    sx={{
      marginTop: 8,
      paddingLeft: 4,
      marginBottom: 8,
    }}
      logId={current.pk}
      details={current.details}
      location={current.location}
      title={current.title}
      date={current.date_logged}
    />
    </CardActionArea>
  )}
  </>
  ) : (
  <>
    {/* <StartTripCard/>   */}
  </>
  )
}
</Container>


  
<Container maxWidth="sm" align="center">
<>
{pastTripsSubscriber ? (
<>
<Typography mb={2} mt={4} variant="h5" align="center"><strong>Great Memories...</strong></Typography>
{pastTripsSubscriber.map((pastTripSubscriber) => 
    <TripCard
      username={username}
      key={pastTripSubscriber.pk}
      title={pastTripSubscriber.title}
      location={pastTripSubscriber.location}
      // duration={trip.duration}
      trip_user={pastTripSubscriber.user}
      trip_username={pastTripSubscriber.username}
      trip_user_first={pastTripSubscriber.user_first_name}
      trip_user_last={pastTripSubscriber.user_last_name}
      begin={pastTripSubscriber.begin}
      end={pastTripSubscriber.end}
      tripId={pastTripSubscriber.pk}
    />
    )}
    </>
    ) : (
    <></>
    )
  }
  </>
  
    </Container>

   
<Container maxWidth="sm" align="center"> 
  <>
  {futureTripsSubscriber  ? (
<>
<Typography mb={2} mt={4} variant="h5" align="center"><strong>Future Adventures...</strong></Typography>
  {futureTripsSubscriber.map((futureTrip) => 
    <TripCard
      username={username}
      key={futureTrip.pk}
      title={futureTrip.title}
      location={futureTrip.location}
      // duration={trip.duration}
      trip_user={futureTrip.user}
      trip_username={futureTrip.username}
      trip_user_first={futureTrip.user_first_name}
      trip_user_last={futureTrip.user_last_name}
      begin={futureTrip.begin}
      end={futureTrip.end}
      tripId={futureTrip.pk}
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