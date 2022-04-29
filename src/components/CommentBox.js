import { useState } from 'react'
import axios from 'axios'
import { TextField, Box, Button } from '@mui/material';;

// import { Link } from 'react-router-dom'

export default function CommentBox({ token, logId }) {
    const [commentPosted, setCommentPosted] = useState('')
    const [comment, setComment] = useState("")
    // const params = useParams()

    const handleComment = (e) => {
      e.preventDefault()
      axios
        .post ("https://momentum-vagabond.herokuapp.com/api/log/9/comment/", {
    
          "log": 9,
          "comments": comment
      },
      {
        headers: {
          'Authorization': `Token ${token}`
        }
      }
      ).then(res => {
        console.log("post comment")
        setComment('')
        setCommentPosted("")
          
      })
  }

    const handleChange = (inputType, e) => {
        if (inputType === 'commentText') {
          setComment(e.target.value)
        }
    }

    return (
      <>
        <Box component='form' noValidate onSubmit={handleComment} sx={{ mt: 3 }}>    
          <TextField
            className='input-field'
            // id="comment"
            type='text'
            required
            fullWidth
            placeholder="Add a comment..."
            value={comment}
            autoFocus
            onChange={(e) => handleChange('commentText', e)}
          />  
          <Button type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, borderRadius: 5 }}>Post comment
          </Button>
        </Box>
      </>
    )
}
