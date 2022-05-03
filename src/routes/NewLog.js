import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import { Card, Stack, IconButton, Button, FormGroup, Box, TextField, Container } from '@mui/material';
import {Geolocate} from "../components/Geolocate";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';


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
    <h1>New Trip Log! </h1>
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
{/* <div className="file is-normal has-name container m-5">
        <label className="file-label">
          <input
            className="file-input"
            type="file"
            name="resume"
            ref={imageFileInput}
            onChange={handleFileName}
          />
        </label>
</div> */}
        <Stack direction="row" alignItems="center" spacing={2}>
      {/* <label htmlFor="contained-button-file">
        <Input 
            accept="image/*" 
            id="contained-button-file" 
            multiple type="file" 
            ref={imageFileInput}
            onChange={handleFileName}
            />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label> */}
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
    </Stack>

<IconButton onClick={getLocation}>
        <AddLocationAltTwoToneIcon />
    </IconButton>
        Find your location!
        <p>{status}</p>
    <FormGroup>
        <label htmlFor='reg-location'>Location: (Ideally they use the 'find me' feature, but can also accept text entry) </label>
        <TextField id="filled-basic"
            // label="Location"
            variant="filled"
            placeholder="Durham, NC"
            multiline
            className='tripLocation'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
        />
    </FormGroup>

    <FormGroup>
        <label htmlFor='reg-title'>Log Title: (Keep it short & simple!)</label>
        <TextField id="filled-basic"
            // label="Give your post a shortly and simple title"
            variant="filled"
            placeholder="Dinner Downtown!"
            multiline
            className='tripDetails'
            // value={details}
            // onChange={(e) => setDetails(e.target.value)}
        />
    </FormGroup>

    <FormGroup>
        <label htmlFor='reg-details'>Details: (Tell us more!) </label>
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

    {/* <FormGroup>
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
    </FormGroup> */}


    
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