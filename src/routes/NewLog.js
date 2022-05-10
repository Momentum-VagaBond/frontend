import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import { Card, Grid, Alert, AlertTitle, CssBaseline, Paper, Stack, IconButton, Button, FormGroup, Box, TextField, Container, Typography,  } from '@mui/material';
// import {Geolocate} from "../components/Geolocate";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';
import MapBox from '../components/MapBox';
import { Theme } from '../Theme';
import { ThemeProvider } from 'styled-components';
import { Navigate, useNavigate } from 'react-router-dom';
import AddLocationAltTwoToneIcon from '@mui/icons-material/AddLocationAltTwoTone';
import { StartTripCard } from "../components/StartTripCard";

export default function NewLog({token, hasCurrentTrip, setLogSuccess, loggedUserPk, tripId, logSuccess, isLoggedIn}) {
    const [location, setLocation] = useState("");
    const [details, setDetails] = useState("");
    const [latitude, setLatitude] = useState("");
    const [title, setTitle] = useState("");
    const [longitude, setLongitude] = useState("");
    const [error, setError] = useState("");
    const [status, setStatus] = useState("")
    const [isSubmit, setSubmit] = useState(false);
    const imageFileInput = useRef(null);
    const [fileName, setFileName] = useState('No file selected');
    const [fileType, setFileType] = useState('No file selected');
    const [imageFile, setImageFile] = useState(null);
    const [logId, setLogId] = useState("");
    const [confirm, setConfirm] = useState(false);
    const navigate = useNavigate();

    const Input = styled('input')({
        display: 'none',
    });
    

    const handleFileName = (e) => {
        const imageFile = imageFileInput.current.files[0]
        console.log(imageFile)
        setImageFile(imageFileInput.current.files[0])
        console.log(imageFile)
        setFileName(e.target.files[0].name)
        console.log(e.target.files[0].name)
        setFileType(e.target.files[0].type)
        console.log(e.target.files[0].type)
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
                // console.log(response.data.features[0].place_name)
                setLocation(response.data.features[0].place_name)
                // setLatitude("")
                // setLongitude("")
            }, [])

        }
    }, [latitude, longitude])


    const handleSubmit = (e) => {
        console.log(imageFile)
        e.preventDefault()
        setError('')
        console.log(location, details, title, latitude, longitude, fileType, fileName, logId)

        axios
        .post(
            `https://momentum-vagabond.herokuapp.com/api/users/${loggedUserPk}/${tripId}/log/`,
            {
                user_id: loggedUserPk,
                trip: tripId,
                location: location,
                title: title,
                details: details,
                latitude: latitude,
                longitude: longitude,
            },
            {
                headers: { Authorization: `Token ${token}` },
            }
        )
        .then((response) => {
            console.log(response.data)
            console.log('this should be the pk' + response.data.pk)
            setLogId(response.data.pk)
            console.log("logId" + logId)
            setLocation('')
            setDetails('')
            setLatitude('')
            setLongitude('')
            setSubmit(logId)
            // const imageFile = imageFileInput.current.files[0]
            // console.log(imageFile)
            // const logId2 = (response.data.pk)
            return axios
        
                .post(
                `https:/momentum-vagabond.herokuapp.com/api/logs/${(response.data.pk)}/images/`,
                // "https:/momentum-vagabond.herokuapp.com/api/logs/66/images/",
                imageFile,
                {
                    headers: {
                    Authorization: `Token ${token}`,
                    'Content-Type': `${fileType}`,
                    'Content-Disposition': `attachment; filename=${fileName}`,
                    },
                }
            )
            .then((response) => {
                console.log(response.data)
                console.log(logId)
                setLogSuccess(true)
                console.log(logSuccess)
            })
            .catch((e) => setError(e.message))
            }, [token, imageFile, logId, fileName, fileType])
        // })
    }

    if (logSuccess) {
        // alert("Success! Log submitted!")
        // console.log("Submitted!")
        return <Navigate to={`/trips/${tripId}`} />
    }

    if (!isLoggedIn) {
        return <Navigate to="/login" />
    } 

    return (

    <ThemeProvider theme={Theme}>
    {hasCurrentTrip &&
    <div className="newLog">
 

        <Container component="main" maxWidth="sm" align="center" >
        <CssBaseline />

            <Box
                sx={{
                marginTop: 3,
                align: "center"
                // marginRight: 2,
                // display: 'flex',
                // flexDirection: 'column',
                // alignItems: 'center',
                //position can be removed to create a white box that holds the form
                // position: 'absolute',
                // backgroundColor: '#e9ecef',
                }}
            >
        {/* <Typography component="h1" variant="h5" color="primary" >
            <strong>Create a Log </strong>
        </Typography> */}

    {/* <Box maxWidth="sm" align="center"
    sx={{
        mt: 2,
        }}
        > 
    */}
    <Box sx={{display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'}}>
    <MapBox align="center" ml={1}
        latitude={latitude}
        longitude={longitude}
    />
    <Button type='submit'
        variant="contained"
        sx={{
            mt: 3,
            // borderRadius: 5,
            backgroundColor: "secondary"
        }}onClick={getLocation}>
        <AddLocationAltTwoToneIcon mr={3}/>
        Locate Me 
    </Button>   
   
    </Box> 
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2}}>
    <FormGroup>
        <label htmlFor="reg-location">
            </label>
        <label htmlFor="reg-title" align="left"><Typography variant="body2">Location *</Typography></label>
        <TextField id="outlined-basic"
            variant="outlined"
            placeholder= {status} 
            multiline
            className='tripLocation'
            value={location}
            sx={{mb: 3}}
            onChange={(e) => setLocation(e.target.value)}
        />
  
        <label htmlFor="reg-title" align="left"><Typography variant="body2">Log Title * </Typography></label>
        <TextField id="outlined-basic"
            variant="outlined"
            placeholder="Dinner Downtown!"
            multiline
            className='tripTitle'
            sx={{mb: 3}}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />


        <label htmlFor='reg-details' align="left"><Typography variant="body2">Details *</Typography>  </label>
        <TextField id="outlined-basic"
            placeholder="We were so hungry and found this great local BBQ spot..."
            variant="outlined"
            className='tripDetails'
            multiline
            sx={{mb: 3}}
            rows={4}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
        />
    </FormGroup>
    {error && <div className="error">{error}</div>}
{/* 
    <label htmlFor="icon-button-file">
        <Input 
        accept="image/*" 
        id="icon-button-file" 
        type="file" 
        ref={imageFileInput}
        onChange={handleFileName}
        /> */}
   
    <label htmlFor="contained-button-file">
        <Input 
        accept="image/*" 
        id="contained-button-file" 
        type="file" 
        ref={imageFileInput}
        onChange={handleFileName}
        />
        <Button color="primary" variant="outlined" aria-label="upload picture" component="span" sx={{
            borderRadius: 5,
        }}>
            <PhotoCamera mr={3} />
            Add Photo
        </Button>
    </label>
    <h6>
        {fileName}
        </h6>
  
        
        
    <Button 
        type='submit'
        fullWidth
        variant="contained"
        sx={{
            mt: 1,
            mb: 10,
            //borderRadius: 5,
        }}
        >
    Submit Log
    </Button>
  
    </Box>
    </Box>
    
    </Container>
    </div>
    }
    
   {!hasCurrentTrip &&
    <>
    <Alert mt={4} severity="error">
        <AlertTitle>Hey you're not on a trip!</AlertTitle>
            Click below to start a current trip. 
        </Alert>
        <Container maxWidth="sm" align="center">
        
    <StartTripCard>
    </StartTripCard>
    </Container>
    </>
    }
   
    </ThemeProvider> 
    )
}