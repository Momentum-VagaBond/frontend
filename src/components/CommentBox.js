import { useState } from 'react'
import axios from 'axios'
import {
  TextField,
  Container,
  Box,
  Button,
} from '@mui/material'

export default function CommentBox({ token, logId, setNewComment }) {
  const [commentPosted, setCommentPosted] = useState('')
  const [comment, setComment] = useState('')
  // const params = useParams()

  const handleComment = (e) => {
    e.preventDefault()
    axios
      .post(
        `https://momentum-vagabond.herokuapp.com/api/log/${logId}/comment/`,
        {
          log: `${logId}`,
          comments: comment,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then((res) => {
        console.log('post comment')
        console.log(res.data)
        // setComment('')
        // setCommentPosted('')
        setNewComment(res.data)
      })
  }

  const handleChange = (inputType, e) => {
    if (inputType === 'commentText') {
      setComment(e.target.value)
    }
  }

    return (
      <>
      <Container
      sx={{

        width: '100%',
        // border: 1,
        marginBottom: 3,
        margin: 0,
        padding: 0,
        marginTop: 2,
      }}
      >
        <Box
        component='form'
        noValidate onSubmit={handleComment}
        sx={{ 
          mt: 0,
          position: 'relative',
          width: '100%',
        }}
        >    
          <TextField
            className='input-field'
            // id="comment"
            type='text'
            required
            fullWidth
            placeholder="Add a comment!"
            value={comment}
            autoFocus
            onChange={(e) => handleChange('commentText', e)}
            sx={{
              backgroundColor: 'white',
              width: '100%',
            }}
          />  
          <Button type="submit"
            variant="contained"
            color='secondary'
            sx={{
              mt: .25,
              mb: 2,
              // borderRadius: 5,
              color: 'white',
              // backgroundImage: 'linear-gradient(147deg, #2af1b5 0%, #fd3838 90%)',
            }}>
              Post comment
          </Button>
        </Box>
        </Container>
      </>
    )
}
