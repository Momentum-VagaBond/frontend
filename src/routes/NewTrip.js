import * as React from 'react';
import { useState } from 'react';
import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom';
import { Container, FormGroup, Button, Box, Card, Grid, Paper, CssBaseline, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Theme } from '../Theme';
import { ThemeProvider } from 'styled-components';



export default function NewTrip({token, isLoggedIn, VBLogo, loggedUserPk}) {
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [begin, setBegin] = useState("");
    const [end, setEnd] = useState("");
    const [subscribers, setSubscribers] = useState([]);
    const [error, setError] = useState("");
    const [submit, setSubmit] = useState();
    const [confirm, setConfirm] = useState(false);
    const navigate = useNavigate();



    const handleSubmit = (e) => {
    e.preventDefault();
    setConfirm(true);
    setError("");
        console.log(location, title, begin, end);
    navigate('/home')


    axios
    .post("https://momentum-vagabond.herokuapp.com/api/trips/",
    {
        "title": title,
        "location": location,
        "begin": begin,
        "end": end,
        "subscribers": [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37],
    },
    {
        headers: {Authorization: `Token ${token}`}
    }
    )
    .then((response) => {
        console.log(response.data);
    setTitle('')
    setLocation('')
    setBegin('')
    setEnd('')
    setSubscribers([])
    alert("form submitted!")
    })
    .catch((e) => setError(e.message))
    }


    // if (!loggedUserPk) {
    //     return <Navigate to="/login" />
    // }


    return (
    <ThemeProvider theme={Theme}>
    <CssBaseline />
            
        <Container
        sx={{
            marginTop: 3,
            align: "center",
            paddingBotton: 15
        }}>
        {/* <Typography component="h1" variant="h5" >
            <strong>Create a Trip</strong>
        </Typography> */}

        {/* <Grid container component="main">
        <Grid item xs={12} sm={8} md={5} > */}
        <Box
        sx={{
           mt: 2
            // display: 'flex',
            // flexDirection: 'column',
            // alignItems: 'center',
            // marginTop: 2,
            // marginBottom: 2,
            // marginRight: 0,
            // display: 'flex',
            // flex: 1,
            // flexDirection: 'column',
            // alignItems: 'center',
            // // position: 'absolute',
            // // paddingRight: 2,
            // // paddingBottom: 6,
            // paddingLeft: 0,
            // position: 'fixed',
            // width: '40ch',
            // '& .MuiTextField-root': { m: 1, width: '40ch' },
        }}
        noValidate
        autoComplete="off"
        >
    {error && <div className="error">{error}</div>}
    <form onSubmit={handleSubmit}>


    <FormGroup>
        <label htmlFor='reg-title' align="left"><Typography variant="body2"> Title *</Typography> </label>
        <TextField
            placeholder='Title'
            id="title"
            // label="Title"
            name='Title'
            variant="outlined"
            className='tripTitle'
            required value={title}
            margin="normal"
            sx={{mb: 3}}
            // helperText="This is required!"
            onChange={(e) => setTitle(e.target.value)}
        />
    </FormGroup>

    <FormGroup>
        <label htmlFor='reg-location' align="left"> <Typography variant="body2">Location * </Typography></label>
        <TextField
            placeholder='Location'
            id="location"
            // label="Location"
            name='Location'
            variant="outlined"
            className='tripLocation'
            margin="normal"
            sx={{mb: 3}}
            required value={location}
            // helperText="This is required!"
            onChange={(e) => setLocation(e.target.value)}
        />
    </FormGroup>

    <FormGroup>
    <label htmlFor='begin' align="left"><Typography variant="body2"> Start Date * </Typography></label>
    <TextField
        placeholder='Start Date'
        id="start-date"
        type="date"
        name='startDate'
        margin="normal"
        required value={begin}
       
        // helperText="This is required!"
        onChange={(e) => setBegin(e.target.value)}
        sx={{ width: 220, marginBotton: 3 }}
        InputLabelProps={{
            shrink: true,
        }}
    />
    </FormGroup>

    <FormGroup>
    <label htmlFor='begin'><Typography variant="body2"> End Date * </Typography></label>
    <TextField
        placeholder='End Date'
        id="end-date"
        type="date"
        name='endDate'
        margin="normal"
        required value={end}
        onChange={(e) => setEnd(e.target.value)}
        sx={{ width: 220, marginBottom: 3 }}
        InputLabelProps={{
            shrink: true,
        }}
    />
    </FormGroup>

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
    Start Trip
    </Button>
    </form>
    
    </Box>
    {/* </Grid>
    </Grid> */}
    </Container>


    </ThemeProvider>
    );
}
