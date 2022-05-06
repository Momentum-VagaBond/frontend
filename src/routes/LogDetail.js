// /api/trips/trippk/log/logpk/

import axios from "axios";
import { useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card'
import LogCard from "../components/LogCard";
import CommentBox from "../components/CommentBox";
import Moment from 'react-moment'
import { CardHeader, Typography } from "@mui/material";
import { Theme } from '../Theme';
import { ThemeProvider } from 'styled-components';


const LogDetail = ({token, isLoggedIn}) => {

  const [thisLog, setThisLog] = useState([])
  const [comments, setComments] = useState([])
  const [commentPosted, setCommentPosted] = ''
  // const [questionSubmitted, setQuestionSubmitted] = useState(false)
  
  const params = useParams()
  const logId2 = (params.logId)

  useEffect(() => {
    axios
      .get(`https://momentum-vagabond.herokuapp.com/api/log/${params.logId}/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        setThisLog(res.data)
        setComments(res.data.log_comments)
        console.log(res.data)
        console.log("log detail request fired")
        console.log(res.data.log_comments)
        console.log("trying to set logId: " + logId2)
      })
  }, [params.logId, logId2, token])

  const addNewComment = (newComment) => {
    setComments([...comments, newComment])
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" />
} 

  return (
  <ThemeProvider theme={Theme}>
    <Container component="main"
      sx={{
        backgroundColor:'#e9ecef',
    }}
    >
  <CssBaseline />
    <Box
      sx={{
          marginTop: 0,
          marginBottom: 0,
          paddingTop: 8,
          display: 'grid',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: 5,
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

    {/* <Card>
      <Typography>
        <h2>{thisLog.details}</h2>
      </Typography>
    </Card> */}

{/* Post a comment */}
  <Container
        sx={{
          marginTop: 40,
        }}
  >

  <Box sx={{
    border: 1,
    margin: 0,
    padding: 0,
    borderRadius: 5,
    boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)',
    backgroundColor: 'white',
  }}
  >
    <CommentBox
        token={token}
        logId={thisLog.pk}
        commentPosted={commentPosted}
        setCommentPosted={setCommentPosted}
        setNewComment={addNewComment}
          />
  </Box>

{/* Display comment section */}
  <Container className="responseBox"
    sx={{
      position: 'relative',
    }}
  >
    {comments.map((comment, idx) =>
    <Card
    sx={{
      margin: 2,
      // backgroundColor: '#424b54',
    }}
    >
    <Box sx={{
      margin: 1,
      border: 1,
      borderRadius: 5,
      paddingLeft: 3,
      backgroundColor: 'white',
      '&:hover': {
        transform: 'translateY(-3px)',
        boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
        }
    }}
      key={idx}>
      <h2>{comment.comments}</h2>
      <h3>{comment.user}</h3>
      <Moment format="MM/D/YYYY, h:mm a">{comment.date_commented}</Moment>
    </Box>
    </Card>
    )}
    </Container>
    </Container>
  </Container>
  </ThemeProvider>
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