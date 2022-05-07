import axios from "axios";
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ThemeProvider } from "styled-components";
import { Theme } from "../Theme";
import { NEWTripDetailCard } from "../components/NEWTripDetailCard";
import CardActionArea from '@mui/material/CardActionArea';
import { Link as RouterLink } from 'react-router-dom'


const TripDetail = ({token, pk, tripId, details, location, title, log }) => {

  const [trip, setTrip] = useState(null)
  const [tripLocation, setTripLocation] = useState("")
  const [logs, setLogs] = useState([])
  const [tripPk, setTripPk] = useState([])
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
        setTripPk(res.data.pk)
        setTripLocation(res.data.location)
        // setTripId(res.data.pk)
        console.log("logpk", res.data.trip_logs.pk)
        // setAcceptedResponse(res.data.accepted_response)
        console.log("trip detail request fired")
        console.log("trip logs" + res.data.trip_logs)
        console.log(res.data)
        // console.log(username)
      })
  }, [params.tripId, token])


  return (
    <ThemeProvider theme={Theme}>
<Container component="main"
  sx={{
    marginBottom: 10,
  }}
  >
  <CssBaseline />
    <Box
      sx={{
          marginTop: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
    >
      This is the Trip Detail page for trip #{tripPk} to {tripLocation}. 

    </Box>
    
    {logs.map((log) => 
    <CardActionArea component={RouterLink} to={`/trips/${params.tripId}/${log.pk}`}>
    <NEWTripDetailCard
    key={log.pk}
    sx={{
      marginTop: 8,
      paddingLeft: 4,
    }}
      logId={log.pk}
      details={details}
      location={location}
      title={title}
      date={log.date_logged}
    />
    </CardActionArea>
    )}


  </Container>
  </ThemeProvider>
  )
}

export default TripDetail;