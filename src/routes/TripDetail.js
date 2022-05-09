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
import { Alert, AlertTitle, Typography } from '@mui/material';


const TripDetail = ({token, pk, tripId, details, logSuccess, setLogSuccess, location, title, log }) => {

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
        setLogSuccess(false)
      })
  }, [params.tripId, setLogSuccess, token])


  return (
    <ThemeProvider theme={Theme}>
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
    <CardActionArea  key={log.pk} component={RouterLink} to={`/trips/${params.tripId}/${log.pk}`}>
    <NEWTripDetailCard
    key={log.pk}
    sx={{
      marginTop: 8,
      paddingLeft: 4,
    }}
      logId={log.pk}
      details={log.details}
      location={log.location}
      title={log.title}
      date={log.date_logged}
    />
    </CardActionArea>
    ))}


  </Container>
  </ThemeProvider>
  )
}

export default TripDetail;