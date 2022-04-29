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
import LogCard from "../components/LogCard";
import Moment from 'react-moment'


const LogDetail = ({token, logpk, logId, loggedUserPk }) => {

  const [thisLog, setThisLog] = useState([])
  const [comments, setComments] = useState([])
  // const [questionSubmitted, setQuestionSubmitted] = useState(false)
  
  const params = useParams()
  // console.log(tripId)
  // console.log(logId)

  useEffect(() => {
    axios
      .get(`https://momentum-vagabond.herokuapp.com/api/log/${params.logId}/`, {
        // headers: {
        //   Authorization: `Token ${token}`,
        // },
      })
      .then((res) => {
        setThisLog(res.data)
        setComments(res.data.log_comments)
        console.log("log detail request fired")
        console.log(res.data.log_comments)
        // console.log(res.data)
        // console.log(username)
      })
  }, [params.logId, token])


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
    >This is the Log Detail page. 

    </Box>
{/* Log Detail Card: */}

    <Container>
    {thisLog && (
    <LogCard
      date_logged={thisLog.date_logged}
      detail_text={thisLog.details}
      latitude={thisLog.latitude}
      longitude={thisLog.longitude}
      location={thisLog.location}
      logPk={thisLog.pk}
      start={thisLog.start}
      log_user={thisLog.user}
    />
    )}
    </Container>

{/* Post a comment */}
  <Container>
  <Box border={1} margin={4}>
    Hold this space for making a comment
    <br></br>
  </Box>

{/* Display comment section */}
    {comments.map((comment, idx) =>
    <Box margin={4} border={1} key={idx}>
      <ul>{comment.comments}</ul>
      <ul><Moment format="MM/D/YYYY, h:mm a">{comment.date_commented}</Moment></ul>
      <ul>{comment.user}</ul>
    </Box>
  
    )}
    </Container>
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