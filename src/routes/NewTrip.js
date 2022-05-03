import * as React from 'react';
import { useState } from 'react';
import axios from "axios";
import { Navigate } from 'react-router-dom';
import { Container, FormGroup, Button, Box } from '@mui/material';
import TextField from '@mui/material/TextField';
// import { format } from 'date-fns';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';




export default function NewTrip({token, isLoggedIn}) {
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [begin, setBegin] = useState("");
    const [end, setEnd] = useState("");
    const [error, setError] = useState("");
    const [isSubmit, setSubmit] = useState(false);

    // const [value, setValue] = useState(null);

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
    })
    .catch((e) => setError(e.message))
    }

    if (isSubmit) {
        console.log("Submitted!")
    // return <Navigate to='/' />
    }

    if (!isLoggedIn) {
        return <Navigate to="/login" />
    }

    return (
        <Container
        sx={{
            marginTop: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
        <Box
        // component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
    {error && <div className="error">{error}</div>}
    <h1>New Trip!</h1>
    <form onSubmit={handleSubmit}>


    {/* <NewTripForm /> */}


    <FormGroup>
        <label htmlFor='reg-title'>Title: </label>
        <TextField id="title"
            label="Title"
            variant="filled"
            className='tripTitle'
            required value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
    </FormGroup>

    <FormGroup>
        <label htmlFor='reg-location'>Location: </label>
        <TextField id="location"
            label="Location"
            variant="filled"
            className='tripLocation'
            required value={location}
            onChange={(e) => setLocation(e.target.value)}
        />
    </FormGroup>
    <FormGroup>
    <label htmlFor='begin'>Start Date: </label>
    <TextField
        id="start-date"
        label="month-day-year"
        type="date"
        required value={begin}
        onChange={(e) => setBegin(e.target.value)}
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </FormGroup>

    <FormGroup>
    <label htmlFor='begin'>End Date: </label>
    <TextField
        id="end-date"
        label="month-day-year"
        type="date"
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

    <Button type='submit'>Submit</Button>
    </form>
    
    </Box>
    </Container>
    );
}
