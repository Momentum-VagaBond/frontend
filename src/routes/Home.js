import * as React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { Card, CardMedia, CardContent, Box, CardActions, Typography, Grid} from "@mui/material";
import Container from '@mui/material/Container';
import logo from './VagaBondLogo.png';
import { Theme } from '../Theme';
import { ThemeProvider } from 'styled-components';
import TripCard from '../components/TripCard';
import { Link as RouterLink, Navigate } from 'react-router-dom'
import { StartTripCard } from '../components/StartTripCard';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import BG1 from "./BG1.png";


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

export default function Home ({username, token, setImage, location, hasCurrentTrip, setHasCurrentTrip, isLoggedIn, futureTrips, futureTripTraveler, loggedUserPk, firstName, lastName, }) {

  const [usernamePk, setUsernamePk] = useState([]);
  const [tripId, setTripId] = useState("")
  const [tripUsername, setTripUsername] = useState([])
  const [first, setFirst] = useState("")
  const [last, setLast] = useState("")
  const [bio, setBio] = useState("")
  const [tripTotal, setTripTotal] = useState("")
  const [tripTitle, setTripTitle] = useState("");
  const [tripLocation, setTripLocation] = useState("")
  const [logNumber, setLogNumber] = useState("")
  const [tripLogs, setTripLogs] = useState([])
  const [currentTripTraveler, setCurrentTripTraveler] = useState([])
  const [futureTripsTraveler, setFutureTripsTraveler] = useState([])   //this gives future trips
  const [pastTripsTraveler, setPastTripsTraveler] = useState([])   //this gives the 1 Most recent past trip

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const VBLogo = (
    <img src={logo} alt='VBLogo' height='100'/>
  );

  //getting current trip if one exists
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
          // setTripLogs(response.data[0].trip_logs)
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
  }, [token, setCurrentTripTraveler, setTripLocation, setTripTitle, setHasCurrentTrip, setTripId, setImage])




    //Getting Most recent past trip if one exists

  useEffect(() => {
    axios
    .get("https://momentum-vagabond.herokuapp.com/api/trips/past/user/",
        {headers: {Authorization: `Token ${token}`}
    })
    .then((response) => {
        console.log("past trips: " + response.data)
        if (response.data[0]){
          setPastTripsTraveler(response.data)
          setTripId(response.data.pk)
          console.log(response.data.pk)
          console.log("most recent past trip:" + response.data.pk)
        } 
    })
  }, [token, setPastTripsTraveler, hasCurrentTrip, setTripId, setImage])

  // get future trips of traveler
  useEffect(() => {

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
  }, [token, hasCurrentTrip, setFutureTripsTraveler, setTripId, setImage])


  if (!isLoggedIn) {
    return <Navigate to="/login" />
} 
  
  return (

  <ThemeProvider theme={Theme}>

<Container
sx={{
  backgroundImage: `url(${BG1})`,
  backgroundSize: '100%',
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
    {hasCurrentTrip &&
  
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

    <Card className='ProfileCard'
    sx={{
      height: 175,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
    }}
    >
      <Grid container spacing={2}>
    <Grid item xs={4}>
      <CardMedia className='ProfileCardMedia'
      sx={{
        paddingLeft: 1,
        height: 2,
        width: 2,
      }}
      >
        {VBLogo}
      </CardMedia>
    </Grid>
    <Grid item xs={8}>
      <CardContent>
          <Typography variant="h5" component="div"
          // sx={{
          //   paddingTop: 5,
          // }}
          >
              {first} {last}
          </Typography>
          <Typography component="div" color="secondary">
              <strong>{tripTotal}</strong> trips
          </Typography>
      </CardContent>
    </Grid>
    </Grid>

      <CardContent>
          <Typography gutterBottom variant="h6" component="div">
     
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>

        <CardActions >
              
        </CardActions>
      {/* </Box> */}
      </Card>
      <Box
      mt={1}
      sx={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        width: '120%'
        }}
      >
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
    {/* <Container align="center">  */}
  {hasCurrentTrip ? (
    <>
  {currentTripTraveler &&
  
    // <CardActionArea component={RouterLink} to={`/trips/${tripId}`}>
    <TripCard
    sx={{
      border: 2,
    }}
    tripId={currentTripTraveler.pk}
    title={currentTripTraveler.title}
    user={currentTripTraveler.user}
    location={currentTripTraveler.location}
    begin={currentTripTraveler.begin}
    end={currentTripTraveler.end}
    //img={currentTripTraveler.img}
    />
    // </CardActionArea>
  }
  </>
  ) : (
  <>
    <StartTripCard/>  
  </>
  )
}

      </TabPanel>
{/* PAST */}
      <TabPanel value={value} index={1}>
      {pastTripsTraveler.map((pastTripTraveler) => {
          return (
            <TripCard
              username={username}
              key={pastTripTraveler.pk}
              title={pastTripTraveler.title}
              location={pastTripTraveler.location}
              trip_username={pastTripTraveler.username}
              trip_user_first={pastTripTraveler.user_first_name}
              trip_user_last={pastTripTraveler.user_last_name}
              begin={pastTripTraveler.begin}
              end={pastTripTraveler.end}
              tripId={pastTripTraveler.pk}
            />
          )}
        )}
      </TabPanel>

{/* FUTURE */}
      <TabPanel value={value} index={2}>
      {futureTripsTraveler.map((futureTripTraveler) => {
          return (
            <TripCard
              username={username}
              key={futureTripTraveler.pk}
              title={futureTripTraveler.title}
              location={futureTripTraveler.location}
              trip_username={futureTripTraveler.username}
              trip_user_first={futureTripTraveler.user_first_name}
              trip_user_last={futureTripTraveler.user_last_name}
              begin={futureTripTraveler.begin}
              end={futureTripTraveler.end}
              tripId={futureTripTraveler.pk}
            />
          )}
        )}
      </TabPanel>

  </Box>
  </Container>
}
  </Container>
  </Container>
  </ThemeProvider>
    )
  }
