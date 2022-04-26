import React, { useState } from 'react';
import axios from "axios";
import { Navigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { FormGroup } from '@mui/material';
import TextField from '@mui/material/TextField';
import { SettingsInputAntennaSharp } from "@mui/icons-material";


export default function NewTrip({token, isLoggedIn}) {
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [duration, setDuration] = useState("");
    const [error, setError] = useState("");
    const [isSubmit, setSubmit] = useState(false);

    const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
        console.log(location, title, duration);

    axios
    .post("https://momentum-vagabond.herokuapp.com/api/trips/",
    {
        "title": title,
        "location": location,
        "duration": duration,
    },
    {
        headers: {Authorization: `Token ${token}`}
    }
    )
    .then(response => {
        console.log(response.data);
    setTitle('')
    setLocation('')
    setDuration('')
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
        <label htmlFor='duration'>Duration: </label>
        <TextField id="filled-basic"
            label="Duration"
            variant="filled"
            className='tripDuration'
            required value={duration}
            onChange={(e) => setDuration(e.target.value)}
        />
    </FormGroup>

    <button type='submit'>Submit</button>
    </form>
    
    </Box>
    );
}