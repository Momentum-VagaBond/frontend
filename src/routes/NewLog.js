import React, { useState } from 'react';
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormGroup } from '@mui/material';
import { Navigate } from 'react-router-dom';

export default function NewLog({token}) {
    // const [trip, setTrip] = useState("");
    const [location, setLocation] = useState("");
    const [details, setDetails] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [error, setError] = useState("");
    const [isSubmit, setSubmit] = useState(false);

    const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
        console.log(location, details, latitude, longitude);

    axios
    .post("https://momentum-vagabond.herokuapp.com/api/users/2/2/log/",
    {
        "location": location,
        // "trip": trip,
        "details": details,
        "latitude": latitude,
        "longitude": longitude,
    },
    {
        headers: {Authorization: `Token ${token}`}
    }
    )
    .then(response => {
        console.log(response.data);
    setLocation('')
    // setTrip('')
    setDetails('')
    setLatitude('')
    setLongitude('')
    })
    .catch((e) => setError(e.message))
    }

    // if (!isSubmit) {
    //     console.log("Not submitted!")
    // }
    if (isSubmit) {
        console.log("Submitted!")
    // return <Navigate to='/' />
    }

    // if (!isLoggedIn) {
    //     return <Navigate to="/login" />
    // }



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
    <h1>New Trip Log!</h1>
    <form onSubmit={handleSubmit}>

    <div>

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

    {/* <FormGroup>
        <label htmlFor='reg-trip'>Trip: </label>
        <TextField id="filled-basic"
            label="Trip"
            variant="filled"
            className='tripTrip'
            required value={trip}
            onChange={(e) => setTrip(e.target.value)}
        />
    </FormGroup> */}

    <FormGroup>
        <label htmlFor='reg-details'>Details: </label>
        <TextField id="filled-basic"
            label="Details"
            variant="filled"
            className='tripDetails'
            required value={details}
            onChange={(e) => setDetails(e.target.value)}
        />
    </FormGroup>

    <FormGroup>
        <label htmlFor='reg-latitude'>Latitude: </label>
        <TextField id="filled-basic"
            label="Lat"
            variant="filled"
            className='tripLet'
            required value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
        />
    </FormGroup>

    <FormGroup>
        <label htmlFor='reg-long'>Longitude: </label>
        <TextField id="filled-basic"
            label="Lat"
            variant="filled"
            className='tripLet'
            required value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
        />
    </FormGroup>

        {/* <TextField
            id="filled-search"
            label="Search field"
            type="search"
            variant="filled"
        />
        <TextField
            id="filled-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
            variant="filled"
        /> */}
    <button type='submit'>Submit</button>
    </div>
    </form>

    </Box>
    );
}