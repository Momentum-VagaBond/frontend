import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import { Card, Grid, CssBaseline, FormControlLabel, Paper, Stack, IconButton, Button, FormGroup, Box, TextField, Container, Typography,  } from '@mui/material';
import {Geolocate} from "../components/Geolocate";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';
import MapBox from '../components/MapBox';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Theme } from '../Theme';
import { TextareaAutosize } from '@mui/material';

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
    const imageFileInput = useRef(null)
    const [fileName, setFileName] = useState('No file selected')
    const  [imageFile, setImageFile] = useState(null)

    const Input = styled('input')({
        display: 'none',
      });
    
      const theme = createTheme();

    //post request 
//get back location
//display location
//the axios requests need to happen within the getLocation
//need new endpoint

// const ImageUploadForm = ({ token }) => {
//     const imageFileInput = useRef(null)
//     const [fileName, setFileName] = useState('No file selected')
  
    // const handleClick = () => {
    //   const imageFile = imageFileInput.current.files[0]
    //   console.log(imageFile)
    //   axios.post("https://momentum-vagabond.herokuapp.com/auth/users/", imageFile, {
    //     headers: {
    //       Authorization: `Token ${token}`,
    //       'Content-Type': imageFile.type,
    //       'Content-Disposition': `attachment; filename=${imageFile.name}`,
    //     },
    //   })
    // }
  
    const handleFileName = (e) => {
        const imageFile = imageFileInput.current.files[0]
        console.log(imageFile)
        setImageFile(imageFileInput.current.files[0])
        console.log(imageFile)
      setFileName(e.target.files[0].name)
      console.log(e.target.files[0].name)
      return ("file name:" + fileName)
    }

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
                console.log(response.data.features[0].place_name)
                setLocation(response.data.features[0].place_name)
                // setLatitude("")
                // setLongitude("")
            }, [])

        }
    }, [latitude, longitude])



    const handleSubmit = (e) => {
    console.log(imageFile)
    e.preventDefault();
    setError("");
        console.log(location, details, latitude, longitude, imageFile);

    axios
    // .post("https://momentum-vagabond.herokuapp.com/api/users/1/7/log/",
    .post(`https://momentum-vagabond.herokuapp.com/api/users/${loggedUserPk}/3/log/`,
    {
        "user_id": `${loggedUserPk}`,
        "trip": 3,
        "location": location,
        "details": details,
        "latitude": latitude,
        "longitude": longitude,
        // "log_images": imageFile,
    },
    {
        headers: {Authorization: `Token ${token}`}
    }
    )
    .then(response => {
    //     const imageFile = imageFileInput.current.files[0]
    //      axios.post("https://momentum-vagabond.herokuapp.com/api/users/1/7/log/", imageFile, {
    //     headers: {
    //       Authorization: `Token ${token}`,
    //       'Content-Type': imageFile.type,
    //       'Content-Disposition': `attachment; filename=${imageFile.name}`,
    //     },
    //   })
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
    <ThemeProvider theme={Theme}>
    <div className="loginDiv">
            <Grid container component="main">
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
                sx={{
                my: 4,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
            >
        <Typography component="h1" variant="h5" >
            <strong>Create a Log</strong>
        </Typography>
 
    <Box
    sx={{
        mt: 2,
        border: 1,
        borderStyle:"dashed",
        borderColor: "gray"
        }}
        > 
    <Stack direction="row" alignItems="center" >
    <IconButton onClick={getLocation}>
        <AddLocationAltTwoToneIcon />
    </IconButton>
        Find your location!
    <MapBox 
        latitude={latitude}
        longitude={longitude}
    />
    </Stack>
    </Box> 
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1}}>
    <FormGroup>
        <label htmlFor="reg-location">
            {/* <Typography variant="body2">Location: </Typography> */}
            </label>
        <TextField id="filled-basic"
            variant="filled"
            placeholder= {status} 
            multiline
            className='tripLocation'
            value={location}
            sx={{mb: 2, mt: 2}}
            onChange={(e) => setLocation(e.target.value)}
        />
  
        <label htmlFor="reg-title"><Typography variant="body2">Log Title: (Keep it short & simple!)</Typography></label>
        <TextField id="filled-basic"
            // label="Give your post a shortly and simple title"
            variant="filled"
            placeholder="Dinner Downtown!"
            multiline
            className='tripDetails'
            sx={{mb: 2}}
            // value={details}
            // onChange={(e) => setDetails(e.target.value)}
        />
   

    
        <label htmlFor='reg-details'><Typography variant="body2">Details: (Tell us more!)</Typography>  </label>
        <TextField id="filled-basic"
            placeholder="We were so hungry and found this great local BBQ spot..."
            variant="filled"
            className='tripDetails'
            multiline
            rows={4}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
        />
    </FormGroup>
    {error && <div className="error">{error}</div>}

    <label htmlFor="icon-button-file">
        <Input 
        accept="image/*" 
        id="icon-button-file" 
        type="file" 
        ref={imageFileInput}
        onChange={handleFileName}
        />
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
      {fileName}
    {/* </Stack> */}
    <Button 
        type='submit'
        fullWidth
        variant="contained"
        sx={{
            mt: 3,
            mb: 2,
            backgroundColor: '#fe8a39',
            borderRadius: 5,
        }}
        >
    Submit Log
    </Button>
    {/* </Card> */}
    </Box>
    </Box>
    </Grid>
    </Grid>
    </div>
    </ThemeProvider>
    );
}