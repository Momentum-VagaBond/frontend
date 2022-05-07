import * as React from 'react';
import { useState } from 'react';
import axios from "axios";
import { Navigate } from 'react-router-dom';
import { Container, FormGroup, Button, Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Theme } from '../Theme';
import { ThemeProvider } from 'styled-components';
import { FormHelperText } from '@mui/material';
import { useValidation } from 'usetheform';


export default function NewTrip({token, isLoggedIn}) {
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [begin, setBegin] = useState("");
    const [end, setEnd] = useState("");
    const [error, setError] = useState("");
    const [isSubmit, setSubmit] = useState(false);


    // const defaultFields = { Title: '', Location: '', startDate: '', endDate: '' }

    // const [fields, setFields] = useState(defaultFields)

    const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
        console.log(location, title, begin, end);

    // const  = (e) => {
    //     console.log("validating inputs");
    // if (e.target.value === "error")
    //     setError({ ...error, [e.target.name]: true });
    // else setError({ ...error, [e.target.name]: false });
    // };

    axios
    .post("https://momentum-vagabond.herokuapp.com/api/trips/",
    {
        "title": title,
        "location": location,
        "begin": begin,
        "end": end,
    },
    {
        headers: {Authorization: `Token ${token}`}
    }
    )
    .then(response => {
        console.log(response.data);
    setTitle('')
    setLocation('')
    setBegin('')
    setEnd('')
    // setFields(defaultFields)
    alert("form submitted!")
    })
    .catch((e) => setError(e.message))
    }

    // if (fields.length < 0) {
    //     return alert("field is required");
    // }

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
    <FormHelperText id="component-error-text">Error</FormHelperText>
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
        // label="month-day-year"
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
        // label="month-day-year"
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

    {/* <FormGroup>
        <label htmlFor='begin'>Begin: </label>
        <TextField id="filled-basic"
            label="year-month-day"
            variant="filled"
            className='tripBegin'
            required value={begin}
            onChange={(e) => setBegin(e.target.value)}
        />
    </FormGroup> */}
    {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Basic example"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider> */}
{/* 
    <FormGroup>
        <label htmlFor='end'>End: </label>
        <TextField id="filled-basic"
            label="year-month-day"
            variant="filled"
            className='tripEnd'
            required value={end}
            onChange={(e) => setEnd(e.target.value)}
        />
    </FormGroup> */}

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
