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
import BG6 from './BG6.png'


const LogDetail = ({token, isLoggedIn, setLogSuccess, logSuccess, date_logged }) => {
  // const [logId, setLogId] = useState('')
  const [thisLog, setThisLog] = useState([])
  const [image, setImage] = useState('')
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
        setImage(res.data.images[0].picture)
        console.log(res.data.images[0].picture)
        setComments(res.data.log_comments)
        // setLogSuccess(false)
        console.log(res.data)
        console.log("log detail request fired")
        console.log(res.data.log_comments)
        console.log("trying to set logId: " + logId2)
      })
  }, [params.logId, setImage, logId2, token])

  const addNewComment = (newComment) => {
    setComments([...comments, newComment])
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" />
} 

  return (
  <ThemeProvider theme={Theme}>

  <Container
    sx={{
      backgroundImage: `url(${BG6})`,
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

  <CssBaseline />

    <Container component="main"
      sx={{
        width: '100%',
        maxWidth: '100%',
        marginTop: 1,
        mx: 'auto',
        pb: 15,
      }}
    >

    {thisLog && (
    <LogCard
    sx={{
    }}
      imageUrl={image}
      date_logged={thisLog.date_logged}
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
    width: '100%',
    mx: 'auto',
    marginBottom: 3,
    margin: 0,
    padding: 0,
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
      width: '100%',
      marginBottom: 3,
      margin: 0,
      padding: 0,
    }}
  >
    {comments.map((comment, idx) =>
    <Card
    sx={{
      marginTop: 1,
      paddingBottom: 1,
      border: 1,
      borderColor: 'grey.500',
      width: '100%',
      paddingLeft: 3,
      backgroundColor: 'white',
      spacing: 1,
      mx: 'auto',
      // lineHeight: 0.5,
    }}
      key={idx}>
      <Typography sx={{ typography: 'body2', marginTop: 2, marginBottom: 2}}>{comment.comments}</Typography>
      <Typography sx={{ typography: 'body2' }}color="primary" ><strong>{comment.username}</strong></Typography>
      <Typography sx={{ typography: 'subtitle2' }} color="primary" ><Moment format="MM/D/YYYY, h:mm a">{comment.date_commented}</Moment></Typography>
    </Card>
    )}
    </Container>
    </Container>
  </Container>
  </ThemeProvider>
  )
}

export default LogDetail;