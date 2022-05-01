import * as React from 'react';
import { useState } from 'react';
import axios from "axios";
import { Navigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Container, FormGroup } from '@mui/material';
import TextField from '@mui/material/TextField';


export default function NewTrip({token, isLoggedIn}) {
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [begin, setBegin] = useState("");
    const [end, setEnd] = useState("");
    const [error, setError] = useState("");
    const [isSubmit, setSubmit] = useState(false);

    const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
        console.log(location, title);

    axios
    .post("https://momentum-vagabond.herokuapp.com/api/trips/",
    {
        "title": title,
        "location": location,
        "begin": begin,
        "end": end,
    },
    {
        headers: {Authorization: `Token ${token}`}
    }
    )
    .then(response => {
        console.log(response.data);
    setTitle('')
    setLocation('')
    setBegin('')
    setEnd('')
    })
    .catch((e) => setError(e.message))
    }

    if (isSubmit) {
        console.log("Submitted!")
    // return <Navigate to='/' />
    }

    if (!isLoggedIn) {
        return <Navigate to="/login" />
    }

    return (
        <Container
        sx={{
            my: 8,
            mx: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
        <Box
        // component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
    {error && <div className="error">{error}</div>}
    <h1>New Trip!</h1>
    <form onSubmit={handleSubmit}>

    <FormGroup>
        <label htmlFor='reg-title'>Title: </label>
        <TextField id="filled-basic"
            label="Title"
            variant="filled"
            className='tripTitle'
            required value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
    </FormGroup>

    <FormGroup>
        <label htmlFor='reg-location'>Location: </label>
        <TextField id="filled-basic"
            label="Location"
            variant="filled"
            className='tripLocation'
            required value={location}
            onChange={(e) => setLocation(e.target.value)}
        />
    </FormGroup>

    <FormGroup>
        <label htmlFor='begin'>Begin: </label>
        <TextField id="filled-basic"
            label="month-day-year"
            variant="filled"
            className='tripBegin'
            required value={begin}
            onChange={(e) => setBegin(e.target.value)}
        />
    </FormGroup>

    <FormGroup>
        <label htmlFor='end'>End: </label>
        <TextField id="filled-basic"
            label="month-day-year"
            variant="filled"
            className='tripEnd'
            required value={end}
            onChange={(e) => setEnd(e.target.value)}
        />
    </FormGroup>

    <button type='submit'>Submit</button>
    </form>
    
    </Box>
    </Container>
    );
}