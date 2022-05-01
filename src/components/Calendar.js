import React, { useState } from 'react';
import axios from "axios";
import { Navigate } from 'react-router-dom';
import { Container, FormGroup, Button, Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import 'react-day-picker/dist/style.css';
import { DayPicker } from 'react-day-picker';
import Moment from 'react-moment';
import moment from "moment"
import { format } from 'date-fns';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

export default function NewTrip({token, isLoggedIn}) {
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [begin, setBegin] = useState("");
    const [end, setEnd] = useState("");
    const [error, setError] = useState("");
    const [isSubmit, setSubmit] = useState(false);
    // const [selectedStart, setSelectedStart] = useState(new Date());
    // const [selectedEnd, setSelectedEnd] = useState(new Date())
    

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
    let footer = <p>Type date in box or select on calendar .</p>;
    

    // if (selectedStart) {
    //     footer = <p>You picked <Moment format="MM-D-YYYY">{selectedStart}</Moment>.</p>;
    // }

    // if (selectedEnd) {
    //     footer = <p>You picked <Moment format="MM-D-YYYY">{selectedEnd}</Moment>.</p>;
    // }
    return (
        <Container
        sx={{
            my: 8,
            mx: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
        >
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

    <FormGroup>
        <label htmlFor='reg-title'>Title: </label>
        <TextField id="filled-basic"
            label="Title"
            variant="filled"
            className='tripTitle'
            required value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
    </FormGroup>

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

    <FormGroup>
        <label htmlFor='begin'>Begin: </label>
        <TextField
        id="start-date"
        label="day-month-year"
        type="date"
        defaultValue="0000-00-00"
        onChange={(e) => setBegin(e.target.value)}
        sx={{ width: 220 }}
        InputLabelProps={{
            shrink: true,
        }}
      />
        {/* <TextField id="filled-basic"
            label="day-month-year"
            variant="filled"
            className='tripBegin'
            required value={selectedStart}
            onChange={(e) => setBegin(e.target.value)}
        /> */}
    {/* <DayPicker
      mode="single"
      selected={selectedStart}
      onSelect={setSelectedStart}
      footer={footer}
    /> */}
    <TextField
        id="start-date"
        label="day-month-year"
        type="date"
        defaultValue={begin}
        onChange={(e) => setBegin(e.target.value)}
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </FormGroup>

    <FormGroup>
        <label htmlFor='end'>End: </label>
        <TextField id="filled-basic"
            label="day-month-year"
            variant="filled"
            className='tripEnd'
            required value={end}
            onChange={(e) => setEnd(e.target.value)}
        />
    {/* <DayPicker
      mode="single"
      selected={selectedEnd}
      onSelect={setSelectedEnd}
      footer={footer}
    /> */}
    </FormGroup>

    <Button type='submit' onClick={handleSubmit}>Submit</Button>
    </form>

  
    </Box>
    </Container>
    );
}