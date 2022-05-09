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

export default function NewLog({token, hasCurrentTrip, loggedUserPk, tripId, setLogSuccess, logSuccess, isLoggedIn}) {
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
        console.log(imageFile);
        setConfirm(true);
        e.preventDefault();
        setError('')
        console.log(location, details, title, latitude, longitude, fileType, fileName, logId);
        navigate('/home');

        axios
        .post(
            `https://momentum-vagabond.herokuapp.com/api/users/${loggedUserPk}/${tripId}/log/`,
            {
                location: location,
                title: title,
                details: details,
                // latitude: latitude,
                // longitude: longitude,
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
            setTitle('')
            setDetails('')
            setLatitude('')
            setLongitude('')
            setSubmit(logId)
            const imageFile = imageFileInput.current.files[0]
            console.log(imageFile)
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
                // setLogSuccess(true)
                // console.log(logSuccess)
                alert("form submitted!")
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
    {/* <Container sx={{
            paddingBottom: 15,
            marginBottom:5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'sticky',
            }}> */}

        <Container component="main" maxWidth="sm" align="center" >
        <CssBaseline />
        {/* <Grid item xs={12} sm={8} md={5} > */}
            <Box
                sx={{
                marginTop: 3,
                // marginRight: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                //position can be removed to create a white box that holds the form
                // position: 'absolute',
                // backgroundColor: '#e9ecef',
                }}
            >
        <Typography component="h1" variant="h5" color="primary" >
            <strong>Create a Log </strong>
        </Typography>

    <Box maxWidth="sm" align="center"
    sx={{
        mt: 2,
        // border: 1,
        // borderStyle:"dashed",
        // borderColor: "gray"
        }}
        > 
    {/* <Stack direction="row" alignItems="center" > */}
   
    <MapBox align="center" ml={1}
        latitude={latitude}
        longitude={longitude}
    />
     <Button type='submit'
        variant="contained"
        sx={{
            mt: 3,
            borderRadius: 5,
            backgroundColor: "secondary"
        }}onClick={getLocation}>
        <AddLocationAltTwoToneIcon mr={3}/>
        Locate Me 
    </Button>
        
    {/* </Stack> */}
    </Box> 
    <Box
    sx={{
        mt: 1,
        marginTop: 2,
        marginBottom: 2,
        marginRight: 0,
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        // position: 'absolute',
        // paddingRight: 2,
        // paddingBottom: 6,
        paddingLeft: 0,
        position: 'relative',
        width: '40ch',
        '& .MuiTextField-root': { m: 1, width: '40ch' },

    }}
    autoComplete="off" noValidate>

    {error && <div className="error">{error}</div>}
    <form onSubmit={handleSubmit}></form>

    <FormGroup>
        <label htmlFor="reg-location">
            {/* <Typography variant="body2">Location: </Typography> */}
            </label>
        <label htmlFor="reg-title" align="left"><Typography variant="body2">Location*</Typography></label>
        <TextField id="outlined-basic"
            variant="outlined"
            placeholder= {status} 
            multiline
            className='tripLocation'
            margin='normal'
            value={location}
            sx={{mb: 3}}
            onChange={(e) => setLocation(e.target.value)}
        />
  
        <label htmlFor="reg-title" align="left"><Typography variant="body2">Log Title* (Keep it short & simple!)</Typography></label>
        <TextField id="outlined-basic"
            // label="Give your post a shortly and simple title"
            variant="outlined"
            placeholder="Dinner Downtown!"
            multiline
            className='tripTitle'
            sx={{mb: 3}}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />


        <label htmlFor='reg-details' align="left"><Typography variant="body2">Details* (Tell us more!)</Typography>  </label>
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
            mb: 10,
            borderRadius: 5,
        }}
        >
    Submit Log
    </Button>
    {/* </Card> */}
    </Box>
    </Box>
    {/* </Grid> */}
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