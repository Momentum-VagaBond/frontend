// /api/trips/trippk/log/logpk/

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


const LogDetail = ({token, logpk, tripId, logId, loggedUserPk }) => {

  const [thisLog, setThisLog] = useState([])
  // const [logs, setLogs] = useState([])
  // const [acceptedResponse, setAcceptedResponse] = useState(null)
  // const [questionSubmitted, setQuestionSubmitted] = useState(false)
  
  const params = useParams()
  // console.log(tripId)
  // console.log(logId)

  useEffect(() => {
    axios
      .get(`https://momentum-vagabond.herokuapp.com/api/trips/${params.tripId}/log/${params.logId}/`, {
        // headers: {
        //   Authorization: `Token ${token}`,
        // },
      })
      .then((res) => {
        setThisLog(res.data)
        // setLog(res.data.trip_logs)
        // setAcceptedResponse(res.data.accepted_response)
        console.log("log detail request fired")
        // console.log(res.data.trip_logs)
        console.log(res.data)
        // console.log(username)
      })
  }, [params.logId, params.tripId, token])


  return (
<Container component="main" maxWidth="xs">
  <CssBaseline />
    <Box
      sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
    >This is the Log Detail page. 

    </Box>
 

    <>
    {thisLog && (
    
        
        
    <Card sx={{
      mt: 8,
      pl: 4,
      // display: 'flex',
      // flexDirection: 'column',
      // // alignItems: 'center', 
      // border: 1
    }}
      
    >
      <p>date logged: {thisLog.date_logged}</p>
      <p>details: {thisLog.details}</p>
      <p>latitude: {thisLog.latitude}</p>
      <p>longitude: {thisLog.longitude}</p>
      <p>location: {thisLog.location}</p>
      <p>pk: {thisLog.pk}</p>
      <p>start: {thisLog.start}</p>
      <p>user: {thisLog.user}</p>
      {/* <p>title: {trip.title}</p>
      <p>location: {trip.location}</p>
      <p>duration: {trip.duration}</p>
      <p>user: {trip.user}</p>
      <p>username: {trip.username}</p>
      <p>first name: {trip.user_first_name}</p>
      <p>last name: {trip.user_last_name}</p> */}

    </Card>
    )}
    </>
    
  </Container>
  )
}

export default LogDetail;

{/* <Grid container wrap="nowrap" spacing={2}>
<Grid item>
  <Avatar>W</Avatar>
</Grid>
<Grid item xs zeroMinWidth>
  <Typography noWrap>{message}</Typography>
</Grid>
</Grid> */}