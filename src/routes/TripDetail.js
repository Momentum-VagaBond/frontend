import axios from "axios";
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { TripDetailCard } from "../components/TripDetailCard";


const TripDetail = ({token, pk }) => {

  const [trip, setTrip] = useState(null)
  const [logs, setLogs] = useState([])
  const [logPk, setLogPk] = useState([])
  // const [selectedId, setSelectedId] = useState(null)
  // const [acceptedResponse, setAcceptedResponse] = useState(null)
  // const [questionSubmitted, setQuestionSubmitted] = useState(false)
  
  const params = useParams()

  useEffect(() => {
    axios
      .get(`https://momentum-vagabond.herokuapp.com/api/trips/${params.tripId}`, {
        // headers: {
        //   Authorization: `Token ${token}`,
        // },
      })
      .then((res) => {
        setTrip(res.data)
        setLogs(res.data.trip_logs)
        setLogPk(res.data.pk)
        console.log("logpk", res.data.trip_logs.pk)
        // setAcceptedResponse(res.data.accepted_response)
        console.log("trip detail request fired")
        console.log(res.data.trip_logs)
        console.log(res.data)
        // console.log(username)
      })
  }, [params.tripId, token])


  return (
<Container component="main"
  sx={{
    marginBottom: 10,
  }}
  >
  <CssBaseline />
    <Box
      sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
    >This is the Trip Detail page. 

    </Box>

    {logs.map((log) =>
    <TripDetailCard
    key={pk}
    sx={{
      marginTop: 8,
      paddingLeft: 4,
    }}
      logId={log.pk}
      details={log.details}
      location={log.location}
      date={log.date_logged}
    />
    )}
{/* <CardActionArea component={RouterLink} to={`/trips/${params.tripId}/${log.pk}`}></CardActionArea> */}
  </Container>
  )
}

export default TripDetail;