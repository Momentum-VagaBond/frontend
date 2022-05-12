import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import TripCard from '../components/TripCard';
import { Container, Card, Box, Grid, CardContent, CardActions, Typography} from "@mui/material";
import { Theme } from '../Theme';
import { ThemeProvider } from 'styled-components';
import { Link as RouterLink, Navigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { NEWTripDetailCard } from "../components/NEWTripDetailCard";
import CardActionArea from '@mui/material/CardActionArea';
import { StartTripCard } from "../components/StartTripCard";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import BG1 from "./BG1.png";



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

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}





return (
  <ThemeProvider theme={Theme}>

<Container
sx={{
  backgroundImage: `url(${BG1})`,
  backgroundSize: '100% 100%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  maxWidth: '100%',
  width: '100vh',
  minHeight: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  position: "relative",
  overflow: 'scroll',
  //zIndex: 1,
}}
>

{/* header has current trip */}
  <Container>
  
      <Container
      sx={{
        marginTop: 4,
              // marginBotton: 50,
        paddingBottom: 15,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'sticky',
      }}
      >

<Box className='ProfileCard'
    sx={{
      height: 50,
      width: '80%',
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
    }}
    >
      <Typography
    variant="h3"
    color="secondary"
  >
    VAGABOND
    </Typography>
      <Grid container spacing={2}>
    <Grid item xs={2}>

    </Grid>
    </Grid>

      </Box>

<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Current Trip" {...a11yProps(0)} />
          <Tab label="Past Trips" {...a11yProps(1)} />
          <Tab label="Future Trips" {...a11yProps(2)} />
        </Tabs>
      </Box>
{/* CURRENT */}
    <TabPanel value={value} index={0}
    sx={{
      border: 1,
    }}
    >

{subscriberHasCurrent ? (
  <>
<Typography mb={2} variant="h5" align="center"><strong>Current Subscriptions</strong></Typography>
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
  </>
  )
}
</TabPanel>
{/* </Container> */}


{/* <Container maxWidth="sm" align="center"> */}
<TabPanel value={value} index={1}>
<>
{pastTripsSubscriber ? (
<>
<Typography mb={2} variant="h5" align="center"><strong>Past Subscriptions</strong></Typography>
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
  </TabPanel>
    {/* </Container> */}


{/* <Container maxWidth="sm" align="center">  */}
<TabPanel value={value} index={2}>
  <>
  {futureTripsSubscriber  ? (
<>
<Typography mb={2} mt={4} variant="h5" align="center"><strong>Future Subscriptions</strong></Typography>
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
</TabPanel>
  {/* </Container> */}
  </Container>
  </Container>
  </Container>
  </ThemeProvider>
  )
}