import axios from "axios";
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Card } from "@mui/material";
import Container from '@mui/material/Container';
import { ThemeProvider } from "styled-components";
import { Theme } from "../Theme";
import { NEWTripDetailCard } from "../components/NEWTripDetailCard";
import CardActionArea from '@mui/material/CardActionArea';
import { Link as RouterLink } from 'react-router-dom'
import { Alert, AlertTitle, Typography } from '@mui/material';
import MapBox from "../components/MapBox";
import Geolocate from "../components/Geolocate";
import Mapbox from "react-map-gl/dist/esm/mapbox/mapbox";
import { MapboxMap } from "react-map-gl";
import { StartTripCard } from "../components/StartTripCard";
import BG5 from './BG5.png'



const TripDetail = ({token, pk, dateFormatted, hasCurrentTrip, image, imageUrl, setImage, imageDetailUrl, setImageDetailUrl, tripId, details, logSuccess, setLogSuccess, location, title, log, latitude, longitude }) => {

  const [trip, setTrip] = useState(null)
  const [tripLocation, setTripLocation] = useState("")
  const [logs, setLogs] = useState([])
  const [tripPk, setTripPk] = useState([])
  const [photos, setPhotos] = useState([])
  //const [image, setImage] = useState('')
  // const [selectedId, setSelectedId] = useState(null)
  // const [acceptedResponse, setAcceptedResponse] = useState(null)
  // const [questionSubmitted, setQuestionSubmitted] = useState(false)
  
  const params = useParams()

  useEffect(() => {
    axios
      .get(`https://momentum-vagabond.herokuapp.com/api/trips/${params.tripId}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        setTrip(res.data)
        setLogs(res.data.trip_logs)
        // setImage(res.data.images[0].picture)
        setTripPk(res.data.pk)
        setTripLocation(res.data.location)
        // setTripId(res.data.pk)
        console.log("logpk", res.data.trip_logs.pk)
        // setPhotos(logs.images)
        // console.log(photos)
        // setAcceptedResponse(res.data.accepted_response)
        console.log("trip detail request fired")
        console.log("trip logs" + res.data.trip_logs)
        console.log(res.data)
        setLogSuccess(false)
      })
  }, [params.tripId, setLogSuccess, setImage, token])


  return (
    <ThemeProvider theme={Theme}>

    <Container
      sx={{
        backgroundImage: `url(${BG5})`,
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

  <Container component="main" 
    sx={{
      marginBottom: 10,
    }}
    >
  <CssBaseline />
  {logSuccess && 
        <Alert severity="success" autoHideDuration={100} mt={1}>
          <AlertTitle>New Log Created!</AlertTitle>
        </Alert>}
    <Box
      sx={{
          marginTop: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
    >
      <Typography>
      <h1>{tripLocation}</h1>
      </Typography>

    </Box>
    {logs.map((log) => (
    <CardActionArea  key={log.pk} component={RouterLink} to={`/trips/${params.tripId}/${log.pk}`}
    sx={{
      flexDirection: 'column',
      flex: 1,
      position: "relative",
      marginRight: 0,
    }}
    >
    <NEWTripDetailCard
    key={log.pk}
    sx={{
      marginTop: 8,
      //width: '10%',
      //paddingLeft: 4,
    }}
      //imageUrl={imageUrl}
      logId={log.pk}
      details={log.details}
      location={log.location}
      title={log.title}
      date={log.date_logged}
      height='10%'
      width='10%'
    />
    <Box
    // sx={{
    //   width: '70%'
    // }}
    >
{log.images.map((img, idx) => (
      <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        width: '100%',
        height: '100%',
        marginTop: 0,
      }}
      ><ul>
      <img
      key={img.idx}
      imageUrl={imageUrl}
      src={log.images[idx].picture}
      alt={location}
      height='50%'
      width='50%'
      sx={{

        // display: 'flex',
        // flex: 1,
        // flexDirection: 'column',
        // alignItems: 'center',
      }}
      /></ul>
      </Container>
    ))}
            {/* <Typography variant="h6">
        {title}
        </Typography>
        <Typography variant="h7">
        {dateFormatted}
      </Typography> */}
      </Box>

    </CardActionArea>
    ))}


  
{/* {!hasCurrentTrip &&
    <>
    <Alert mt={4} severity="error">
        <AlertTitle>Hey you're not on a trip!</AlertTitle>
            Click below to start a current trip. 
        </Alert>
        <Container maxWidth="sm" align="center">
        
    <StartTripCard>
    </StartTripCard>
    </Container>
    </>
    } */}

  </Container>
  </Container>
  </ThemeProvider>
  )
}

export default TripDetail;