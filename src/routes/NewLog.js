import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Card, IconButton, Button, FormGroup, Box, TextField, Container } from '@mui/material';
import {Geolocate} from "../components/Geolocate";

import AddLocationAltTwoToneIcon from '@mui/icons-material/AddLocationAltTwoTone';

export default function NewLog({token, loggedUserPk, tripId}) {
    // const [trip, setTrip] = useState("");
    const [location, setLocation] = useState("");
    const [details, setDetails] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [error, setError] = useState("");
    const [status, setStatus] = useState("")
    const [isSubmit, setSubmit] = useState(false);

    //post request 
//get back location
//display location
//the axios requests need to happen within the getLocation
//need new endpoint
    const getLocation = () => {
        if (!navigator.geolocation) {
            setStatus('Geolocation is not supported by your browser');
        } else {
            setStatus('Locating...');
            navigator.geolocation.getCurrentPosition((position) => {
            setStatus(null);
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        }, () => {
            setStatus('Unable to retrieve your location');
        });
        }
    }

    useEffect(() => {
        // isolating address info based on database poi data
        if (latitude !== null) {
          // creates search query for mapbox forward geocode - address into coordinates
            axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?limit=1&types=address%2Cpoi&access_token=pk.eyJ1IjoiZW1pbHlmbG8iLCJhIjoiY2wyZGRsNG9hMHk0aDNicGR1bjhxZGZmdyJ9.OwfzAfjxswxUss6pTmNVUQ`)
            .then(response => {
                console.log(response.data)
                // setLatitude("")
                // setLongitude("")
            }, [])

        }
      }, [latitude, longitude])
  


    const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
        console.log(location, details, latitude, longitude);

    axios
    // .post("https://momentum-vagabond.herokuapp.com/api/users/1/7/log/",
    .post(`https://momentum-vagabond.herokuapp.com/api/users/${loggedUserPk}/7/log/`,
    {
        "user_id": `${loggedUserPk}`,
        "trip": 7,
        "location": location,
        "details": details,
        // "latitude": latitude,
        // "longitude": longitude,
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

    return (
        <Container
        sx={{
            marginTop: 0,
        }}
        >
        <Box
        sx={{
            marginTop: 0,
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            backgroundColor:'#e9ecef',
        }}
        noValidate
        autoComplete="on"
        >
        {/* <Geolocate
        latitude={latitude}
        longitude={longitude}
        /> */}
    {error && <div className="error">{error}</div>}
    <h1>New Trip Log! {loggedUserPk} </h1>
    <form onSubmit={handleSubmit}>

    <div>

    <Card
        variant="outlined"
        sx={{ 
            my: 5,
            mx: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: 345 }}
    >

<IconButton onClick={getLocation}>
        <AddLocationAltTwoToneIcon />
    </IconButton>
        Find your location!

    <FormGroup>
        <label htmlFor='reg-location'>Location: </label>
        <TextField id="filled-basic"
            label="Location"
            variant="filled"
            className='tripLocation'
            // required value={location}
            onChange={(e) => setLocation(e.target.value)}
        />
    </FormGroup>

    <FormGroup>
        <label htmlFor='reg-details'>Details: </label>
        <TextField id="filled-basic"
            label="Details"
            variant="filled"
            className='tripDetails'
            value={details}
            onChange={(e) => setDetails(e.target.value)}
        />
    </FormGroup>

    <FormGroup>
        <label htmlFor='reg-latitude'>Latitude: </label>
        <TextField id="filled-basic"
            label={latitude}
            variant="filled"
            className='tripLet'
            autoComplete='on'
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
        />
    </FormGroup>

    <FormGroup>
        <label htmlFor='reg-long'>Longitude: </label>
        <TextField id="filled-basic"
            label="Lat"
            variant="filled"
            className='tripLet'
            autoComplete='on'
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
        />
    </FormGroup>


    
    <Button type='submit'>
    Create Log!
    </Button>
       

    </Card>
    </div>
    </form>

    </Box>
    </Container>
    );
}