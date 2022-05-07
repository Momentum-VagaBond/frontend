import * as React from 'react';
import { useState } from 'react';
import axios from "axios";
import { Navigate } from 'react-router-dom';
import { Container, FormGroup, Button, Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Theme } from '../Theme';
import { ThemeProvider } from 'styled-components';


export default function NewTrip({token, isLoggedIn}) {
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [begin, setBegin] = useState("");
    const [end, setEnd] = useState("");
    const [subscribers, setSubscribers] = useState([]);
    const [error, setError] = useState("");
    const [isSubmit, setSubmit] = useState(false);


    // const defaultFields = { Title: '', Location: '', startDate: '', endDate: '' }

    // const [fields, setFields] = useState(defaultFields)

    const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
        console.log(location, title, begin, end);

    axios
    .post("https://momentum-vagabond.herokuapp.com/api/trips/",
    {
        "title": title,
        "location": location,
        "begin": begin,
        "end": end,
        "subscribers": subscribers,
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
    

    if (!isLoggedIn) {
        return <Navigate to="/login" />
    }

    return (
        <ThemeProvider theme={Theme}>
        <Container
        sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#e9ecef',
            position: 'absolute',
        }}>
        <Box
        sx={{
            paddingRight: 2,
            paddingBottom: 6,
            paddingLeft: 2,
            position: 'absolute',
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
    {error && <div className="error">{error}</div>}
    <form onSubmit={handleSubmit}>


    <FormGroup>
        <label htmlFor='reg-title'> Title * </label>
        <TextField
            placeholder='Title'
            id="title"
            // label="Title"
            name='Title'
            variant="filled"
            className='tripTitle'
            required value={title}
            helperText="This is required!"
            onChange={(e) => setTitle(e.target.value)}
        />
    </FormGroup>

    <FormGroup>
        <label htmlFor='reg-location'> Location * </label>
        <TextField
            placeholder='Location'
            id="location"
            // label="Location"
            name='Location'
            variant="filled"
            className='tripLocation'
            required value={location}
            helperText="This is required!"
            onChange={(e) => setLocation(e.target.value)}
        />
    </FormGroup>

    <FormGroup>
    <label htmlFor='begin'> Start Date * </label>
    <TextField
        placeholder='Start Date'
        id="start-date"
        type="date"
        name='startDate'
        required value={begin}
        helperText="This is required!"
        onChange={(e) => setBegin(e.target.value)}
        sx={{ width: 220 }}
        InputLabelProps={{
            shrink: true,
        }}
    />
    </FormGroup>

    <FormGroup>
    <label htmlFor='begin'> End Date * </label>
    <TextField
        placeholder='End Date'
        id="end-date"
        type="date"
        name='endDate'
        required value={end}
        onChange={(e) => setEnd(e.target.value)}
        sx={{ width: 220 }}
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
            mb: 2,
            borderRadius: 5,
        }}
        >
    Start Trip
    </Button>
    </form>
    
    </Box>
    </Container>
    </ThemeProvider>
    );
}
