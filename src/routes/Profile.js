import * as React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { Card, CardMedia, CardContent, Box, CardActions, Avatar, Typography, Grid, CardItem, ImageList, ImageListItem } from "@mui/material";
import Container from '@mui/material/Container';
import logo from './VagaBondLogo.png';
import { Theme } from '../Theme';
import { ThemeProvider } from 'styled-components';
import TripCard from '../components/TripCard';
import { Link as Navigate } from 'react-router-dom'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import BG2 from './BG2.png'


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



const Profile = ({username, token, image, setImage, location, futureTripsTraveler, futureTripTraveler, loggedUserPk, tripLogs, hasCurrentTrip, contact, firstName, lastName, email, id, isLoggedIn }) => {

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
    }, [token, loggedUserPk, setImage, setTripTotal, setBio, setLast, setFirst, setTrips])

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
    backgroundImage: `url(${BG2})`,
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
      <Container
      sx={{
        marginTop: 3,
              // marginBotton: 50,
        paddingBottom: 15,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'sticky',
      }}
      >

          <Typography variant="h3" component="div">
            {username}
          </Typography>
          <Typography component="div" variant="subtitle1" color="secondary">
              <strong><u>{tripTotal}</u></strong> trips and counting!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {bio}
          </Typography>

    {/* <Card className='ProfileCard'
    sx={{
      height: 175,
      width: '75%',
      display: 'flex',
      flex: 3,
      flexDirection: 'column',
      alignContent: 'center',
    }}
    > */}

      {/* <Grid container spacing={5}>
    <Grid item xs={4}> */}
      {/* <CardMedia className='ProfileCardMedia'
      sx={{
        paddingLeft: 1,
        height: 2,
        width: 2,
      }}
      >
        {VBLogo}
      </CardMedia> */}
    {/* </Grid>
    <Grid item xs={8}>
      
      <CardContent>
          {/* <Typography variant="h5" component="div"
          // sx={{
          //   paddingTop: 5,
          // }}
          >
            {username}
          </Typography>
          <Typography component="div" color="secondary">
              <strong>{tripTotal}</strong> trips and counting!
          </Typography> */}
      {/* </CardContent>
  </Container></Grid> */}
    {/* </Grid> */}

      {/* <CardContent>
          {/* <Typography gutterBottom variant="body2" component="div">
            {first} {last} <br />
          </Typography> */}
          {/* <Typography variant="body2" color="text.secondary">
            {bio}
          </Typography> */}
        {/* </CardContent> */} 

        {/* <CardActions >
              
        </CardActions> */}
      {/* </Box> */}
      {/* </Card> */}

  {/* <Container
  sx={{
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    mx: 'auto',
  > */}

      <Box
      mt={1}
      sx={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        }}
      >
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
              imageUrl={image}
              tripId={trip.pk}
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
          imageUrl={image}    />
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
              imageUrl={image}
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
  {/* </Container> */}
    </Container>
    </Container>
  </ThemeProvider>
    )
  };
  
  export default Profile