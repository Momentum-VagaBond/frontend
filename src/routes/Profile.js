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
import TripCard from '../components/TripCard';
import { Link as RouterLink, Navigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { NEWTripDetailCard } from "../components/NEWTripDetailCard";
import { StartTripCard } from '../components/StartTripCard';
import CardActionArea from '@mui/material/CardActionArea';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


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



const Profile = ({username, token, location, futureTripsTraveler, futureTripTraveler, loggedUserPk, tripLogs, hasCurrentTrip, contact, firstName, lastName, email, id, isLoggedIn }) => {

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

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


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
      <CardMedia className='ProfileCardMedia'
      sx={{
        paddingLeft: 1.5,
        height: 3,
        width: 5,
      }}
      >
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

      <Box sx={{ width: '100%', alignContent: 'center,' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Past Trips" {...a11yProps(0)} />
          <Tab label="Current Trip" {...a11yProps(1)} />
          <Tab label="Future Trips" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
      {trips.map((trip, pk) => {
          return (
            <TripCard
              // key={pk}
              // tripId={trip.pk}
              title={trip.title}
              location={trip.location}
              // firstName={trip.user_first_name}
              // lastName={trip.user_last_name}
              // trip_username={trip.username}
              begin={trip.begin}
              end={trip.end}
              // username={username}
              />
          )}
        )}
      </TabPanel>

      <TabPanel value={value} index={1}>
        <TripCard
      
          tripId={trip.pk}
          title={trip.title}
          user={trip.user}
          location={trip.location}
          begin={trip.begin}
          end={trip.end}
          img={trip.img}    />
      </TabPanel>

      <TabPanel value={value} index={2}>
      {trips.map((trip, pk) => {
          return (
            <TripCard
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
      </TabPanel>


      {/* <Container maxWidth="xs">
      <h5>My trips...</h5>
      <Container component="main" align="center" maxWidth="m"> */}
      
      {/* {trips.map((trip) =>
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
          )} */}
      {/* </Container>
      </Container> */}
  
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
  </Box>
    </Container>
  </ThemeProvider>
    )
  };
  
  export default Profile