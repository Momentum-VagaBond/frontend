// /api/trips/trippk/log/logpk/

import axios from "axios";
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card'
import LogCard from "../components/LogCard";
import CommentBox from "../components/CommentBox";
import Moment from 'react-moment'
import { CardHeader } from "@mui/material";


const LogDetail = ({token}) => {

  const [thisLog, setThisLog] = useState([])
  const [comments, setComments] = useState([])
  const [commentPosted, setCommentPosted] = ''
  // const [questionSubmitted, setQuestionSubmitted] = useState(false)
  
  const params = useParams()

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
      })
  }, [params.logId, token])

  const addNewComment = (newComment) => {
    setComments([...comments, newComment])
  }

  return (
<Container component="main"
// sx={{
//   backgroundColor: "lightgray",
// }}
>
  <CssBaseline />
    <Box
      sx={{
          marginTop: 8,
          display: 'flex',
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

{/* Post a comment */}
  <Container
        sx={{
          marginTop: 35,
        }}
  >
  <Box sx={{
    border: 1,
    margin: 4,
    padding: 1,
    borderRadius: 5,
    boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)',
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
      borderRadius: 5,
      margin: 2,
    }}
    >
    <Box sx={{
      margin: 2,
      border: 1,
      borderRadius: 5,
      paddingLeft: 3,
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