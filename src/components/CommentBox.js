import { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Form, Button, } from 'react-bulma-components';

// import { Link } from 'react-router-dom'

export default function CommentBox({ token }) {
    const [comment, setComment] = useState('')
    const params = useParams()

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
          
      })
  }

    const handleChange = (inputType, e) => {
        if (inputType === 'commentText') {
          setComment(e.target.value)
        }
    }

    return (
      <>
        <form className='answer-form' onSubmit={handleComment}>    
            <Form.Field>
              <Form.Control>
                <Form.Textarea 
                  className='input-field'
                  type='text'
                  placeholder="Add a comment..."
                  value={comment}
                  onChange={(e) => handleChange('answerText', e)}
                  />
              </Form.Control>
            </Form.Field>
            <Form.Field>
              <Form.Control>
                <Button className='submit-button'>Post comment</Button>
              </Form.Control>
            </Form.Field>
        </form>
      </>
    )
}
