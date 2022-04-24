import React, { useState } from 'react';
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { SettingsInputAntennaSharp } from "@mui/icons-material";


export const NewTrip = ({token, setAuth}) => {
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [duration, setDuration] = useState("");
    // const [user, setUser] = useState("");
    // const [userFirstName, setUserFirstName] = ("");
    // const [userLastName, setUserLastName] = ("");
    const [error, setError] = useState("");
    const [isSubmit, setSubmit] = useState(false);

    const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
        console.log(location, title, duration);

    axios
    .post("https://momentum-vagabond.herokuapp.com/api/trips/",
    {
        headers: {Authorization: `Token ${token}`},
    },
    {
        title: "title",
        location: "location",
        duration: "duration",
    })
    .then((response) => {
        console.log(response.data);
    setTitle('')
    setLocation('')
    setDuration('')
    // setSubmit(true)
    })
    .catch((e) => setError(e.message))
    }

    if (isSubmit) {
        console.log("Submitted!")
    // return <Navigate to='/' />
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
    <form onSubmit={handleSubmit}>
    
    <label htmlFor='reg-title'>Title: </label>
        <TextField id="filled-basic"
        label="Title"
        variant="filled"
        className='reg-title'
        required value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
    
    <label htmlFor='reg-location'>Location: </label>
    <TextField id="filled-basic"
        label="Location"
        variant="filled"
        className='reg-location'
        required value={location}
        onChange={(e) => setLocation(e.target.value)}
    />
    
        <br></br>
    
    <label htmlFor='duration'>Duration </label>
    <TextField id="filled-basic"
        label="Duration"
        variant="filled"
        className='password-reg'
        required value={duration}
        onChange={(e) => setDuration(e.target.value)}
    />

    < button type='submit'>Submit</button>
    </form>
    
    </Box>
    );
    }