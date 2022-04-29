import axios from "axios";
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import { Link as RouterLink } from 'react-router-dom'
import { TripDetailCard } from "../components/TripDetailCard";


const TripDetail = ({token, loggedUserPk }) => {

  const [trip, setTrip] = useState(null)
  const [logs, setLogs] = useState([])
  const [logPk, setLogPk] = useState([])
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
<Container component="main">
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
    sx={{
      mt: 8,
      pl: 4,
    }}
      key={log.pk}
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