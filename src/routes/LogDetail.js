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


const LogDetail = ({token, isLoggedIn, setLogSuccess, logSuccess, date_logged}) => {
  // const [logId, setLogId] = useState('')
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
        // setLogSuccess(false)
        console.log(res.data)
        console.log("log detail request fired")
        console.log(res.data.log_comments)
        console.log("trying to set logId: " + logId2)
      })
  }, [params.logId,  logId2, token])

  const addNewComment = (newComment) => {
    setComments([...comments, newComment])
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" />
} 

  return (
  <ThemeProvider theme={Theme}>
  <CssBaseline />

    <Container component="main"
      sx={{
        width: '100%',
        maxWidth: '100%',
        marginTop: 2,
        // display: 'flex',
        // flex: 1,
        // flexDirection: 'column',
        // alignContent: 'center',
        // justifyContent: 'center',
      }}
    >

    {thisLog && (
    <LogCard
    sx={{
    }}
      date_logged={date_logged}
      detail_text={thisLog.details}
      title={thisLog.title}
      latitude={thisLog.latitude}
      longitude={thisLog.longitude}
      location={thisLog.location}
      logPk={thisLog.pk}
      start={thisLog.start}
      log_user={thisLog.user}
    />
    )}

  <Box sx={{
    // border: 1,
    // marginBottom: 5,
    // margin: 0,
    // padding: 0,
    // boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)',
   // backgroundColor: 'white',
    // width: '75%',
    // display: 'flex',
    // flex: 1,
    // flexDirection: 'column',
    // alignContent: 'center',
    // justifyContent: 'center',
  }}
  >
    <CommentBox
    sx={{
    }}
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
      marginBottom: 3,
      width: "85%",
    }}
  >
    {comments.map((comment, idx) =>
    <Card
    sx={{
      marginTop: 1,
      // margin: 1,
      border: 1,
      width: '100%',
      height: 150,
      // borderRadius: 5,
      paddingLeft: 3,
      backgroundColor: 'white',
    }}
      key={idx}>
      <h3>{comment.comments}</h3>
      <h4>{comment.user}</h4>
      <Moment format="MM/D/YYYY, h:mm a">{comment.date_commented}</Moment>
    </Card>
    )}
    </Container>
    {/* </Container> */}
  </Container>
  </ThemeProvider>
  )
}

export default LogDetail;